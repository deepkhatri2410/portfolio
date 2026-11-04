import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';
import { deepOSCommands } from '../data/portfolioData';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OutputLine = {
  id: number;
  type: 'command' | 'output' | 'system' | 'error' | 'success' | 'surprise';
  content: string;
};

const BOOT_SEQUENCE = [
  'Initializing DEEP.OS v1.0.0...',
  'Loading developer profile...',
  'Mounting project directory...',
  'Connecting to cloud services...',
  '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
  'DEEP.OS — The Developer Experience',
  'Type "help" to see available commands.',
  '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
];

const themes = {
  default: { bg: '#050810', border: '#7c3aed', prompt: '#06b6d4', output: '#94a3b8', accent: '#a855f7' },
  matrix: { bg: '#001100', border: '#00ff00', prompt: '#00ff00', output: '#00cc00', accent: '#00ff44' },
  ocean: { bg: '#020b18', border: '#0ea5e9', prompt: '#38bdf8', output: '#7dd3fc', accent: '#0ea5e9' },
  sunset: { bg: '#1a0a0a', border: '#f97316', prompt: '#fb923c', output: '#fed7aa', accent: '#f97316' },
};

type ThemeName = keyof typeof themes;

export default function DeepOS({ isOpen, onClose }: TerminalProps) {
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [booting, setBooting] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('default');
  const [surpriseActive, setSurpriseActive] = useState(false);
  const outputEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);

  const theme = themes[currentTheme];

  const addLine = useCallback((type: OutputLine['type'], content: string) => {
    setOutput((prev) => [...prev, { id: idRef.current++, type, content }]);
  }, []);

  // Boot sequence
  useEffect(() => {
    if (!isOpen) return;
    setOutput([]);
    setBooting(true);

    let i = 0;
    const run = () => {
      if (i < BOOT_SEQUENCE.length) {
        addLine(i === 5 ? 'success' : 'system', BOOT_SEQUENCE[i]);
        i++;
        setTimeout(run, i < 4 ? 120 : 60);
      } else {
        setBooting(false);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };
    const t = setTimeout(run, 200);
    return () => clearTimeout(t);
  }, [isOpen, addLine]);

  // Auto-scroll
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const processCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      addLine('command', `$ ${raw}`);
      setHistory((prev) => [raw, ...prev.slice(0, 49)]);
      setHistoryIdx(-1);

      switch (cmd) {
        case 'help':
          addLine('output', deepOSCommands.help);
          break;
        case 'about':
          addLine('output', deepOSCommands.about);
          break;
        case 'skills':
          addLine('output', deepOSCommands.skills);
          break;
        case 'projects':
          addLine('output', deepOSCommands.projects);
          break;
        case 'journey':
          addLine('output', deepOSCommands.journey);
          break;
        case 'achievements':
          addLine('output', deepOSCommands.achievements);
          break;
        case 'superpowers':
          addLine('output', deepOSCommands.superpowers);
          break;
        case 'contact':
          addLine('output', deepOSCommands.contact);
          break;
        case 'surprise':
          setSurpriseActive(true);
          addLine('surprise', deepOSCommands.surprise);
          setTimeout(() => setSurpriseActive(false), 4000);
          break;
        case 'clear':
          setOutput([]);
          return;
        case 'exit':
          addLine('system', 'Closing DEEP.OS... Goodbye! 👋');
          setTimeout(onClose, 800);
          break;
        case 'theme': {
          const themeList = Object.keys(themes).join(' | ');
          addLine('output', `Available themes: ${themeList}\nUsage: theme <name>\nCurrent: ${currentTheme}`);
          break;
        }
        default:
          if (cmd.startsWith('theme ')) {
            const name = cmd.replace('theme ', '').trim() as ThemeName;
            if (themes[name]) {
              setCurrentTheme(name);
              addLine('success', `✓ Theme changed to "${name}"`);
            } else {
              addLine('error', `Theme "${name}" not found. Try: ${Object.keys(themes).join(', ')}`);
            }
          } else {
            addLine(
              'error',
              `Command not found: "${cmd}"\nType "help" to see available commands.`
            );
          }
      }
    },
    [addLine, onClose, currentTheme]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIdx = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(newIdx);
      setInput(history[newIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(newIdx);
      setInput(newIdx === -1 ? '' : history[newIdx]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Basic autocomplete
      const cmds = ['help', 'about', 'skills', 'projects', 'journey', 'achievements', 'superpowers', 'contact', 'theme', 'surprise', 'clear', 'exit'];
      const match = cmds.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const getLineColor = (type: OutputLine['type']) => {
    switch (type) {
      case 'command': return theme.prompt;
      case 'success': return '#10b981';
      case 'error': return '#ef4444';
      case 'surprise': return theme.accent;
      case 'system': return theme.accent + 'cc';
      default: return theme.output;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Surprise overlay */}
          <AnimatePresence>
            {surpriseActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent)',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              width: '100%',
              maxWidth: 780,
              maxHeight: '85vh',
              background: theme.bg,
              border: `1px solid ${theme.border}`,
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `0 30px 80px rgba(0,0,0,0.7), 0 0 40px ${theme.border}30`,
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Title bar */}
            <div
              style={{
                background: `${theme.bg}ee`,
                borderBottom: `1px solid ${theme.border}40`,
                padding: '0.6rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexShrink: 0,
              }}
            >
              {/* macOS-style controls */}
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  onClick={onClose}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: '#ff5f57',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                  }}
                  aria-label="Close"
                  title="Close"
                >
                  <X size={7} color="#7f0000" />
                </button>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e', opacity: 0.6 }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', opacity: 0.6 }} />
              </div>

              {/* Title */}
              <div
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: theme.accent,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                }}
              >
                <Terminal size={11} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'middle' }} />
                DEEP.OS — Developer Terminal
              </div>

              {/* Theme indicator */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: theme.output,
                  opacity: 0.7,
                }}
              >
                [{currentTheme}]
              </div>
            </div>

            {/* Output area */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                lineHeight: 1.75,
                cursor: 'text',
              }}
              onClick={() => inputRef.current?.focus()}
            >
              {output.map((line) => (
                <div
                  key={line.id}
                  style={{
                    color: getLineColor(line.type),
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    marginBottom: '0.1rem',
                  }}
                >
                  {line.content}
                </div>
              ))}

              {/* Cursor when booting */}
              {booting && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ color: theme.prompt }}
                >
                  ▮
                </motion.span>
              )}

              <div ref={outputEndRef} />
            </div>

            {/* Input area */}
            {!booting && (
              <div
                style={{
                  borderTop: `1px solid ${theme.border}30`,
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexShrink: 0,
                  background: `${theme.bg}`,
                }}
              >
                <span style={{ color: theme.prompt, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', flexShrink: 0 }}>
                  deep@os ~ $
                </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: theme.prompt,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    caretColor: theme.prompt,
                  }}
                  placeholder="type a command..."
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ color: theme.prompt, fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}
                >
                  ▮
                </motion.span>
              </div>
            )}

            {/* Keyboard shortcuts hint */}
            <div
              style={{
                borderTop: `1px solid ${theme.border}20`,
                padding: '0.35rem 1rem',
                display: 'flex',
                gap: '1.5rem',
                flexShrink: 0,
                background: `${theme.bg}`,
              }}
            >
              {[
                { key: '↑ ↓', desc: 'History' },
                { key: 'Tab', desc: 'Autocomplete' },
                { key: 'Esc', desc: 'Close' },
                { key: 'Ctrl+K', desc: 'Toggle' },
              ].map(({ key, desc }) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <kbd
                    style={{
                      background: `${theme.border}20`,
                      border: `1px solid ${theme.border}30`,
                      borderRadius: '3px',
                      padding: '0.1rem 0.35rem',
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-mono)',
                      color: theme.prompt,
                    }}
                  >
                    {key}
                  </kbd>
                  <span style={{ fontSize: '0.65rem', color: theme.output, opacity: 0.6 }}>{desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

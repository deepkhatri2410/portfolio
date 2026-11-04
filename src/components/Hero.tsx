import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
      }}
    >
      {/* 3D interactive canvas background */}
      <HeroCanvas3D />

      {/* Background orbs */}
      <div className="orb orb-violet" style={{ width: 600, height: 600, top: -200, right: -200, opacity: 0.2 }} />
      <div className="orb orb-cyan"   style={{ width: 400, height: 400, bottom: -100, left: -100, opacity: 0.12 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: 750 }}>
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--cyan)', textTransform: 'uppercase' }}>
              {personalInfo.intro}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Building Ideas Into{' '}
            <span className="gradient-text">Intelligent Experiences.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 560 }}
          >
            {personalInfo.heroSubtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects}>
              Explore My Work
              <ArrowDown size={16} />
            </button>
            <button className="btn btn-secondary" onClick={onOpenTerminal}>
              <Terminal size={16} />
              Launch DEEP.OS
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <Github size={16} /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <Linkedin size={16} /> LinkedIn
            </a>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>📍 Vadodara, India</span>
          </motion.div>

          {/* Terminal hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{ marginTop: '3rem' }}
          >
            <div
              className="terminal-hint"
              onClick={onOpenTerminal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenTerminal()}
              aria-label="Open DEEP.OS terminal"
            >
              <Terminal size={14} style={{ color: 'var(--violet-light)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Curious? Press{' '}
                <kbd className="kbd-hint">Ctrl + K</kbd>{' '}
                to enter <span style={{ color: 'var(--violet-light)', fontWeight: 600 }}>DEEP.OS</span>
              </span>
              <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={20} style={{ color: 'var(--text-muted)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── 3D Canvas background ─── */
function HeroCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    // Particles
    interface Particle { x: number; y: number; z: number; vx: number; vy: number; size: number; hue: number; alpha: number; }
    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0002,
      size: Math.random() * 2 + 0.5,
      hue: Math.random() > 0.5 ? 265 : 190,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    // Geometric rings
    interface Ring { cx: number; cy: number; rx: number; ry: number; rotX: number; rotY: number; rotZ: number; dRotX: number; dRotY: number; dRotZ: number; color: string; }
    const rings: Ring[] = [
      { cx: 0.75, cy: 0.45, rx: 90, ry: 30, rotX: 0, rotY: 0, rotZ: 0, dRotX: 0.003, dRotY: 0.002, dRotZ: 0.001, color: 'rgba(124,58,237,' },
      { cx: 0.82, cy: 0.35, rx: 60, ry: 20, rotX: 0.5, rotY: 0.5, rotZ: 0.2, dRotX: -0.002, dRotY: 0.003, dRotZ: -0.001, color: 'rgba(6,182,212,' },
      { cx: 0.68, cy: 0.6,  rx: 70, ry: 25, rotX: 1.0, rotY: -0.5, rotZ: 0.3, dRotX: 0.001, dRotY: -0.002, dRotZ: 0.002, color: 'rgba(168,85,247,' },
    ];

    const drawEllipse3D = (cx: number, cy: number, rx: number, ry: number, rotX: number, color: string) => {
      const scaleY = Math.abs(Math.cos(rotX));
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, scaleY < 0.1 ? 0.1 : scaleY);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = color + (0.15 + 0.1 * scaleY) + ')';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    };

    // Floating dots forming a node graph
    interface Node { x: number; y: number; vx: number; vy: number; }
    const nodes: Node[] = Array.from({ length: 18 }, () => ({
      x: 0.6 + Math.random() * 0.38,
      y: 0.1 + Math.random() * 0.8,
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0003,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const pxMouse = mx * w;

      // ── Particles ──
      particles.forEach((p) => {
        p.x += p.vx + (mx - 0.5) * 0.0001;
        p.y += p.vy + (my - 0.5) * 0.00008;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
        const perspective = 0.5 + p.z * 0.5;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.size * perspective, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.alpha * perspective})`;
        ctx.fill();
      });

      // ── Node graph (right side only) ──
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0.55 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = (nodes[i].x - nodes[j].x) * w;
          const dy = (nodes[i].y - nodes[j].y) * h;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * w, nodes[i].y * h);
            ctx.lineTo(nodes[j].x * w, nodes[j].y * h);
            ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - d / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(168,85,247,0.5)';
        ctx.fill();
      });

      // ── 3D rings ──
      if (pxMouse > w * 0.3) { // Only when mouse is on the right portion
        rings.forEach((r) => {
          r.rotX += r.dRotX + (my - 0.5) * 0.002;
          r.rotY += r.dRotY + (mx - 0.5) * 0.002;
          r.rotZ += r.dRotZ;
          drawEllipse3D(r.cx * w, r.cy * h, r.rx, r.ry, r.rotX, r.color);
          // inner thinner ring
          drawEllipse3D(r.cx * w, r.cy * h, r.rx * 0.6, r.ry * 0.6, r.rotX + 0.5, r.color);
        });
      } else {
        rings.forEach((r) => {
          r.rotX += r.dRotX;
          r.rotY += r.dRotY;
          r.rotZ += r.dRotZ;
          drawEllipse3D(r.cx * w, r.cy * h, r.rx, r.ry, r.rotX, r.color);
          drawEllipse3D(r.cx * w, r.cy * h, r.rx * 0.6, r.ry * 0.6, r.rotX + 0.5, r.color);
        });
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouse);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
    />
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { use3DTilt } from '../hooks/use3DTilt';
import { projects } from '../data/portfolioData';
import {
  ExternalLink, Github, X, Star, ChevronRight,
  Lightbulb, BookOpen, Zap,
} from 'lucide-react';

const priorityLabel: Record<string, string> = {
  flagship: '★ Flagship Project',
  featured: '⚡ Featured',
  achievement: '📚 Achievement Project',
};
const priorityBadge: Record<string, string> = {
  flagship: 'badge-violet',
  featured: 'badge-cyan',
  achievement: 'badge-blue',
};

export default function Projects() {
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">Projects</div>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            A curated selection of my strongest work — real projects with real code, not mockups or templates.
          </p>
        </motion.div>

        {/* ── Responsive grid – min 260px to fit 320px screens ── */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ marginTop: '2.5rem', textAlign: 'center' }}
        >
          <a
            href="https://github.com/deepkhatri2410"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 560px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

/* ── Individual 3D tilt card ── */
function ProjectCard({
  project, index, inView, onOpen,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
  onOpen: () => void;
}) {
  const { ref, onMouseMove, onMouseLeave } = use3DTilt(10);

  const accentGrad =
    project.color === 'violet'
      ? 'linear-gradient(90deg, var(--violet), var(--violet-light))'
      : project.color === 'cyan'
      ? 'linear-gradient(90deg, var(--cyan), var(--blue))'
      : 'linear-gradient(90deg, var(--blue), var(--cyan))';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: '800px' }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onOpen}
        className="card project-card-3d"
        style={{
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          willChange: 'transform',
          borderColor:
            project.priority === 'flagship'
              ? 'rgba(124,58,237,0.35)'
              : project.priority === 'featured'
              ? 'rgba(6,182,212,0.3)'
              : 'var(--border)',
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentGrad }} />

        {/* Shimmer overlay on hover */}
        <div className="card-shimmer" aria-hidden="true" />

        {/* Priority badge */}
        <div style={{ marginBottom: '1rem', paddingTop: '0.25rem' }}>
          <span className={`badge ${priorityBadge[project.priority]}`}>
            {priorityLabel[project.priority]}
          </span>
        </div>

        {/* Category */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          {project.category}
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
          {project.title}
        </h3>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          {project.subtitle}
        </div>

        {/* Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tech.map((t) => (
            <span key={t} className="badge badge-blue" style={{ fontSize: '0.7rem' }}>{t}</span>
          ))}
        </div>

        {/* Links – stop propagation so clicks don't open the modal */}
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
                <ExternalLink size={13} /> Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
                <Github size={13} /> Code
              </a>
            )}
          </div>
          <button
            className="btn btn-ghost"
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            aria-label={`Open case study for ${project.title}`}
          >
            Case Study <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Modal ── */
function ProjectModal({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem', overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'var(--bg-secondary)', border: '1px solid var(--border-bright)',
          borderRadius: 'var(--radius-xl)', maxWidth: 780, width: '100%',
          maxHeight: '90vh', overflowY: 'auto', padding: '2rem',
          position: 'relative', boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'sticky', top: 0, float: 'right',
            background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)',
            cursor: 'pointer', padding: '0.4rem', zIndex: 10,
          }}
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span className={`badge ${priorityBadge[project.priority]}`} style={{ marginBottom: '0.75rem' }}>
            {priorityLabel[project.priority]}
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '0.4rem' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.subtitle}</p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={14} /> View Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={14} /> Source Code
            </a>
          )}
        </div>

        {/* Content sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <ModalSection icon={<Star size={14} />} title="Overview">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.longDesc}</p>
          </ModalSection>

          <div className="modal-two-col">
            <ModalSection icon={<Lightbulb size={14} />} title="Problem">
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{project.problem}</p>
            </ModalSection>
            <ModalSection icon={<Zap size={14} />} title="Solution">
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{project.solution}</p>
            </ModalSection>
          </div>

          <ModalSection icon={<ChevronRight size={14} />} title="Key Features">
            <div className="features-grid">
              {project.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span>{f.icon}</span>{f.text}
                </div>
              ))}
            </div>
          </ModalSection>

          <ModalSection icon={<span style={{ fontSize: '0.8rem' }}>⚙️</span>} title="Technology Stack">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t) => <span key={t} className="badge badge-violet">{t}</span>)}
            </div>
            {project.note && (
              <div style={{ marginTop: '0.75rem', padding: '0.6rem 0.9rem', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: 'var(--warning)' }}>
                ⚠️ Note: {project.note}
              </div>
            )}
          </ModalSection>

          <div className="modal-two-col">
            <ModalSection icon={<span style={{ fontSize: '0.8rem' }}>🔧</span>} title="Challenges">
              <ul style={{ paddingLeft: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8 }}>
                {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </ModalSection>
            <ModalSection icon={<BookOpen size={14} />} title="Learnings">
              <ul style={{ paddingLeft: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8 }}>
                {project.learnings.map((l, i) => <li key={i}>{l}</li>)}
              </ul>
            </ModalSection>
          </div>

          {project.future.length > 0 && (
            <ModalSection icon={<span style={{ fontSize: '0.8rem' }}>🚀</span>} title="Future Plans">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {project.future.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--violet-light)', flexShrink: 0 }}>›</span>{f}
                  </div>
                ))}
              </div>
            </ModalSection>
          )}
        </div>
      </motion.div>

      <style>{`
        .modal-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 0.6rem; }
        @media (max-width: 520px) {
          .modal-two-col { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
}

function ModalSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--violet-light)', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
        {icon}{title}
      </div>
      {children}
    </div>
  );
}

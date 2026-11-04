import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { journey } from '../data/portfolioData';

const typeColors: Record<string, string> = {
  education: 'var(--violet-light)',
  project: 'var(--cyan)',
  learning: 'var(--success)',
  achievement: 'var(--warning)',
};

const typeBg: Record<string, string> = {
  education: 'rgba(124, 58, 237, 0.12)',
  project: 'rgba(6, 182, 212, 0.1)',
  learning: 'rgba(16, 185, 129, 0.1)',
  achievement: 'rgba(245, 158, 11, 0.1)',
};

export default function Journey() {
  const { ref, inView } = useInView();

  return (
    <section id="journey" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Learning Journey
          </div>
          <h2 className="section-title">From Day One to Now</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A timeline of education, projects, and milestones that shaped who I am as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="journey-timeline" style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          {/* Vertical line */}
          <div
            className="journey-timeline-line"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          {journey.map((item, i) => {
            const isLeft = i % 2 === 0;
            const color = typeColors[item.type] || 'var(--text-muted)';
            const bg = typeBg[item.type] || 'var(--bg-card)';

            return (
              <motion.div
                key={i}
                className="journey-timeline-item"
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  display: 'flex',
                  flexDirection: isLeft ? 'row' : 'row-reverse',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}
              >
                {/* Content card */}
                <div className="journey-timeline-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: isLeft ? 'flex-end' : 'flex-start' }}>
                  <div
                    className="card journey-timeline-card"
                    style={{
                      maxWidth: 280,
                      width: '100%',
                      borderColor: color.replace('var(', '').replace(')', '') + '30',
                      background: bg,
                      textAlign: isLeft ? 'right' : 'left',
                    }}
                  >
                    {item.current && (
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: 'var(--cyan)',
                          marginBottom: '0.3rem',
                          letterSpacing: '0.1em',
                        }}
                      >
                        ● CURRENT
                      </div>
                    )}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {item.period}
                    </div>
                    <h4
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h4>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: color,
                        marginBottom: '0.5rem',
                        fontWeight: 500,
                      }}
                    >
                      {item.org}
                    </div>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="journey-timeline-dot"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '1.25rem',
                    transform: 'translateX(-50%)',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: `2px solid ${color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    zIndex: 2,
                    boxShadow: `0 0 12px ${color}40`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Spacer */}
                <div className="journey-timeline-spacer" style={{ flex: 1 }} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile timeline styles */}
      <style>{`
        @media (max-width: 640px) {
          .journey-timeline { padding-left: 0.25rem; }
          .journey-timeline-line {
            left: 1.15rem !important;
            transform: none !important;
          }
          .journey-timeline-item {
            flex-direction: row !important;
            gap: 0 !important;
            padding-left: 3rem;
          }
          .journey-timeline-content {
            align-items: flex-start !important;
            min-width: 0;
          }
          .journey-timeline-card {
            max-width: none !important;
            text-align: left !important;
          }
          .journey-timeline-dot { left: 1.15rem !important; }
          .journey-timeline-spacer { display: none; }
        }
      `}</style>
    </section>
  );
}

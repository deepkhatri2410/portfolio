import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { achievements } from '../data/portfolioData';

const colorBorderMap: Record<string, string> = {
  violet: 'rgba(124, 58, 237, 0.4)',
  cyan: 'rgba(6, 182, 212, 0.35)',
  blue: 'rgba(59, 130, 246, 0.35)',
};

const colorBadgeMap: Record<string, string> = {
  violet: 'badge-violet',
  cyan: 'badge-cyan',
  blue: 'badge-blue',
};

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">Achievements</div>
          <h2 className="section-title">Challenges Completed</h2>
          <p className="section-subtitle">
            Verified learning milestones, hands-on certifications, and competitive achievements.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                borderLeft: `3px solid ${colorBorderMap[ach.color] || 'var(--border)'}`,
                borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background glow */}
              <div
                style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background:
                    ach.color === 'violet'
                      ? 'rgba(124, 58, 237, 0.08)'
                      : ach.color === 'cyan'
                      ? 'rgba(6, 182, 212, 0.06)'
                      : 'rgba(59, 130, 246, 0.06)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{ach.icon}</span>
                  <div>
                    <h3
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {ach.title}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.15rem',
                      }}
                    >
                      {ach.org}
                    </div>
                  </div>
                </div>
                <span className={`badge ${colorBadgeMap[ach.color]}`} style={{ fontSize: '0.68rem', flexShrink: 0 }}>
                  {ach.type}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                }}
              >
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            { label: 'Challenges Completed', value: '5+', color: 'var(--violet-light)' },
            { label: 'Cloud Labs Completed', value: '10', color: 'var(--cyan)' },
            { label: 'Days Streak (DSA)', value: '30', color: 'var(--success)' },
            { label: 'Learning Platforms', value: '4+', color: 'var(--blue)' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card"
              style={{ textAlign: 'center', padding: '1.25rem' }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: stat.color,
                  fontFamily: 'var(--font-mono)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


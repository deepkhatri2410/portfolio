import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skillGroups } from '../data/portfolioData';

const colorMap: Record<string, string> = {
  violet: 'var(--violet-light)',
  cyan: 'var(--cyan)',
  blue: 'var(--blue)',
};

const levelColors: Record<string, string> = {
  'Building with': 'var(--success)',
  'Hands-on experience': 'var(--cyan)',
  'Currently exploring': 'var(--violet-light)',
  'Learning through projects': 'var(--blue)',
};

export default function Skills() {
  const { ref, inView } = useInView();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <div className="section-label">Tech Superpowers</div>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            Honest descriptions of my technical skills — where I am right now, not where I claim to be.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}
        >
          {Object.entries(levelColors).map(([label, color]) => (
            <div
              key={label}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: color,
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {skillGroups.map((group, groupIdx) => {
            const isActive = activeGroup === group.category;
            const accent = colorMap[group.color] || 'var(--violet-light)';

            return (
              <motion.div
                key={group.category}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * groupIdx }}
                onClick={() => setActiveGroup(isActive ? null : group.category)}
                style={{
                  cursor: 'pointer',
                  borderColor: isActive ? accent.replace('var(', '').replace(')', '') + '40' : 'var(--border)',
                  borderTopColor: isActive ? accent : 'var(--border)',
                  borderTopWidth: isActive ? 2 : 1,
                  userSelect: 'none',
                }}
              >
                {/* Group header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>{group.icon}</span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {group.category}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      transform: isActive ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  >
                    ›
                  </span>
                </div>

                {/* Skills list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {group.skills.map((skill, skillIdx) => {
                    const dotColor = levelColors[skill.level] || 'var(--text-muted)';
                    return (
                      <div key={skillIdx}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '0.2rem',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span
                              style={{
                                width: 7,
                                height: 7,
                                borderRadius: '50%',
                                background: dotColor,
                                display: 'inline-block',
                                flexShrink: 0,
                              }}
                            />
                            <span
                              style={{
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                              }}
                            >
                              {skill.name}
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: '0.7rem',
                              color: dotColor,
                              fontFamily: 'var(--font-mono)',
                              opacity: 0.9,
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{
                              color: 'var(--text-muted)',
                              fontSize: '0.8rem',
                              paddingLeft: '1.2rem',
                              lineHeight: 1.5,
                              paddingTop: '0.2rem',
                            }}
                          >
                            {skill.desc}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!isActive && (
                  <div
                    style={{
                      marginTop: '1rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Click to expand details
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

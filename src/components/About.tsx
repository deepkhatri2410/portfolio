import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personalInfo, education } from '../data/portfolioData';
import { GraduationCap, MapPin, Code2, Zap } from 'lucide-react';
import FloatingGeometry from './FloatingGeometry';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">The Person Behind the Code</h2>
          <p className="section-subtitle">
            Engineering student, curious builder, and lifelong learner on a mission to create technology that matters.
          </p>
        </motion.div>

        {/* 3D visual accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}
        >
          <div style={{
            position: 'relative',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
            border: '1px solid rgba(124,58,237,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 60px rgba(124,58,237,0.12)',
          }}>
            <FloatingGeometry size={180} />
          </div>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Avatar card */}
            <div
              className="card"
              style={{
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(6, 182, 212, 0.05))',
                borderColor: 'rgba(124, 58, 237, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                {/* Avatar */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'white',
                    fontFamily: 'var(--font-mono)',
                    flexShrink: 0,
                    boxShadow: 'var(--glow-violet)',
                  }}
                >
                  DK
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                    Deep Khatri
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    Computer Engineering Student
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.8rem',
                      marginTop: '0.2rem',
                    }}
                  >
                    <MapPin size={11} />
                    Vadodara, Gujarat, India
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontSize: '0.95rem',
                }}
              >
                {personalInfo.about}
              </p>
            </div>

            {/* Philosophy */}
            <div className="card" style={{ borderColor: 'rgba(6, 182, 212, 0.15)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--cyan)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                &gt; builder.philosophy
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', fontStyle: 'italic' }}>
                "{personalInfo.philosophy}"
              </p>
            </div>
          </motion.div>

          {/* Right: Education + Quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Education */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <GraduationCap size={15} />
                EDUCATION
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      borderLeft: `3px solid ${edu.status === 'current' ? 'var(--cyan)' : 'var(--violet)'}`,
                      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                          {edu.degree}
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                          {edu.institution}
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginTop: '0.3rem' }}>
                          {edu.period}
                        </div>
                        {edu.score && (
                          <div style={{ color: 'var(--success)', fontSize: '0.8rem', marginTop: '0.3rem', fontWeight: 500 }}>
                            Academic Score: {edu.score}
                          </div>
                        )}
                      </div>
                      <span
                        className={`badge ${edu.status === 'current' ? 'badge-cyan' : 'badge-violet'}`}
                      >
                        {edu.status === 'current' ? '● Current' : '✓ Completed'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Currently */}
            <div className="card" style={{ background: 'rgba(124, 58, 237, 0.06)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--violet-light)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                &gt; currently
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {[
                  { icon: <Code2 size={14} />, text: 'Building full-stack web apps' },
                  { icon: <Zap size={14} />, text: 'Exploring Generative AI applications' },
                  { icon: <span style={{ fontSize: '0.8rem' }}>☁️</span>, text: 'Learning AWS cloud deployment' },
                  { icon: <span style={{ fontSize: '0.8rem' }}>📖</span>, text: 'B.Tech CE at CHARUSAT' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                    }}
                  >
                    <span style={{ color: 'var(--violet-light)' }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


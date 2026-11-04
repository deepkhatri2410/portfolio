import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { awsArchitecture } from '../data/portfolioData';
import { Cloud, GitBranch, Globe, Shield, Zap } from 'lucide-react';

export default function AWS() {
  const { ref, inView } = useInView();

  return (
    <section id="aws" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">Cloud Architecture</div>
          <h2 className="section-title">AWS Implementation</h2>
          <p className="section-subtitle">
            How this portfolio is built and hosted on Amazon Web Services. Documented honestly — what's actually deployed.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem',
          }}
        >
          {/* Left: Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {/* Architecture diagram */}
            <div
              className="card"
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(8, 13, 26, 0.9))',
                borderColor: 'rgba(245, 158, 11, 0.2)',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--warning)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Cloud size={13} />
                AWS Architecture Diagram
              </div>

              {/* Visual flow */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                }}
              >
                {[
                  { icon: '💻', label: 'Developer', sub: 'Local machine', color: 'var(--text-secondary)' },
                  { arrow: '⬇ git push', color: 'var(--text-muted)' },
                  { icon: '🐙', label: 'GitHub Repository', sub: 'Source code version control', color: 'var(--cyan)' },
                  { arrow: '⬇ webhook trigger', color: 'var(--text-muted)' },
                  { icon: '🔨', label: 'AWS Amplify Build', sub: 'npm ci → npm run build', color: 'var(--warning)' },
                  { arrow: '⬇ artifacts', color: 'var(--text-muted)' },
                  { icon: '🗃️', label: 'Amazon S3', sub: 'Static asset storage', color: 'var(--blue)' },
                  { arrow: '⬇ distribute', color: 'var(--text-muted)' },
                  { icon: '🌍', label: 'Amazon CloudFront', sub: 'Global CDN, HTTPS, caching', color: 'var(--success)' },
                  { arrow: '⬇ serve', color: 'var(--text-muted)' },
                  { icon: '👤', label: 'Visitor', sub: 'Portfolio experience delivered', color: 'var(--text-secondary)' },
                ].map((item, i) => {
                  if ('arrow' in item) {
                    return (
                      <div key={i} style={{ color: item.color, paddingLeft: '1rem', fontSize: '0.75rem' }}>
                        {item.arrow}
                      </div>
                    );
                  }
                  return (
                    <div
                      key={i}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.6rem 0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                      }}
                    >
                      <span>{item.icon}</span>
                      <div>
                        <div style={{ color: item.color, fontWeight: 600 }}>{item.label}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>{item.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AWS Services used */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {awsArchitecture.services.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  className="card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ padding: '1rem 1.25rem' }}
                >
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{svc.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        {svc.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--warning)', marginBottom: '0.4rem' }}>
                        {svc.role}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Build config + deployment flow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Build config */}
            <div
              className="card"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'rgba(6, 182, 212, 0.2)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--cyan)',
                  letterSpacing: '0.12em',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <GitBranch size={12} />
                amplify.yml — Build Configuration
              </div>
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  overflowX: 'auto',
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {awsArchitecture.buildConfig}
              </pre>
            </div>

            {/* Deployment flow */}
            <div className="card">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--violet-light)',
                  letterSpacing: '0.12em',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Zap size={12} />
                Deployment Pipeline
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {awsArchitecture.deploymentFlow.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        background: 'rgba(124, 58, 237, 0.15)',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--violet-light)',
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Key details */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
              }}
            >
              {[
                { icon: <Shield size={14} />, label: 'HTTPS / TLS', value: 'Auto-managed by Amplify' },
                { icon: <Globe size={14} />, label: 'CDN', value: 'CloudFront edge locations' },
                { icon: <Zap size={14} />, label: 'Build time', value: '~60–90 seconds' },
                { icon: <GitBranch size={14} />, label: 'Deploy trigger', value: 'Git push to main' },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="card"
                  style={{ padding: '0.875rem' }}
                >
                  <div
                    style={{
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.75rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {detail.icon}
                    {detail.label}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Honest note */}
            <div
              style={{
                padding: '1rem',
                background: 'rgba(16, 185, 129, 0.06)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: 'var(--success)', fontWeight: 600 }}>✓ Honest disclosure: </span>
              This portfolio is a static React SPA hosted exclusively on AWS Amplify. Amplify provisions 
              CloudFront and S3 automatically. No Lambda, API Gateway, or DynamoDB services are configured 
              for this project — the simplicity is intentional and appropriate for a static portfolio.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { BookOpen, Target, Lightbulb, Code2, Cloud, Zap, Github } from 'lucide-react';

const docSections = [
  {
    icon: <Target size={16} />,
    title: 'Project Overview',
    content: `This portfolio was built for the AWS Student Builder Challenge 2026 — designed to showcase Deep Khatri's engineering journey, real-world projects, and passion for building with modern technologies including AWS cloud services.

The portfolio is a React/TypeScript SPA hosted on AWS Amplify, featuring DEEP.OS (an interactive terminal experience), detailed project case studies, and honest documentation of the cloud architecture used.`,
  },
  {
    icon: <Lightbulb size={16} />,
    title: 'Problem Statement',
    content: `How can a developer portfolio communicate more than just a list of projects? How can it show the person behind the code — their thinking process, growth journey, technical values, and genuine enthusiasm for building?

Most portfolios are static showcases. This one aims to be an interactive developer experience that reflects how Deep Khatri actually thinks and works.`,
  },
  {
    icon: <Code2 size={16} />,
    title: 'Creative Concept: DEEP.OS',
    content: `DEEP.OS is the signature interactive feature — a fully functional developer terminal embedded within the portfolio.

Visitors can explore Deep's skills, projects, achievements, and journey through terminal commands. It supports command history (arrow keys), tab autocomplete, multiple themes, and an Easter egg surprise. It's discoverable via a visible hint in the hero section and openable with Ctrl+K.`,
  },
  {
    icon: <Zap size={16} />,
    title: 'Technology Stack',
    content: `Frontend: React 18, TypeScript, Vite, Framer Motion, Lucide React
Styling: Pure CSS3 with a custom design system (no Tailwind or CSS frameworks)
Fonts: Space Grotesk (headings) + Inter (body) + JetBrains Mono (code)
Deployment: AWS Amplify Hosting
Build: Vite with code splitting and chunk optimization`,
  },
  {
    icon: <Cloud size={16} />,
    title: 'AWS Services Used',
    content: `AWS Amplify Hosting: Primary hosting and CI/CD pipeline. Automated builds on git push. Managed HTTPS/TLS certificates.

Amazon CloudFront (via Amplify): Global CDN distribution ensuring fast load times worldwide.

Amazon S3 (via Amplify): Static asset storage backing the CDN.

No additional AWS services (Lambda, DynamoDB, API Gateway) are configured — the portfolio is intentionally a clean, fast static application. This is documented honestly rather than fabricated.`,
  },
  {
    icon: <BookOpen size={16} />,
    title: 'Challenges & Solutions',
    content: `Challenge: Building a production-quality portfolio from scratch without using CSS frameworks.
Solution: Created a complete custom design system with consistent tokens, components, and responsive utilities.

Challenge: Making the terminal (DEEP.OS) feel authentic while working on mobile.
Solution: Responsive terminal layout with touch-friendly controls and a visible launch button.

Challenge: Keeping project descriptions honest without over-claiming capabilities.
Solution: Every project includes explicit status (prototype, live, completed) and honest tech notes.`,
  },
  {
    icon: <Lightbulb size={16} />,
    title: 'Learning Outcomes',
    content: `• Practical experience with AWS Amplify Hosting and deployment pipelines
• Building a full design system from scratch in CSS custom properties
• React performance optimization with code splitting and lazy loading
• Framer Motion animation integration without sacrificing accessibility
• Writing accurate, compelling technical case studies without fabrication`,
  },
];

export default function ChallengeDoc() {
  const { ref, inView } = useInView();

  return (
    <section id="challenge" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">AWS Student Builder Challenge 2026</div>
          <h2 className="section-title">Challenge Documentation</h2>
          <p className="section-subtitle">
            A complete engineering case study of this portfolio — built as a genuine AWS Student Builder Challenge submission.
          </p>
        </motion.div>

        {/* Challenge header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="card"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.07), rgba(8, 13, 26, 0.95))',
            borderColor: 'rgba(245, 158, 11, 0.25)',
            marginBottom: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: 1, minWidth: 250 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--warning)', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>
              SUBMISSION
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Deep Khatri — Developer Portfolio
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              AWS Student Builder Challenge 2026
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Category', value: 'Portfolio' },
              { label: 'Framework', value: 'React + TS' },
              { label: 'Hosting', value: 'AWS Amplify' },
              { label: 'Feature', value: 'DEEP.OS' },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--warning)' }}>
                  {value}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Doc sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {docSections.map((section, i) => (
            <motion.details
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="card"
              style={{ padding: 0, cursor: 'pointer' }}
            >
              <summary
                style={{
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  listStyle: 'none',
                  userSelect: 'none',
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: 'var(--violet-light)' }}>{section.icon}</span>
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {section.title}
                </span>
                <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.8rem' }}>▸</span>
              </summary>
              <div
                style={{
                  padding: '0 1.5rem 1.25rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1rem',
                  whiteSpace: 'pre-line',
                }}
              >
                {section.content}
              </div>
            </motion.details>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ marginTop: '2rem', textAlign: 'center' }}
        >
          <div
            className="card"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.5rem',
              borderColor: 'rgba(124, 58, 237, 0.3)',
            }}
          >
            <Github size={18} style={{ color: 'var(--violet-light)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GitHub Repository</div>
              <a
                href="https://github.com/deepkhatri2410"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--violet-light)', fontSize: '0.9rem', fontWeight: 500 }}
              >
                github.com/deepkhatri2410
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


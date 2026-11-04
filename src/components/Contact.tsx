import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { use3DTilt } from '../hooks/use3DTilt';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, MapPin, MessageSquare, Mail } from 'lucide-react';

type ContactItem = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
  color: string;
  external: boolean;
};

const contactItems: ContactItem[] = [
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/deep-khatri-964306417',
    href: personalInfo.linkedin,
    color: 'var(--blue)',
    external: true,
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub (Primary)',
    value: 'github.com/deepkhatri2410',
    href: personalInfo.github,
    color: 'var(--violet-light)',
    external: true,
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub (Secondary)',
    value: 'github.com/khatrideep133-ops',
    href: personalInfo.githubAlt,
    color: 'var(--cyan)',
    external: true,
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Vadodara, Gujarat, India',
    href: null,
    color: 'var(--success)',
    external: false,
  },
];

function ContactCard({ item, delay }: { item: ContactItem; delay: number }) {
  const { ref, onMouseMove, onMouseLeave } = use3DTilt(6);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{ perspective: '600px' }}
    >
      {item.href ? (
        <a
          ref={ref}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className="card contact-link-card"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left', textDecoration: 'none' }}
        >
          <ContactCardInner item={item} />
        </a>
      ) : (
        <div
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="card"
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}
        >
          <ContactCardInner item={item} />
        </div>
      )}
    </motion.div>
  );
}

function ContactCardInner({ item }: { item: ContactItem }) {
  return (
    <>
      <div
        style={{
          width: 40, height: 40, borderRadius: 'var(--radius-md)',
          background: `color-mix(in srgb, ${item.color} 12%, transparent)`,
          border: `1px solid color-mix(in srgb, ${item.color} 30%, transparent)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: item.color, flexShrink: 0,
        }}
      >
        {item.icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
          {item.label}
        </div>
        <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem', wordBreak: 'break-all' }}>
          {item.value}
        </div>
      </div>
      {item.href && (
        <div style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.8rem', flexShrink: 0 }}>↗</div>
      )}
    </>
  );
}

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="section" ref={ref}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Orb */}
        <div className="orb orb-violet" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.12 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}
          >
            <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Have an idea{' '}<span className="gradient-text">worth building?</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              I'm always interested in learning, collaborating, and building meaningful technology.
              Let's connect and see what we can create together.
            </p>

            {/* Contact cards – proper <a> links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {contactItems.map((item, i) => (
                <ContactCard key={item.label} item={item} delay={0.15 + i * 0.08} />
              ))}
            </div>

            {/* Note about email */}
            <div style={{ marginBottom: '2rem', padding: '0.75rem 1rem', background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.15)', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <Mail size={14} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
              <span>Prefer email? Reach out via LinkedIn for my contact address.</span>
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageSquare size={16} /> Connect on LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github size={16} /> View GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-link-card:hover { color: inherit; }
      `}</style>
    </section>
  );
}

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { specialties, capabilities, visionPoints, missionPoints } from '../data/content'

function RevealBlock({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <RevealBlock>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">
              Your strategic
              <br />technology partner
            </h2>
            <p className="section-desc">
              In today's cloud-first and security-driven digital world, organizations require
              more than traditional IT support. They need a strategic technology partner that
              can take complete ownership of their technology ecosystem.
            </p>
            <p className="about-extra">
              With over <strong>20 years of experience</strong>, VICLOPS specializes in taking
              complete ownership of clients' digital infrastructure — not just providing support.
            </p>
          </RevealBlock>

          <RevealBlock delay={0.15}>
            <div className="specialty-list">
              {specialties.map((item, i) => (
                <motion.div
                  key={item}
                  className="specialty-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <span className="specialty-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </RevealBlock>
        </div>

        <RevealBlock delay={0.1}>
          <div className="capabilities-block">
            <h3>What We Do</h3>
            <div className="capabilities-grid">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  className="cap-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="cap-icon">→</div>
                  <p>{cap}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealBlock>

        <div className="vision-mission-grid">
          <RevealBlock>
            <div className="vm-card">
              <span className="vm-tag">Vision</span>
              <h3>Empowering confident growth</h3>
              <ul>
                {visionPoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <div className="vm-card vm-mission">
              <span className="vm-tag">Mission</span>
              <h3>Complete IT ecosystem ownership</h3>
              <ul>
                {missionPoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </RevealBlock>
        </div>
      </div>

      <style>{`
        .about-section { background: var(--bg-elevated); }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .about-extra {
          margin-top: 20px;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
        }
        .about-extra strong { color: var(--accent); }
        .specialty-list { display: flex; flex-direction: column; gap: 12px; }
        .specialty-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-weight: 500;
          transition: border-color 0.3s;
        }
        .specialty-item:hover { border-color: rgba(0, 212, 255, 0.3); }
        .specialty-num {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent);
          opacity: 0.7;
        }
        .capabilities-block { margin-top: 80px; }
        .capabilities-block h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin-bottom: 32px;
        }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .cap-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 24px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 12px;
        }
        .cap-icon {
          color: var(--accent);
          font-weight: 700;
          flex-shrink: 0;
        }
        .cap-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 64px;
        }
        @media (max-width: 768px) {
          .vision-mission-grid { grid-template-columns: 1fr; }
        }
        .vm-card {
          padding: 40px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 20px;
        }
        .vm-mission {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(123, 97, 255, 0.08));
          border-color: rgba(0, 212, 255, 0.2);
        }
        .vm-tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .vm-card h3 {
          font-family: var(--font-display);
          font-size: 1.35rem;
          margin: 12px 0 20px;
        }
        .vm-card ul { display: flex; flex-direction: column; gap: 10px; }
        .vm-card li {
          font-size: 0.95rem;
          color: var(--text-muted);
          padding-left: 20px;
          position: relative;
        }
        .vm-card li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
        }
      `}</style>
    </section>
  )
}

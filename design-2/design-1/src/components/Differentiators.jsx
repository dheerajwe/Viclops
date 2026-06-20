import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { differentiators, goals } from '../data/content'

export default function Differentiators() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section diff-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Key Differentiators</p>
          <h2 className="section-title">Why partner with VICLOPS?</h2>
        </motion.div>

        <div className="diff-grid">
          <motion.div
            className="diff-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Technology Expertise</h3>
            <ul>
              {differentiators.technology.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="diff-card diff-card-accent"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Business Value</h3>
            <ul>
              {differentiators.business.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="goals-marquee"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="marquee-track">
            {[...goals, ...goals].map((goal, i) => (
              <span key={i} className="marquee-item">{goal}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .diff-section {
          background: var(--bg-elevated);
          overflow: hidden;
        }
        .diff-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 56px;
        }
        @media (max-width: 768px) {
          .diff-grid { grid-template-columns: 1fr; }
        }
        .diff-card {
          padding: 40px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 20px;
        }
        .diff-card-accent {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.06), rgba(123, 97, 255, 0.06));
        }
        .diff-card h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          margin-bottom: 24px;
          color: var(--accent);
        }
        .diff-card ul { display: flex; flex-direction: column; gap: 12px; }
        .diff-card li {
          font-size: 0.95rem;
          color: var(--text-muted);
          padding: 12px 16px;
          background: var(--bg-card);
          border-radius: 8px;
          border: 1px solid var(--border);
        }
        .goals-marquee {
          margin-top: 64px;
          padding: 24px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .marquee-track {
          display: flex;
          gap: 32px;
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .marquee-item {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          white-space: nowrap;
          padding: 8px 20px;
          border: 1px solid var(--border);
          border-radius: 100px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

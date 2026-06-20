import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { framework } from '../data/content'

function FrameworkCard({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="framework-card"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="framework-letter">{item.letter}</span>
      <span className="framework-label">{item.label}</span>
      <p>{item.desc}</p>
    </motion.div>
  )
}

export default function Framework() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="framework" className="section framework-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">VICLOPS Framework</p>
          <h2 className="section-title">
            Five pillars of
            <br />
            <span className="gradient-text">complete IT ownership</span>
          </h2>
          <p className="section-desc">
            Our framework defines how we design, deploy, manage, operate, and secure
            your entire technology ecosystem — from physical infrastructure to cloud-native code.
          </p>
        </motion.div>

        <div className="framework-grid">
          {framework.map((item, i) => (
            <FrameworkCard key={item.letter} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .framework-section {
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg-elevated) 50%, var(--bg) 100%);
        }
        .framework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 64px;
        }
        .framework-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px 24px;
          transition: all 0.4s ease;
        }
        .framework-card:hover {
          border-color: rgba(0, 212, 255, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .framework-letter {
          display: block;
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .framework-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-top: 12px;
        }
        .framework-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 12px;
          line-height: 1.5;
        }
      `}</style>
    </section>
  )
}

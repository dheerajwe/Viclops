import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="hero">
      <div className="hero-bg">
        <motion.div className="orb orb-1" style={{ y }} />
        <motion.div className="orb orb-2" style={{ y: useTransform(scrollY, [0, 500], [0, 80]) }} />
        <div className="grid-overlay" />
      </div>

      <motion.div className="container hero-content" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-badge">Technology & IT Consulting Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Digital Transformation
          <br />
          <span className="gradient-text">from Cable to Code</span>
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          VICLOPS provides advanced, tailor-made solutions in Cloud, IT Infrastructure,
          Operations, and Security — helping businesses unlock growth through secure,
          scalable, and reliable technology.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
          <a href="#services" className="btn btn-ghost">Explore Services</a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="stat">
            <strong>20+</strong>
            <span>Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>4</strong>
            <span>Core Service Pillars</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>100%</strong>
            <span>End-to-End Ownership</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll to explore
        </motion.div>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }
        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--orb-1-color), transparent 70%);
          top: -200px;
          right: -100px;
        }
        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--orb-2-color), transparent 70%);
          bottom: -150px;
          left: -100px;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: var(--accent-glow);
          border: 1px solid var(--hero-badge-border);
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.05em;
          margin-bottom: 24px;
        }
        .hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2.75rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.03em;
          max-width: 800px;
        }
        .hero-desc {
          font-size: 1.125rem;
          color: var(--text-muted);
          max-width: 580px;
          margin-top: 28px;
          line-height: 1.75;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-top: 64px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
        }
        .stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--accent);
        }
        .stat span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border);
        }
        .scroll-hint {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}

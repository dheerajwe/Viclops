import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { process } from '../data/content'

export default function Process() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="process" className="section process-section" ref={containerRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Our Working Process</p>
          <h2 className="section-title">
            How we help you
            <br />
            <span className="gradient-text">grow your business</span>
          </h2>
        </motion.div>

        <div className="process-timeline">
          <div className="timeline-line">
            <motion.div className="timeline-progress" style={{ height: lineHeight }} />
          </div>

          {process.map((step, i) => (
            <motion.div
              key={step.step}
              className="process-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="step-marker">
                <span>{step.step}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-section { background: var(--bg); }
        .process-timeline {
          position: relative;
          margin-top: 64px;
          padding-left: 48px;
        }
        .timeline-line {
          position: absolute;
          left: 19px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }
        .timeline-progress {
          width: 100%;
          background: linear-gradient(180deg, var(--accent), var(--purple));
          border-radius: 2px;
        }
        .process-step {
          display: flex;
          gap: 32px;
          margin-bottom: 48px;
          position: relative;
        }
        .process-step:last-child { margin-bottom: 0; }
        .step-marker {
          position: absolute;
          left: -48px;
          width: 40px;
          height: 40px;
          background: var(--bg-card);
          border: 2px solid var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .step-marker span {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent);
        }
        .step-content {
          padding: 32px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          flex: 1;
          transition: border-color 0.3s;
        }
        .step-content:hover { border-color: rgba(0, 212, 255, 0.3); }
        .step-content h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          margin-bottom: 12px;
        }
        .step-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }
      `}</style>
    </section>
  )
}

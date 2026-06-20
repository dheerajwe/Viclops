import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { services } from '../data/content'

export default function Services() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const current = services[active]

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Service Portfolio</p>
          <h2 className="section-title">
            Four pillars of
            <br />
            <span className="gradient-text">managed excellence</span>
          </h2>
        </motion.div>

        <div className="services-layout">
          <div className="service-tabs">
            {services.map((svc, i) => (
              <motion.button
                key={svc.id}
                className={`service-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                style={{ '--tab-color': svc.color }}
              >
                <span className="tab-name">{svc.name}</span>
                <span className="tab-title">{svc.title}</span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="service-detail"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              style={{ '--svc-color': current.color }}
            >
              <div className="service-header">
                <h3>{current.name}</h3>
                <p className="service-subtitle">{current.title}</p>
              </div>
              <p className="service-purpose">{current.purpose}</p>

              <div className="service-columns">
                <div>
                  <h4>Services Offered</h4>
                  <ul>
                    {current.offerings.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Benefits</h4>
                  <ul className="benefits-list">
                    {current.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="services-cards-mobile">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              className="svc-mini-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ '--svc-color': svc.color }}
            >
              <h4>{svc.name}</h4>
              <p>{svc.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section { position: relative; }
        .services-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 48px;
          margin-top: 56px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .services-layout { grid-template-columns: 1fr; }
          .service-tabs { display: none; }
        }
        @media (min-width: 901px) {
          .services-cards-mobile { display: none; }
        }
        .service-tabs {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .service-tab {
          text-align: left;
          padding: 20px 24px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          transition: all 0.3s;
        }
        .service-tab.active {
          border-color: var(--tab-color);
          background: color-mix(in srgb, var(--tab-color) 10%, transparent);
        }
        .tab-name {
          display: block;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--tab-color);
        }
        .tab-title {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
        .service-detail {
          padding: 40px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          border-top: 3px solid var(--svc-color);
        }
        .service-header h3 {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--svc-color);
        }
        .service-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
        .service-purpose {
          margin-top: 24px;
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1rem;
        }
        .service-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 36px;
        }
        @media (max-width: 600px) {
          .service-columns { grid-template-columns: 1fr; }
        }
        .service-columns h4 {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--svc-color);
          margin-bottom: 16px;
        }
        .service-columns ul { display: flex; flex-direction: column; gap: 10px; }
        .service-columns li {
          font-size: 0.9rem;
          color: var(--text-muted);
          padding-left: 16px;
          position: relative;
        }
        .service-columns li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--svc-color);
          opacity: 0.5;
        }
        .benefits-list li::before { content: '✓'; opacity: 1; }
        .services-cards-mobile {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 32px;
        }
        @media (max-width: 500px) {
          .services-cards-mobile { grid-template-columns: 1fr; }
        }
        .svc-mini-card {
          padding: 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          border-left: 3px solid var(--svc-color);
        }
        .svc-mini-card h4 {
          font-family: var(--font-display);
          color: var(--svc-color);
          font-size: 1.1rem;
        }
        .svc-mini-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
      `}</style>
    </section>
  )
}

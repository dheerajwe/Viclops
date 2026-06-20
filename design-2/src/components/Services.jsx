import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { services } from '../data/content'
import SectionHeader from './ui/SectionHeader'

const tabAccents = {
  manage: { color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.35)' },
  protect: { color: '#6366f1', glow: 'rgba(99, 102, 241, 0.35)' },
  secure: { color: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.35)' },
  transform: { color: '#10b981', glow: 'rgba(16, 185, 129, 0.35)' },
}

const tabIcons = {
  manage: 'M',
  protect: 'P',
  secure: 'S',
  transform: 'T',
}

function ServiceParagraph({ parts }) {
  return (
    <p>
      {parts.map((part, i) =>
        part.bold ? (
          <strong key={i}>{part.text}</strong>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </p>
  )
}

function ServicePyramid({ variant, offerings }) {
  const count = offerings.length
  const center = (count - 1) / 2

  return (
    <div className={`svc-pyramid svc-pyramid--${variant}`}>
      {variant === 'triangle' && <div className="svc-pyramid-triangle" aria-hidden="true" />}

      <ul className="svc-pyramid-list">
        {offerings.map((item, i) => {
          let style = {}
          if (variant === 'triangle') {
            style = { '--tier-width': `${52 + i * 8}%` }
          } else if (variant === 'curve') {
            const offset = Math.round((center - Math.abs(i - center)) * 14)
            style = { transform: `translateX(${offset}px)` }
          } else if (variant === 'staircase') {
            style = { '--bar-width': `${48 + i * 7}%` }
          }

          return (
            <motion.li
              key={item}
              style={style}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {variant === 'curve' && <span className="svc-pyramid-dot" aria-hidden="true" />}
              {variant === 'staircase' && <span className="svc-pyramid-bar" aria-hidden="true" />}
              <span className="svc-pyramid-label">{item}</span>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionHeader
          number="04"
          label="Our Services"
          title="Four pillars of managed excellence"
          desc="V Manage, V Protect, V Secure, and V Transform — comprehensive IT ownership for modern enterprises."
          align="center"
        />

        <div className="services-tabs-wrap">
          <div className="services-tabs">
            {services.map((svc, i) => {
              const accent = tabAccents[svc.id]
              const isActive = active === i
              return (
                <button
                  key={svc.id}
                  type="button"
                  className={`services-tab ${isActive ? 'active' : ''}`}
                  style={{
                    '--tab-color': accent.color,
                    '--tab-glow': accent.glow,
                  }}
                  onClick={() => setActive(i)}
                >
                  {isActive && (
                    <motion.span
                      className="services-tab-bg"
                      layoutId="services-tab-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="services-tab-icon">{tabIcons[svc.id]}</span>
                  <span className="services-tab-text">
                    <strong>{svc.name}</strong>
                    <small>{svc.title}</small>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={current.id}
            className="service-slide"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="service-slide-bg" aria-hidden="true">
              <div className="service-slide-network" />
            </div>

            <h2 className="service-slide-title">
              {current.name}: {current.title}
            </h2>

            <div className="service-slide-grid">
              <div className="service-slide-copy">
                {current.paragraphs.map((para, i) => (
                  <ServiceParagraph key={i} parts={para.parts} />
                ))}
              </div>

              <ServicePyramid variant={current.pyramid} offerings={current.offerings} />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <style>{`
        .services-section {
          padding-top: clamp(80px, 10vw, 100px);
          padding-bottom: clamp(80px, 10vw, 100px);
          background: var(--off-white);
        }
        .services-section .section-header {
          margin-bottom: 40px;
        }
        .services-tabs-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
        }
        .services-tabs {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          padding: 8px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          border-radius: 100px;
          box-shadow:
            0 8px 32px rgba(7, 21, 40, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        .services-tab {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px 10px 12px;
          border-radius: 100px;
          border: 1px solid transparent;
          background: transparent;
          font-family: var(--font-display);
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.3s var(--ease-out), box-shadow 0.3s;
        }
        .services-tab:hover:not(.active) {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.7);
          border-color: rgba(59, 130, 246, 0.12);
          box-shadow: 0 6px 20px rgba(7, 21, 40, 0.06);
        }
        .services-tab-bg {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, var(--tab-color), color-mix(in srgb, var(--tab-color) 75%, #071528));
          box-shadow:
            0 8px 28px var(--tab-glow),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          z-index: 0;
        }
        .services-tab-icon {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border-radius: 50%;
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--tab-color);
          background: rgba(255, 255, 255, 0.95);
          border: 1.5px solid rgba(59, 130, 246, 0.1);
          box-shadow: 0 2px 8px rgba(7, 21, 40, 0.08);
          transition: all 0.3s var(--ease-out);
        }
        .services-tab.active .services-tab-icon {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: none;
        }
        .services-tab-text {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          min-width: 0;
        }
        .services-tab-text strong {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          white-space: nowrap;
        }
        .services-tab.active .services-tab-text strong {
          color: white;
        }
        .services-tab-text small {
          font-size: 0.62rem;
          font-weight: 500;
          color: var(--text-muted);
          line-height: 1.3;
          margin-top: 2px;
          max-width: 140px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .services-tab.active .services-tab-text small {
          color: rgba(255, 255, 255, 0.78);
        }
        @media (max-width: 768px) {
          .services-tabs {
            border-radius: var(--radius-lg);
            padding: 10px;
            width: 100%;
            max-width: 520px;
          }
          .services-tab {
            flex: 1 1 calc(50% - 8px);
            justify-content: center;
            padding: 12px 14px;
          }
          .services-tab-text small {
            display: none;
          }
        }
        @media (max-width: 420px) {
          .services-tab {
            flex: 1 1 100%;
          }
        }
        .service-slide {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
          padding: clamp(36px, 5vw, 52px) clamp(28px, 4vw, 48px);
          color: white;
          box-shadow: var(--shadow-lg);
        }
        .service-slide-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, #0a1f3d 0%, #071528 45%, #0c2748 100%);
          z-index: 0;
        }
        .service-slide-network {
          position: absolute;
          inset: 0;
          opacity: 0.35;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(94, 180, 232, 0.25) 0, transparent 45%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.2) 0, transparent 40%),
            radial-gradient(circle, rgba(125, 211, 252, 0.9) 1px, transparent 1px);
          background-size: auto, auto, 48px 48px;
        }
        .service-slide-title {
          position: relative;
          z-index: 1;
          font-family: var(--font-display);
          font-size: clamp(1.35rem, 2.8vw, 1.85rem);
          font-weight: 700;
          text-align: center;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: clamp(28px, 4vw, 40px);
        }
        .service-slide-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(28px, 5vw, 56px);
          align-items: center;
        }
        @media (max-width: 900px) {
          .service-slide-grid {
            grid-template-columns: 1fr;
          }
        }
        .service-slide-copy {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .service-slide-copy p {
          font-size: clamp(0.92rem, 1.4vw, 1.02rem);
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.92);
        }
        .service-slide-copy strong {
          font-weight: 700;
          color: white;
        }

        /* Pyramid base */
        .svc-pyramid {
          position: relative;
          min-height: 280px;
        }
        .svc-pyramid-list {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
        }
        .svc-pyramid-label {
          display: block;
          padding: 11px 16px;
          background: white;
          color: var(--navy);
          font-family: var(--font-display);
          font-size: clamp(0.78rem, 1.2vw, 0.88rem);
          font-weight: 700;
          line-height: 1.35;
          border-radius: 4px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        /* Triangle — V Manage */
        .svc-pyramid--triangle {
          padding-right: 8%;
        }
        .svc-pyramid-triangle {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 55%;
          height: 92%;
          background: linear-gradient(135deg, rgba(176, 190, 197, 0.55), rgba(144, 164, 174, 0.45));
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          z-index: 0;
        }
        .svc-pyramid--triangle .svc-pyramid-list {
          align-items: flex-end;
        }
        .svc-pyramid--triangle li {
          width: var(--tier-width);
          max-width: 100%;
        }

        /* Curve — V Protect */
        .svc-pyramid--curve .svc-pyramid-list {
          align-items: flex-start;
          padding-left: 8%;
        }
        .svc-pyramid--curve li {
          display: flex;
          align-items: center;
          gap: 0;
          width: 88%;
          transition: transform 0.4s var(--ease-out);
        }
        .svc-pyramid-dot {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          margin-right: -11px;
          border-radius: 50%;
          background: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }
        .svc-pyramid--curve .svc-pyramid-label {
          flex: 1;
          border-radius: 6px;
        }

        /* Staircase — V Secure */
        .svc-pyramid--staircase .svc-pyramid-list {
          gap: 8px;
        }
        .svc-pyramid--staircase li {
          position: relative;
          display: flex;
          align-items: center;
        }
        .svc-pyramid-bar {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 36px;
          width: var(--bar-width);
          background: rgba(176, 190, 197, 0.45);
          border-radius: 2px;
          z-index: 0;
        }
        .svc-pyramid--staircase .svc-pyramid-label {
          position: relative;
          z-index: 1;
          max-width: 92%;
          border-radius: 6px;
        }

        /* Stack — V Transform */
        .svc-pyramid--stack .svc-pyramid-list {
          gap: 12px;
        }
        .svc-pyramid--stack li {
          position: relative;
        }
        .svc-pyramid--stack li::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 4px;
          bottom: 4px;
          width: 4px;
          background: linear-gradient(180deg, #38bdf8, #3b82f6);
          border-radius: 2px;
        }
        .svc-pyramid--stack .svc-pyramid-label {
          border-radius: 2px;
          border-left: 3px solid #3b82f6;
        }
      `}</style>
    </section>
  )
}

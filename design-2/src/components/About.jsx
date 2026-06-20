import { motion } from 'framer-motion'
import { specialties, capabilities, visionPoints, missionPoints } from '../data/content'
import { images } from '../data/images'
import SectionHeader from './ui/SectionHeader'

const visionStatement =
  'To be the trusted partner that empowers organizations to grow with confidence by delivering secure, simplified, and future-ready IT solutions.'

const missionStatement =
  'Our mission is to take complete ownership of our clients\' IT ecosystems by delivering cost-efficient, secure, and scalable managed services that drive operational excellence.'

function VmPointIcon({ type }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (type) {
    case 'partner':
      return (
        <svg {...props}>
          <path d="M9.5 12.5 7 10a2.2 2.2 0 0 1 3-3l1.5 1.5" />
          <path d="M22.5 12.5 25 10a2.2 2.2 0 0 0-3-3L20.5 8.5" />
          <path d="M11 14.5c0-1.5 1-2.8 2.5-3.2M21 14.5c0-1.5-1-2.8-2.5-3.2" />
          <path d="M12.5 17 11 20.5l2 1.5 2.5-1 3.5-4.5 2.5 1 2 3.5-2.5 2-3-2.5-2-1.5 2.5Z" />
        </svg>
      )
    case 'innovation':
      return (
        <svg {...props}>
          <path d="M12 25h8M14 28h4" />
          <path d="M16 25v-2" />
          <path d="M16 5.5a7 7 0 0 0-3.5 12.9V22h7V18.4A7 7 0 0 0 16 5.5Z" />
          <circle cx="16" cy="13.5" r="2.8" />
          <circle cx="16" cy="13.5" r="1" />
          <path d="M16 11.2v1M16 15.8v1M14.2 13.5h1M17.8 13.5h1" />
        </svg>
      )
    case 'enterprise':
    case 'growth':
      return (
        <svg {...props}>
          <path d="M5 24V14" />
          <path d="M12 24V10" />
          <path d="M19 24V16" />
          <path d="M4 24h24" />
          <path d="m20 8 3-3 3 3" />
          <path d="M23 5v8" />
        </svg>
      )
    case 'resilience':
      return (
        <svg {...props}>
          <path d="M10 14a6 6 0 1 1 12 0c0 4.5-6 8-6 8s-6-3.5-6-8Z" transform="translate(0,-2)" />
          <path d="M16 8.5c3.5 0 6 2.2 6 5" />
          <circle cx="8" cy="20" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="16" cy="23" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="24" cy="20" r="1.3" fill="currentColor" stroke="none" />
          <path d="M13 18.5 8 20M19 18.5 24 20M16 20v3" />
        </svg>
      )
    case 'benchmark':
      return (
        <svg {...props}>
          <path d="M6 24h20" />
          <path d="M8 24V18" />
          <path d="M14 24V14" />
          <path d="M20 24V20" />
          <circle cx="14" cy="11" r="2" />
          <circle cx="8" cy="15" r="1.6" />
          <circle cx="20" cy="17" r="1.6" />
          <path d="M14 9V7" />
          <path d="M12.5 7.5 14 6l1.5 1.5" />
        </svg>
      )
    case 'support':
      return (
        <svg {...props}>
          <path d="M10 8a6 6 0 0 1 12 0" />
          <rect x="7" y="18" width="18" height="8" rx="1.5" />
          <path d="M11 26h10" />
          <path d="M22 12a4 4 0 0 0-4-4" />
          <path d="M10 12a4 4 0 0 1 4-4" />
          <path d="M18 10.5c2 .8 3.2 2.4 3.2 4.2" />
          <path d="M14 10.5c-2 .8-3.2 2.4-3.2 4.2" />
        </svg>
      )
    case 'cost':
      return (
        <svg {...props}>
          <path d="M16 5.5v-1.5" />
          <path d="M13.5 4h5" />
          <path d="M11 8.5c0-2.2 2.2-3.8 5-3.8s5 1.6 5 3.8-2.2 3.8-5 3.8" />
          <path d="M11 8.5c0 2.2 2.2 4.5 5 5.2 2.8-.7 5-3 5-5.2" />
          <path d="M13 15.5c0 2.8 1.8 5 3 6 1.2-1 3-3.2 3-6" />
          <path d="M14.2 12.2h1.2" />
          <path d="M16.6 12.2h1.2" />
          <path d="M15.4 11v3.8" />
        </svg>
      )
    case 'security':
      return (
        <svg {...props}>
          <path d="M16 5 8 8.5V15c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V8.5L16 5Z" />
          <path d="M12.5 15.5 15 18l4.5-5" />
        </svg>
      )
    case 'simplicity':
      return (
        <svg {...props}>
          <circle cx="7.5" cy="10" r="2.8" />
          <path d="M10.3 10h5.2" />
          <path d="M15.5 7.2 18.3 10l-2.8 2.8" />
          <path d="M18.3 10v6.2" />
          <path d="M16 18.2 18.3 20.5 20.6 18.2" />
          <path d="M7.5 12.8v4.5" />
          <path d="M5 19 7.5 21.5 10 19" />
        </svg>
      )
    default:
      return null
  }
}

export default function About() {
  return (
    <section id="about" className="section section-light about-section">
      <div className="container">
        <div className="about-layout">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={images.aboutMain}
              alt="Software development team collaborating"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const img = e.currentTarget
                if (img.dataset.fallback === '2') {
                  img.onerror = null
                  img.src = images.services.managed
                  return
                }
                if (img.dataset.fallback === '1') {
                  img.dataset.fallback = '2'
                  img.src = images.aboutFallback
                  return
                }
                img.dataset.fallback = '1'
                img.src = images.aboutSecondary
              }}
            />
            <div className="about-visual-card">
              <span>Since 2004</span>
              <strong>20+ Years</strong>
              <p>Enterprise IT expertise</p>
            </div>
          </motion.div>

          <div className="about-main">
            <SectionHeader
              number="03"
              label="Who We Are"
              title="Your strategic technology partner"
              desc="In today's cloud-first and security-driven world, organizations need more than break-fix support. VICLOPS takes complete ownership of your technology ecosystem."
            />

            <div className="specialty-grid">
              {specialties.map((item, i) => (
                <motion.div
                  key={item}
                  className="specialty-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="spec-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="what-we-do"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>What We Do</h3>
          <ul className="cap-list">
            {capabilities.map((cap, i) => (
              <motion.li
                key={cap}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {cap}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <SectionHeader
          label="Our Purpose"
          title="Vision & Mission"
          desc="The principles that guide every engagement and define how we partner with our clients."
          align="center"
        />

        <div className="vm-grid">
          <motion.article
            className="vm-card vm-card--vision"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="vm-tag">Vision</span>
            <p className="vm-statement">{visionStatement}</p>
            <ul className="vm-points">
              {visionPoints.map((p, i) => (
                <motion.li
                  key={p.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                >
                  <span className="vm-point-icon">
                    <VmPointIcon type={p.icon} />
                  </span>
                  {p.text}
                </motion.li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="vm-card vm-card--mission"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="vm-tag">Mission</span>
            <p className="vm-statement">{missionStatement}</p>
            <ul className="vm-points">
              {missionPoints.map((p, i) => (
                <motion.li
                  key={p.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                >
                  <span className="vm-point-icon">
                    <VmPointIcon type={p.icon} />
                  </span>
                  {p.text}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>

      <style>{`
        .about-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .about-layout { grid-template-columns: 1fr; gap: 40px; }
        }
        .about-visual {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4 / 5;
          max-height: 540px;
        }
        .about-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 18%;
        }
        @media (max-width: 900px) {
          .about-visual {
            aspect-ratio: 16 / 11;
            max-height: none;
          }
          .about-visual img { object-position: center 22%; }
        }
        .about-visual-card {
          position: absolute;
          bottom: 20px;
          left: 20px;
          padding: 18px 22px;
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow);
        }
        .about-visual-card span {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .about-visual-card strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--navy);
          line-height: 1.1;
        }
        .about-visual-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .specialty-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 32px;
        }
        @media (max-width: 540px) {
          .specialty-grid { grid-template-columns: 1fr; }
        }
        .specialty-card {
          padding: 18px 20px;
          background: var(--off-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .specialty-card:hover {
          border-color: rgba(59,130,246,0.3);
          box-shadow: var(--shadow-sm);
        }
        .spec-num {
          font-family: var(--font-display);
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: 0.1em;
        }
        .specialty-card p {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--navy);
          margin-top: 8px;
          line-height: 1.4;
        }
        .what-we-do {
          margin-top: 56px;
          padding: 40px;
          background: var(--off-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
        }
        .what-we-do + .section-header {
          margin-top: 64px;
        }
        .what-we-do h3 {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--navy);
        }
        .cap-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 32px;
        }
        @media (max-width: 768px) {
          .cap-list { grid-template-columns: 1fr; }
        }
        .cap-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .cap-list li svg {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .about-section .section-header--center {
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 64px;
        }
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
        }
        @media (max-width: 860px) {
          .vm-grid { grid-template-columns: 1fr; }
        }
        .vm-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: clamp(28px, 3.5vw, 36px);
          border-radius: var(--radius-lg);
          border: 1px solid transparent;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .vm-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .vm-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(7, 21, 40, 0.35);
        }
        .vm-card--vision {
          background: linear-gradient(155deg, var(--navy) 0%, var(--navy-mid) 50%, #123a6e 100%);
          border-color: rgba(59, 130, 246, 0.22);
          box-shadow: 0 12px 40px rgba(7, 21, 40, 0.25);
        }
        .vm-card--vision::before {
          background:
            radial-gradient(circle at 90% 8%, rgba(59, 130, 246, 0.2), transparent 42%),
            radial-gradient(circle at 8% 92%, rgba(56, 189, 248, 0.12), transparent 38%);
          opacity: 1;
        }
        .vm-card--mission {
          background: linear-gradient(155deg, var(--navy) 0%, #0c2340 50%, #152f55 100%);
          border-color: rgba(99, 102, 241, 0.22);
          box-shadow: 0 12px 40px rgba(7, 21, 40, 0.25);
        }
        .vm-card--mission::before {
          background:
            radial-gradient(circle at 90% 8%, rgba(99, 102, 241, 0.18), transparent 42%),
            radial-gradient(circle at 8% 92%, rgba(59, 130, 246, 0.1), transparent 38%);
          opacity: 1;
        }
        .vm-card > * {
          position: relative;
          z-index: 1;
        }
        .vm-tag {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 6px 12px;
          font-family: var(--font-display);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border-radius: 999px;
          margin-bottom: 16px;
        }
        .vm-card--vision .vm-tag {
          color: var(--accent-bright);
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
        }
        .vm-card--mission .vm-tag {
          color: #a5b4fc;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.35);
        }
        .vm-statement {
          font-size: clamp(0.95rem, 1.4vw, 1.02rem);
          line-height: 1.72;
          color: rgba(240, 244, 252, 0.92);
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-dark);
        }
        .vm-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .vm-points li {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-on-dark);
          line-height: 1.4;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
        }
        .vm-point-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 10px;
        }
        .vm-card--vision .vm-point-icon {
          color: var(--accent-bright);
          background: rgba(59, 130, 246, 0.18);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .vm-card--mission .vm-point-icon {
          color: #a5b4fc;
          background: rgba(99, 102, 241, 0.18);
          border: 1px solid rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </section>
  )
}

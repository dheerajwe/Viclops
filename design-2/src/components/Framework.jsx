import { useState } from 'react'
import { framework } from '../data/content'
import SectionHeader from './ui/SectionHeader'

const stepColors = ['#5eb4e8', '#3d96d4', '#2a78b8', '#1a5594', '#0c2f5c']

const stepIcons = [
  // V — design hub
  <svg key="v" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <circle cx="24" cy="24" r="5" />
    <circle cx="24" cy="8" r="3" />
    <circle cx="38" cy="32" r="3" />
    <circle cx="10" cy="32" r="3" />
    <path d="M24 13v6M27 26l8 4M21 26l-8 4" strokeLinecap="round" />
  </svg>,
  // I — servers
  <svg key="i" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <rect x="10" y="8" width="28" height="10" rx="2" />
    <rect x="10" y="19" width="28" height="10" rx="2" />
    <rect x="10" y="30" width="28" height="10" rx="2" />
    <circle cx="16" cy="13" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="24" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="35" r="1.5" fill="currentColor" stroke="none" />
  </svg>,
  // CL — cloud
  <svg key="cl" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <rect x="8" y="10" width="22" height="16" rx="2" />
    <path d="M14 26h6M20 30v6M26 26h6" strokeLinecap="round" />
    <path d="M30 32c4 0 7-2.5 7-6s-3-6-7-6c-.5-4-4-7-8.5-7S14 16 14.5 20c-3.5.5-6 3-6 6.5S11 33 14.5 33" strokeLinecap="round" />
  </svg>,
  // OP — gears
  <svg key="op" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <circle cx="18" cy="22" r="6" />
    <circle cx="30" cy="30" r="5" />
    <path d="M18 16v-3M18 28v3M12 22h-3M24 22h3M14.1 17.1l-2.1-2.1M21.9 26.9l2.1 2.1M14.1 26.9l-2.1 2.1M21.9 17.1l2.1-2.1M30 25v-3M30 35v3M25 30h-3M35 30h3" strokeLinecap="round" />
  </svg>,
  // S — shield
  <svg key="s" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M24 6L10 12v12c0 8.5 6 15.5 14 18 8-2.5 14-9.5 14-18V12L24 6z" strokeLinejoin="round" />
    <path d="M18 24l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
]

function FrameworkTagline({ parts }) {
  return (
    <>
      {parts.map((part, i) =>
        part.highlight ? (
          <span key={i} className="fw-cap">{part.text}</span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  )
}

export default function Framework() {
  const [active, setActive] = useState(0)

  return (
    <section id="framework" className="section section-off framework-section">
      <div className="container">
        <SectionHeader
          number="02"
          label="VICLOPS Framework"
          title="From Cable to Code"
          desc="Each letter in VICLOPS maps to a core capability — one integrated path from physical infrastructure to secure, cloud-native operations."
        />

        <div className="fw-infographic">
          {framework.map((item, i) => {
            const isActive = active === i
            return (
              <button
                key={item.letter}
                type="button"
                className={`fw-col ${isActive ? 'active' : ''}`}
                style={{ '--col-bg': stepColors[i] }}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
              >
                <span className="fw-col-letter">{item.letter}</span>
                <p className="fw-col-tagline">
                  <FrameworkTagline parts={item.tagline} />
                </p>
                <span className="fw-col-icon">{stepIcons[i]}</span>
              </button>
            )
          })}
        </div>
      </div>

      <style>{`
        .framework-section {
          overflow: hidden;
        }
        .fw-infographic {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          margin-top: 56px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .fw-col {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 280px;
          padding: 28px 18px 24px;
          background: var(--col-bg);
          color: white;
          border: none;
          cursor: pointer;
          text-align: center;
          transition: filter 0.3s, transform 0.3s, box-shadow 0.3s;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
          margin-left: -7px;
        }
        .fw-col:first-child {
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%);
          margin-left: 0;
        }
        .fw-col:last-child {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 14px 50%);
        }
        .fw-col:hover {
          filter: brightness(1.08);
          z-index: 2;
        }
        .fw-col.active {
          filter: brightness(1.12);
          z-index: 3;
          box-shadow: inset 0 0 0 2px rgba(255,255,255,0.45);
        }
        .fw-col-letter {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .fw-col-tagline {
          font-family: var(--font-sans);
          font-size: clamp(0.72rem, 1.1vw, 0.88rem);
          font-weight: 500;
          line-height: 1.45;
          max-width: 140px;
          margin: 0 auto;
        }
        .fw-cap {
          font-family: var(--font-serif);
          font-size: 1.65em;
          font-weight: 700;
          line-height: 1;
          vertical-align: baseline;
        }
        .fw-col-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          opacity: 0.92;
        }
        .fw-col-icon svg {
          width: 100%;
          height: 100%;
        }
        @media (max-width: 900px) {
          .fw-infographic {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            border-radius: var(--radius-sm);
          }
          .fw-col {
            flex: 0 0 min(220px, 72vw);
            scroll-snap-align: center;
            clip-path: none;
            margin-left: 0;
            border-right: 1px solid rgba(255,255,255,0.15);
          }
          .fw-col:last-child {
            border-right: none;
          }
        }
        .fw-showcase {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 0;
          margin-top: 48px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        @media (max-width: 900px) {
          .fw-showcase { grid-template-columns: 1fr; }
        }
        .fw-showcase-visual {
          position: relative;
          min-height: 420px;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .fw-showcase-visual { min-height: 280px; }
        }
        .fw-showcase-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }
        .fw-showcase-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.75;
        }
        .fw-watermark {
          position: absolute;
          bottom: -20px;
          right: 24px;
          font-family: var(--font-serif);
          font-size: clamp(6rem, 12vw, 9rem);
          font-weight: 700;
          color: rgba(255,255,255,0.12);
          line-height: 1;
          pointer-events: none;
        }
        .fw-visual-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          padding: 8px 16px;
          border-radius: 100px;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }
        .fw-showcase-body {
          padding: 40px 40px 36px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 600px) {
          .fw-showcase-body { padding: 28px 24px; }
        }
        .fw-body-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }
        .fw-pillar {
          display: block;
          font-family: var(--font-serif);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .fw-showcase-body h3 {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .fw-nav {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }
        .fw-nav button {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--off-white);
          color: var(--navy);
          transition: all 0.25s;
        }
        .fw-nav button:hover {
          background: var(--navy);
          color: white;
          border-color: var(--navy);
        }
        .fw-desc {
          margin-top: 20px;
          font-size: 1.02rem;
          color: var(--text-muted);
          line-height: 1.75;
        }
        .fw-detail {
          margin-top: 14px;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
        }
        .fw-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 24px;
        }
        .fw-points li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
        .fw-points li svg {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .fw-mini-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          margin-top: 28px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        @media (max-width: 700px) {
          .fw-mini-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 420px) {
          .fw-mini-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .fw-mini {
          padding: 12px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--off-white);
          text-align: left;
          cursor: pointer;
          transition: all 0.25s;
        }
        .fw-mini strong {
          display: block;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--navy);
        }
        .fw-mini span {
          display: block;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .fw-mini.active {
          background: var(--white);
          border-color: var(--mini-color);
          box-shadow: 0 4px 16px color-mix(in srgb, var(--mini-color) 25%, transparent);
        }
        .fw-mini.active strong {
          color: var(--mini-color);
        }
      `}</style>
    </section>
  )
}

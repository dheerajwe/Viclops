import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

const navLinks = [
  { href: '#framework', label: 'Framework' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <motion.header
      className="navbar"
      style={{ '--nav-bg': bgOpacity }}
    >
      <div className="container navbar-inner">
        <a href="#" className="logo">
          <span className="logo-mark">V</span>
          <span className="logo-text">
            VICLOPS
            <small>Technologies Pvt Ltd</small>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Get a Quote
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 16px 0;
        }
        .navbar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 14, 23, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          opacity: var(--nav-bg, 0);
          transition: opacity 0.3s;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-mark {
          width: 40px;
          height: 40px;
          background: var(--accent);
          color: var(--bg);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .logo-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          line-height: 1.2;
        }
        .logo-text small {
          display: block;
          font-size: 0.65rem;
          font-weight: 400;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links a:not(.btn) {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .nav-links a:not(.btn):hover {
          color: var(--text);
        }
        .nav-cta {
          padding: 10px 20px;
          font-size: 0.85rem;
        }
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
        }
        .menu-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text);
          transition: transform 0.3s;
        }
        @media (max-width: 900px) {
          .menu-toggle { display: flex; }
          .nav-links {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            background: var(--bg-elevated);
            flex-direction: column;
            padding: 24px;
            gap: 20px;
            border-bottom: 1px solid var(--border);
            transform: translateY(-120%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.35s ease;
          }
          .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
        }
      `}</style>
    </motion.header>
  )
}

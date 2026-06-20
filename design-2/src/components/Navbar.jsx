import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { images } from '../data/images'
import { navSections } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(navSections.map((s) => s.id))
  const { scrollY } = useScroll()
  const shadow = useTransform(scrollY, [0, 60], [0, 1])

  const handleNavClick = () => setOpen(false)

  return (
    <motion.header className="navbar" style={{ '--nav-shadow': shadow }}>
      <div className="nav-accent" />
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={handleNavClick} aria-label="VICLOPS Technologies">
          <img src={images.logo} alt="VICLOPS Technologies" className="brand-logo" />
        </a>

        <nav className={`nav-menu ${open ? 'open' : ''}`}>
          {navSections.map((link) => {
            const isActive = activeId === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className="nav-link-bar"
                    layoutId="nav-active-bar"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="nav-end">
          <a href="#contact" className="btn btn-primary nav-quote" onClick={handleNavClick}>
            Get a Quote
          </a>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 100;
          background: #fff;
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(7, 21, 40, calc(var(--nav-shadow, 0) * 0.06));
        }
        .nav-accent {
          height: 3px;
          background: linear-gradient(90deg, var(--navy) 0%, var(--accent) 50%, var(--accent-bright) 100%);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          height: var(--nav-height);
        }
        .brand {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          line-height: 0;
        }
        .brand-logo {
          height: 64px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
          object-position: left center;
          display: block;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          position: relative;
          padding: 10px 14px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--navy); }
        .nav-link.active { color: var(--navy); }
        .nav-link-bar {
          position: absolute;
          bottom: 4px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: var(--accent);
          border-radius: 2px;
        }

        .nav-end {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .nav-quote {
          padding: 11px 22px;
          font-size: 0.85rem;
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--off-white);
        }
        .nav-toggle span {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--navy);
          margin: 0 auto;
          transition: transform 0.2s;
        }

        @media (max-width: 1100px) {
          .nav-link { padding: 8px 10px; font-size: 0.75rem; }
          .nav-link-bar { left: 10px; right: 10px; }
        }
        @media (max-width: 960px) {
          .brand-logo {
            height: 52px;
            max-width: 160px;
          }
          .nav-toggle { display: flex; }
          .nav-quote { display: none; }
          .nav-menu {
            position: fixed;
            top: calc(var(--nav-height) + 3px);
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: stretch;
            background: #fff;
            border-bottom: 1px solid var(--border);
            padding: 12px 20px 20px;
            box-shadow: var(--shadow);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-6px);
            transition: all 0.28s ease;
          }
          .nav-menu.open {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0);
          }
          .nav-link {
            padding: 14px 8px;
            font-size: 0.95rem;
            border-bottom: 1px solid var(--border);
          }
          .nav-link:last-child { border-bottom: none; }
          .nav-link-bar { display: none; }
          .nav-link.active {
            color: var(--accent);
            font-weight: 700;
          }
        }
      `}</style>
    </motion.header>
  )
}

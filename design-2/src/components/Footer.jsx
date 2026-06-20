import { contact } from '../data/content'
import { navSections } from '../data/navigation'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent" />
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="footer-cta-label">Ready to transform your IT?</p>
            <h3>Let&apos;s build secure, scalable technology together.</h3>
          </div>
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-brand-name">
              <strong>VICLOPS</strong>
              <span>Technologies Pvt Ltd</span>
            </a>
            <p>
              Secure, scalable, and reliable technology services that drive growth,
              efficiency, and innovation for modern enterprises.
            </p>
            <div className="footer-social">
              <a href={`mailto:${contact.email}`} className="footer-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 8l8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Email us
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="footer-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Call us
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">V Manage</a>
            <a href="#services">V Protect</a>
            <a href="#services">V Secure</a>
            <a href="#services">V Transform</a>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            {navSections.map((link) => (
              <a key={link.id} href={`#${link.id}`}>{link.label}</a>
            ))}
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 8l8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {contact.email}
            </a>
            <div className="footer-address">
              <span className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p>
                {contact.address.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {contact.company}. All Rights Reserved.</p>
          <a href="#home" className="footer-top">Back to top ↑</a>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(180deg, #050d1a 0%, var(--navy) 100%);
          color: var(--text-on-dark);
          padding: 0 0 32px;
          overflow: hidden;
        }
        .footer-accent {
          height: 4px;
          background: linear-gradient(90deg, var(--accent), var(--violet), var(--accent-bright));
        }
        .footer-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 48px 0 40px;
          border-bottom: 1px solid var(--border-dark);
          margin-bottom: 48px;
        }
        @media (max-width: 700px) {
          .footer-cta {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
        }
        .footer-cta-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-bright);
          margin-bottom: 8px;
        }
        .footer-cta h3 {
          font-family: var(--font-display);
          font-size: clamp(1.35rem, 2.5vw, 1.75rem);
          font-weight: 700;
          line-height: 1.25;
          max-width: 480px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
        }
        @media (max-width: 960px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
        .footer-brand-name {
          display: block;
          margin-bottom: 20px;
        }
        .footer-brand-name strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-on-dark);
          letter-spacing: 0.02em;
          line-height: 1.15;
        }
        .footer-brand-name span {
          display: block;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-muted-dark);
          margin-top: 4px;
        }
        .footer-brand p {
          font-size: 0.92rem;
          color: var(--text-muted-dark);
          line-height: 1.7;
          max-width: 320px;
        }
        .footer-social {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }
        .footer-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-on-dark);
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border-dark);
          border-radius: 100px;
          transition: all 0.25s;
        }
        .footer-pill:hover {
          background: rgba(59,130,246,0.2);
          border-color: rgba(59,130,246,0.45);
          color: #7dd3fc;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-col h4 {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #7dd3fc;
          margin-bottom: 4px;
        }
        .footer-col a {
          font-size: 0.9rem;
          color: var(--text-muted-dark);
          transition: color 0.2s, transform 0.2s;
        }
        .footer-col a:hover {
          color: var(--text-on-dark);
          transform: translateX(3px);
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .footer-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 8px;
          color: #7dd3fc;
        }
        .footer-address {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .footer-address p {
          font-size: 0.88rem;
          color: var(--text-muted-dark);
          line-height: 1.6;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--border-dark);
        }
        @media (max-width: 540px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
        .footer-bottom p {
          font-size: 0.8rem;
          color: var(--text-muted-dark);
        }
        .footer-top {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-bright);
          transition: color 0.2s;
        }
        .footer-top:hover {
          color: var(--text-on-dark);
        }
      `}</style>
    </footer>
  )
}

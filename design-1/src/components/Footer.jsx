import { contact } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-mark">V</span>
              <span className="logo-text">
                VICLOPS
                <small>Technologies Pvt Ltd</small>
              </span>
            </div>
            <p>
              Secure, scalable, and reliable technology services that drive growth,
              efficiency, and innovation.
            </p>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">V Manage</a></li>
              <li><a href="#services">V Protect</a></li>
              <li><a href="#services">V Secure</a></li>
              <li><a href="#services">V Transform</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#framework">Framework</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Talk to Us</h4>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VICLOPS Technologies Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 64px 0 32px;
          border-top: 1px solid var(--border);
          background: var(--bg);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .footer-brand .logo-mark {
          width: 36px;
          height: 36px;
          background: var(--accent);
          color: var(--bg);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
        .footer-brand .logo-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          line-height: 1.2;
        }
        .footer-brand .logo-text small {
          display: block;
          font-size: 0.6rem;
          font-weight: 400;
          color: var(--text-muted);
        }
        .footer-brand p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 320px;
        }
        .footer-links h4,
        .footer-contact h4 {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .footer-links ul { display: flex; flex-direction: column; gap: 10px; }
        .footer-links a {
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--accent); }
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-contact a {
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .footer-contact a:hover { color: var(--accent); }
        .footer-bottom {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          text-align: center;
        }
        .footer-bottom p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  )
}

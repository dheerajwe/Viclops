import { motion } from 'framer-motion'
import { contact } from '../data/content'
import { images } from '../data/images'
import SectionHeader from './ui/SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="section section-light contact-section">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-left">
            <SectionHeader
              number="05"
              label="Contact Us"
              title="Let's build your future-ready IT"
              desc="Talk to our team. Reliable, secure cloud & IT services that help your business grow."
            />

            <div className="contact-info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Phone</span>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="info-card info-card--wide">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>Office</span>
                <p>
                  {contact.address.map((line) => (
                    <span key={line}>{line}<br /></span>
                  ))}
                </p>
              </div>
            </div>

            <div className="contact-visuals">
              {images.highlights.map((src, i) => (
                <motion.div
                  key={i}
                  className="contact-visual"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <img src={src} alt="" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.form
            className="contact-form gradient-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-header">
              <h3>Get a Quote</h3>
              <p>We'll respond within 24 hours</p>
            </div>
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Company" />
            <select>
              <option value="">Select Service</option>
              <option>V Manage</option>
              <option>V Protect</option>
              <option>V Secure</option>
              <option>V Transform</option>
            </select>
            <textarea placeholder="Describe your requirements..." rows={4} required />
            <button type="submit" className="btn btn-primary">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; gap: 40px; }
        }
        .contact-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 32px;
        }
        .info-card {
          padding: 20px;
          background: var(--off-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          transition: box-shadow 0.3s;
        }
        .info-card:hover { box-shadow: var(--shadow-sm); }
        .info-card--wide { grid-column: 1 / -1; }
        .info-icon {
          color: var(--accent);
          margin-bottom: 10px;
        }
        .info-card span {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .info-card a,
        .info-card p {
          display: block;
          margin-top: 6px;
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .info-card a:hover { color: var(--navy); }
        .contact-visuals {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 28px;
        }
        .contact-visual {
          border-radius: var(--radius-sm);
          overflow: hidden;
          height: 80px;
        }
        .contact-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }
        .contact-visual:hover img { transform: scale(1.06); }
        .contact-form {
          padding: 40px;
          background: var(--navy);
          border-radius: var(--radius-lg);
          color: white;
          margin-top: 64px;
        }
        @media (max-width: 900px) {
          .contact-form { margin-top: 0; }
        }
        .form-header {
          margin-bottom: 28px;
        }
        .form-header h3 {
          font-family: var(--font-display);
          font-size: 1.65rem;
          font-weight: 700;
        }
        .form-header p {
          font-size: 0.875rem;
          color: var(--text-muted-dark);
          margin-top: 6px;
        }
        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-sm);
          color: white;
          font-size: 0.95rem;
          margin-bottom: 14px;
          transition: border-color 0.2s;
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: rgba(255,255,255,0.4);
        }
        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--accent-bright);
        }
        .contact-form select option { color: var(--navy); }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr; }
        }
        .contact-form .btn {
          width: 100%;
          justify-content: center;
          margin-top: 6px;
        }
      `}</style>
    </section>
  )
}

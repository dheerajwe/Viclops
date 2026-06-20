import { motion } from 'framer-motion'
import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Contact Us</p>
            <h2 className="section-title">
              Let's build your
              <br />
              <span className="gradient-text">future-ready IT</span>
            </h2>
            <p className="section-desc">
              Ready to transform your technology ecosystem? Reach out and let's discuss
              how VICLOPS can take complete ownership of your IT infrastructure.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Company</span>
                <p>{contact.company}</p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Office</span>
                <p>
                  {contact.address.map((line) => (
                    <span key={line}>{line}<br /></span>
                  ))}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3>Get a Quote</h3>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <input type="text" placeholder="Company Name" />
            <select>
              <option value="">Select a Service</option>
              <option>V Manage – Managed IT</option>
              <option>V Protect – Data Protection</option>
              <option>V Secure – Cybersecurity</option>
              <option>V Transform – Cloud & Digital</option>
            </select>
            <textarea placeholder="Tell us about your requirements..." rows={5} required />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg) 100%);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        .contact-details {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .contact-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .contact-item p,
        .contact-item a {
          font-size: 1rem;
          margin-top: 6px;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .contact-item a:hover { color: var(--accent); }
        .contact-form {
          padding: 40px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
        }
        .contact-form h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin-bottom: 28px;
        }
        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          padding: 14px 18px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text);
          font-size: 0.95rem;
          margin-bottom: 16px;
          transition: border-color 0.2s;
        }
        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .contact-form textarea { resize: vertical; min-height: 120px; }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr; }
        }
        .contact-form .btn { width: 100%; justify-content: center; margin-top: 8px; }
      `}</style>
    </section>
  )
}

import { motion, useScroll, useTransform } from 'framer-motion'
import { images } from '../data/images'

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 120])
  const contentY = useTransform(scrollY, [0, 500], [0, 60])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5])

  return (
    <section id="home" className="hero">
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <img src={images.hero} alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </motion.div>

      <div className="hero-grid-lines" />

      <div className="container hero-content-wrap">
        <motion.div className="hero-content" style={{ y: contentY, opacity }}>
          <p className="hero-eyebrow">Technology & IT Consulting Services</p>

          <h1>
            Digital Transformation with{' '}
            <span className="hero-brand">VICLOPS</span>
          </h1>
         
          <h2 className="hero-subhead">
            We don’t just support IT — we take complete ownership of your digital backbone
          </h2>

          <p className="hero-lead">
            Your partner in Cloud, IT & Security. Advanced, tailor-made solutions that help
            businesses unlock growth through secure, scalable, and reliable technology.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get a Quote</a>
            <a href="#about" className="btn btn-outline-light">Why VICLOPS</a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>20+</strong>
              <span>Years Experience</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <strong>4</strong>
              <span>Service Pillars</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <strong>100%</strong>
              <span>Ownership Model</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom-fade" />

      <style>{`
        .hero {
          position: relative;
          min-height: calc(100vh - var(--nav-height));
          min-height: calc(100dvh - var(--nav-height));
          margin-top: var(--nav-total);
          display: flex;
          align-items: center;
          overflow: hidden;
          color: white;
        }
        .hero-bg {
          position: absolute;
          inset: -10% 0 0 0;
          z-index: 0;
        }
        .hero-bg-img {
          width: 100%;
          height: 110%;
          object-fit: cover;
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(105deg, rgba(5,13,26,0.92) 0%, rgba(7,21,40,0.78) 45%, rgba(7,21,40,0.55) 100%),
            linear-gradient(to top, rgba(5,13,26,0.9), transparent 50%);
        }
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, black 30%, transparent 90%);
          z-index: 1;
          pointer-events: none;
        }
        .hero-content-wrap {
          position: relative;
          z-index: 2;
          padding: 80px 0 100px;
        }
        .hero-content {
          max-width: 680px;
        }
        .hero-eyebrow {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #7dd3fc;
          margin-bottom: 20px;
        }
        .hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5.5vw, 3.75rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.025em;
        }
        .hero-subhead {
          font-size: clamp(1.15rem, 2.2vw, 1.45rem);
          font-weight: 500;
          line-height: 1.45;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.88);
          margin-top: 28px;
          max-width: 620px;
        }
        .hero-brand {
          font-weight: 800;
          color: #38bdf8;
        }
        .hero-lead {
          font-size: 1.1rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.78);
          margin-top: 24px;
          max-width: 560px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 48px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.12);
          flex-wrap: wrap;
        }
        .trust-item strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.65rem;
          font-weight: 800;
          color: #7dd3fc;
          line-height: 1;
        }
        .trust-item span {
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }
        .trust-divider {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.15);
        }
        .hero-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to top, var(--off-white), transparent);
          z-index: 2;
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function SectionHeader({
  label,
  title,
  desc,
  align = 'left',
  dark = false,
  number,
}) {
  return (
    <motion.div
      className={`section-header section-header--${align} ${dark ? 'section-header--dark' : ''}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {number && <span className="section-number">{number}</span>}
      {label && <p className="section-label">{label}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {desc && <p className="section-desc">{desc}</p>}
    </motion.div>
  )
}

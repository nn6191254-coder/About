import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="footer-inner">
        <p className="footer-name">NAVEEN.</p>
        <div className="footer-links">
          <a href="https://github.com/nn6191254-coder" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:naveen@example.com">Email</a>
        </div>
      </div>
    </motion.footer>
  )
}

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
          <a href="https://www.instagram.com/nanaveen7630/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/naveen-c-1b2b0b342/?isSelfProfile=true" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/NaNaveen2102" target="_blank" rel="noreferrer">
            X
          </a>
          <a href="mailto:naveen@example.com">Email</a>
        </div>
      </div>
    </motion.footer>
  )
}

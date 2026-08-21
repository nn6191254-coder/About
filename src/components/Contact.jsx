import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="contact-wrap"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="eyebrow">LET&apos;S BUILD SOMETHING</p>
        <h2>Available for internships, freelance work, and collaborative builds.</h2>

        <div className="contact-actions">
          <motion.a
            href="/contact-details.html"
            className="primary-btn"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
          <a href="https://github.com/nn6191254-coder" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </motion.section>
  )
}

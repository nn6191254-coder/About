import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <div className="loader-content">
        <motion.p
          className="loader-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          NAVEEN.
        </motion.p>

        <motion.p
          className="loader-subtitle"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          PORTFOLIO 2026
        </motion.p>

        <motion.div
          className="loader-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}

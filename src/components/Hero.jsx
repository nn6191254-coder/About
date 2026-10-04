import { motion } from 'framer-motion'
import { ArrowDown, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'

const heroStats = [
  { value: '6+', label: 'Projects' },
  { value: '2+', label: 'Years building' },
  { value: 'AI', label: 'Driven' },
]

const lines = [
  'HI, I\'M',
  'NAVEEN.',
  'BCA STUDENT & DEVELOPER.',
  'I BUILD DIGITAL EXPERIENCES.',
]

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">BCA STUDENT • FULL-STACK DEVELOPER • AI/ML ENTHUSIAST</p>

        <h1>
          {lines.map((line, index) => (
            <motion.span
              key={line}
              className={`hero-line ${index === 1 ? 'highlight' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              {index === 0 ? 'HI, I\'M' : index === 1 ? 'NAVEEN.' : index === 2 ? 'BCA STUDENT & DEVELOPER.' : 'I BUILD DIGITAL EXPERIENCES.'}
            </motion.span>
          ))}
        </h1>

        <p className="hero-description">
          Final-year BCA student passionate about web development, AI, and creating
          practical digital products that solve real-world problems.
        </p>

        <div className="hero-actions">
          <motion.a
            href="#projects"
            className="primary-btn"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="https://github.com/nn6191254-coder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-btn"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <GitBranch size={18} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/naveen-c-1b2b0b342/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <BriefcaseBusiness size={18} />
          </motion.a>

          <motion.a
            href="mailto:naveen@example.com"
            aria-label="Email"
            className="icon-btn"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Mail size={18} />
          </motion.a>
        </div>

        <div className="hero-stats" aria-label="Key portfolio stats">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="hero-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + index * 0.12 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <a href="#about" className="scroll-cue">
          <span>Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="portrait-frame">
          <div className="portrait-glow" />
          <img src="/profile(1).jpeg" alt="Naveen" className="profile-image" />
        </div>

        <motion.div
          className="floating-badge badge-top"
          initial={{ opacity: 0, x: 18, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.04, y: -4 }}
        >
          <span>Frontend</span>
          <strong>React / UI</strong>
        </motion.div>

        <motion.div
          className="floating-badge badge-bottom"
          initial={{ opacity: 0, x: -18, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.04, y: -4 }}
        >
          <span>Build mode</span>
          <strong>AI + Apps</strong>
        </motion.div>
      </motion.div>
    </section>
  )
}

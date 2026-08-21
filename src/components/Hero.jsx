import { motion } from 'framer-motion'
import { ArrowDown, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">BCA STUDENT • FULL-STACK DEVELOPER • AI/ML ENTHUSIAST</p>

        <h1>
          Hi, I&apos;m <span>Naveen</span>.
          <br />
          I build digital experiences.
        </h1>

        <p className="hero-description">
          Final-year BCA student passionate about web development, AI, and creating
          practical digital products that solve real-world problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="https://github.com/nn6191254-coder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-btn"
          >
            <GitBranch size={18} />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
          >
            <BriefcaseBusiness size={18} />
          </a>

          <a href="mailto:naveen@example.com" aria-label="Email" className="icon-btn">
            <Mail size={18} />
          </a>
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
      </motion.div>
    </section>
  )
}

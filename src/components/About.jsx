import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { BrainCircuit, BriefcaseBusiness, GraduationCap, Sparkles } from 'lucide-react'

const education = [
  ['College', 'GH BCA Haveri'],
  ['Degree', 'Bachelor of Computer Applications (BCA)'],
  ['Status', 'Final-year student'],
  ['Focus', 'Full-stack development, AI, and product thinking'],
]

const stats = [
  { value: 6, suffix: '+', label: 'Projects', icon: BriefcaseBusiness },
  { value: 10, suffix: '+', label: 'Technologies', icon: Sparkles },
  { value: 2026, suffix: '', label: 'BCA Final Year', icon: GraduationCap },
]

function CountUp({ value, suffix }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 1100
    const step = Math.max(1, Math.ceil((end * 16) / duration))

    const timer = window.setInterval(() => {
      start += step
      if (start >= end) {
        setDisplay(end)
        window.clearInterval(timer)
        return
      }
      setDisplay(start)
    }, 16)

    return () => window.clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>01</span>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p>
            I&apos;m a BCA student with a strong interest in building modern digital
            experiences using frontend, backend, and AI-powered workflows. I enjoy
            turning ideas into interactive web products, learning new technologies, and
            shipping projects that combine usability with real value.
          </p>
          <p>
            My work focuses on full-stack web development, responsive UI design, API
            integration, and exploring AI/LLM concepts like RAG, document intelligence,
            and practical automation.
          </p>

          <div className="about-stats">
            {stats.map(({ value, suffix, label, icon: Icon }) => (
              <motion.div
                key={label}
                className="about-stat"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="about-stat-icon">
                  <Icon size={18} />
                </div>
                <strong>
                  <CountUp value={value} suffix={suffix} />
                </strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-panel"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
          whileHover={{ y: -6 }}
        >
          <h3>Education</h3>
          <div className="meta-list">
            {education.map(([label, value]) => (
              <div key={label} className="meta-item">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="about-badge">
            <BrainCircuit size={18} />
            AI &amp; RAG mindset
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

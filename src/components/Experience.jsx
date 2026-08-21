import { motion } from 'framer-motion'

const experience = [
  {
    period: '2024 — Present',
    role: 'Full-Stack Developer / Student Builder',
    company: 'Independent Projects',
    details:
      'Building end-to-end applications with frontend, backend, API integration, and problem-driven product design.',
  },
  {
    period: '2023 — 2024',
    role: 'Web Development Learner',
    company: 'Self-directed study',
    details:
      'Developed responsive interfaces and practical project work using React, JavaScript, and backend tools.',
  },
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section experience-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>04</span>
        <h2>Work Experience</h2>
      </div>

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.role}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p>{item.details}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

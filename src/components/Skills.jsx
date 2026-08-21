import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe,
  Smartphone,
} from 'lucide-react'

const categories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Mobile & AI',
    icon: Smartphone,
    skills: ['Flutter', 'REST APIs', 'AI / LLM', 'RAG'],
  },
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section skills-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>02</span>
        <h2>Skills &amp; Technologies</h2>
      </div>

      <div className="skill-groups">
        {categories.map(({ title, icon: Icon, skills }, index) => (
          <motion.div
            className="skill-group"
            key={title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="skill-group-header">
              <div className="skill-group-icon">
                <Icon size={18} />
              </div>
              <h3>{title}</h3>
            </div>

            <div className="skill-list">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="skill-chip"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

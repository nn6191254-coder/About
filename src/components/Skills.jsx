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

const languages = [
  { name: 'Kannada', proficiency: 100 },
  { name: 'Hindi', proficiency: 100 },
  { name: 'English', proficiency: 80 },
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

        <motion.div
          className="skill-group language-group"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: categories.length * 0.08 }}
        >
          <div className="skill-group-header">
            <div className="skill-group-icon">
              <Globe size={18} />
            </div>
            <h3>Languages</h3>
          </div>

          <div className="language-list">
            {languages.map(({ name, proficiency }, index) => (
              <motion.div
                key={name}
                className="language-item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="language-header">
                  <span className="language-name">{name}</span>
                  <span className="language-percentage">{proficiency}%</span>
                </div>
                <div className="language-bar">
                  <motion.div
                    className="language-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import projects from '../data/projects'

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section projects-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>03</span>
        <h2>Selected Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="project-number">{project.number}</div>

            <div className="project-preview" aria-hidden="true">
              <div className="preview-window">
                <div className="preview-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="preview-content">
                  <div className="preview-block primary" />
                  <div className="preview-block secondary" />
                  <div className="preview-row" />
                  <div className="preview-row short" />
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRight size={16} />
                  </a>
                ) : null}
                <a href={project.demo} rel="noreferrer">
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span>03</span>
        <h2>Selected Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>

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
                    GitHub ↗
                  </a>
                ) : null}
                <a href={project.demo} rel="noreferrer">
                  Live Demo ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

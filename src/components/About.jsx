const education = [
  ['Degree', 'Bachelor of Computer Applications (BCA)'],
  ['Status', 'Final-year student'],
  ['Focus', 'Full-stack development, AI, and product thinking'],
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <span>01</span>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
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
        </div>

        <div className="about-panel">
          <h3>Education</h3>
          <div className="meta-list">
            {education.map(([label, value]) => (
              <div key={label} className="meta-item">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

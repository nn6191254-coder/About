const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'Flutter',
  'Git',
  'GitHub',
  'REST APIs',
  'AI / LLM',
  'RAG',
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span>02</span>
        <h2>Skills &amp; Technologies</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span>0{index + 1}</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

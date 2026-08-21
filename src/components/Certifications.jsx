const certificates = [
  { title: 'Digital Marketing', href: '/certificates/digital-marketing.html' },
  { title: 'Instagram Mastermind', href: '/certificates/instagram-mastermind.html' },
  { title: 'Video Super Mastery', href: '/certificates/video-super-mastery.html' },
  { title: 'Web Development Fundamentals', href: null },
  { title: 'Advanced Machine Learning Using Python', href: '/certificates/advanced-machine-learning-python.html' },
  { title: 'Fullstack Java Development', href: '/certificates/fullstack-java-development.html' },
  { title: 'UI UX + HTML', href: '/certificates/ui-ux-html.html' },
]

export default function Certifications() {
  return (
    <section id="certificates" className="section certifications-section">
      <div className="section-heading">
        <span>05</span>
        <h2>Certifications</h2>
      </div>

      <div className="certificates-grid">
        {certificates.map((item, index) => {
          const content = (
            <>
              <span>{`0${index + 1}`}</span>
              <h3>{item.title}</h3>
            </>
          )

          if (item.href) {
            return (
              <a
                className="cert-card cert-link"
                href={item.href}
                key={item.title}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            )
          }

          return (
            <div className="cert-card" key={item.title}>
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}

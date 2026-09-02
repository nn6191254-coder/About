import { motion } from 'framer-motion'

const certificates = [
  { title: 'Digital Marketing', href: '/certificates/digital-marketing.html' },
  { title: 'Instagram Mastermind', href: '/certificates/instagram-mastermind.html' },
  { title: 'Video Super Mastery', href: '/certificates/video-super-mastery.html' },
  { title: 'Email Marketing', href: '/certificates/email-marketing.html' },
  { title: 'MS PowerPoint Mastery', href: '/certificates/ms-powerpoint-mastery.html' },
  { title: 'Spoken English Mastery', href: '/certificates/spoken-english-mastery.html' },
  { title: 'Facebook Messenger Marketing (Chatbot)', href: '/certificates/facebook-messenger-marketing-chatbot.html' },
  { title: 'Advanced Personality Development', href: '/certificates/advanced-personality-development.html' },
  { title: 'LinkedIn Mastery', href: '/certificates/linkedin-mastery.html' },
  { title: 'Web Development Fundamentals', href: null },
  { title: 'Advanced Machine Learning Using Python', href: '/certificates/advanced-machine-learning-python.html' },
  { title: 'Fullstack Java Development', href: '/certificates/fullstack-java-development.html' },
  { title: 'UI UX + HTML', href: '/certificates/ui-ux-html.html' },
]

export default function Certifications() {
  return (
    <motion.section
      id="certificates"
      className="section certifications-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-heading">
        <span>05</span>
        <h2>Certifications</h2>
      </div>

      <div className="certificates-grid">
        {certificates.map((item, index) => {
          const content = (
            <>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
            </>
          )

          if (item.href) {
            return (
              <motion.a
                className="cert-card cert-link"
                href={item.href}
                key={item.title}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                {content}
              </motion.a>
            )
          }

          return (
            <motion.div
              className="cert-card"
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {content}
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}

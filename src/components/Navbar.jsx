import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Certificates', '#certificates'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('About')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18)

      const sections = document.querySelectorAll('section[id]')
      let current = 'About'

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150) {
          current = section.id
        }
      })

      const matchedLink = links.find(([, href]) => href === `#${current.toLowerCase()}`)
      if (matchedLink) {
        setActive(matchedLink[0])
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <a href="#top" className="logo" aria-label="Naveen home">
        NAVEEN<span>.</span>
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`nav-links ${open ? 'active' : ''}`}>
        {links.map(([name, href], index) => (
          <motion.a
            key={name}
            href={href}
            onClick={() => setOpen(false)}
            className={active === name ? 'active-link' : ''}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.25 }}
          >
            <span>{name}</span>
          </motion.a>
        ))}
      </div>

      <motion.a
        href="#contact"
        className="nav-button"
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        Let&apos;s Talk
      </motion.a>
    </motion.nav>
  )
}

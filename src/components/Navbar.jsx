import { useState } from 'react'
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

  return (
    <nav className="navbar">
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
        {links.map(([name, href]) => (
          <a key={name} href={href} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-button">
        Let&apos;s Talk
      </a>
    </nav>
  )
}

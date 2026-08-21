import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence>{isLoading ? <Loader key="loader" /> : null}</AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />

        <div className="marquee-wrap" aria-label="Creative developer banner">
          <div className="marquee-track">
            <span>CREATE • BUILD • INNOVATE •</span>
            <span>CREATE • BUILD • INNOVATE •</span>
            <span>CREATE • BUILD • INNOVATE •</span>
          </div>
        </div>

        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

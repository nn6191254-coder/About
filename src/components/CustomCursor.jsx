import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const updateMobile = () => setIsMobile(media.matches)

    updateMobile()
    media.addEventListener('change', updateMobile)

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    const handlePointer = (event) => {
      const target = event.target
      const isInteractive =
        target instanceof HTMLElement &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('.project-card') ||
          target.closest('.skill-card') ||
          target.closest('.cert-card') ||
          target.closest('.icon-btn') ||
          target.closest('.primary-btn'))

      setIsPointer(Boolean(isInteractive))
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerover', handlePointer)
    window.addEventListener('pointerout', handlePointer)

    return () => {
      media.removeEventListener('change', updateMobile)
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerover', handlePointer)
      window.removeEventListener('pointerout', handlePointer)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <div
        className={`cursor-dot ${isPointer ? 'cursor-dot-active' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
      <div
        className={`cursor-ring ${isPointer ? 'cursor-ring-active' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </>
  )
}

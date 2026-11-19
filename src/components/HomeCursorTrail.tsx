import { useEffect } from 'react'

type StarParticle = {
  element: HTMLSpanElement
  life: number
  rotation: number
  rotationSpeed: number
  velocityX: number
  velocityY: number
  x: number
  y: number
}

const starGlyphs = ['⋆', '⭒', '⊹', '˚', '｡', '˖', '⟡', '˙']
const starColors = ['#65638f', '#9a96bd', '#d8d6ea']

export const HomeCursorTrail = () => {
  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hasFinePointer || prefersReducedMotion) return

    const particles: StarParticle[] = []
    let animationFrame = 0
    let lastFrame = performance.now()
    let lastSpawn = 0

    const animate = (time: number) => {
      const delta = Math.min((time - lastFrame) / 16.67, 2)
      lastFrame = time

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index]
        particle.velocityY += 0.045 * delta
        particle.x += particle.velocityX * delta
        particle.y += particle.velocityY * delta
        particle.rotation += particle.rotationSpeed * delta
        particle.life -= 0.02 * delta

        if (particle.life <= 0) {
          particle.element.remove()
          particles.splice(index, 1)
          continue
        }

        const scale = 0.65 + particle.life * 0.35
        particle.element.style.opacity = String(Math.min(1, particle.life * 1.4))
        particle.element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) rotate(${particle.rotation}deg) scale(${scale})`
      }

      if (particles.length > 0) {
        animationFrame = window.requestAnimationFrame(animate)
      } else {
        animationFrame = 0
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.timeStamp - lastSpawn < 42) return
      lastSpawn = event.timeStamp

      const element = document.createElement('span')
      element.textContent = starGlyphs[Math.floor(Math.random() * starGlyphs.length)]
      element.setAttribute('aria-hidden', 'true')
      element.style.position = 'fixed'
      element.style.left = '0'
      element.style.top = '0'
      element.style.zIndex = '30'
      element.style.pointerEvents = 'none'
      element.style.userSelect = 'none'
      element.style.lineHeight = '1'
      element.style.fontSize = `${15 + Math.random() * 6}px`
      element.style.color = starColors[Math.floor(Math.random() * starColors.length)]
      element.style.willChange = 'transform, opacity'
      document.body.appendChild(element)

      particles.push({
        element,
        life: 1,
        rotation: Math.random() * 30 - 15,
        rotationSpeed: Math.random() * 2 - 1,
        velocityX: Math.random() * 1.2 - 0.6,
        velocityY: -(0.5 + Math.random() * 0.8),
        x: event.clientX + Math.random() * 8 - 4,
        y: event.clientY + Math.random() * 8 - 4,
      })

      if (!animationFrame) {
        lastFrame = performance.now()
        animationFrame = window.requestAnimationFrame(animate)
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      particles.forEach((particle) => particle.element.remove())
    }
  }, [])

  return null
}

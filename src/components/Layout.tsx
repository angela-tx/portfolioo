import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { navItems } from '../data'
import { IconLinkedIn, IconMail } from './Icons'
import { Footer } from './Footer'

export const Layout = () => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY
      
      // Ignore tiny jitter to prevent accidental flickering
      if (Math.abs(diff) < 4) return
      
      if (diff > 0 && currentScrollY > 80) {
        // Scrolled down: commit to closing
        setIsVisible(false)
      } else if (diff < 0) {
        // Scrolled up: commit to opening
        setIsVisible(true)
      }
      
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <div className="min-h-screen bg-white text-primary">
    <header className={`sticky top-0 z-10 bg-white/95 backdrop-blur-md transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto flex w-[min(800px,calc(100%-160px))] flex-col items-start justify-between gap-4 py-[14px] lg:flex-row lg:items-center">
        <div className="inline-flex items-center">
          <Link className="inline-flex items-center text-accent no-underline" to="/" aria-label="Back to home">
            <span className="text-[32px] leading-none mb-1">🪽</span>
          </Link>
          <span 
            className="font-geist text-[18px] font-normal tracking-[-0.02em] leading-none text-start no-underline ml-5 mr-2" 
            style={{ color: 'rgba(97, 90, 117, 0.3)' }}
            aria-hidden="true"
          >
            |
          </span>
          <nav className="flex flex-wrap items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              // Highlight current page in accent color
              // Treat nested routes (e.g., /work/slug) as active for their parent
              // eslint-disable-next-line react/jsx-no-comment-textnodes
              <Link
                key={item.to}
                className={`rounded-[6px] px-2 py-2 text-[15px] font-normal tracking-[-0.01em] no-underline ${
                  pathname.startsWith(item.to)
                    ? 'text-[rgb(143,128,173)] hover:text-[rgb(143,128,173)]'
                    : 'text-primary hover:text-[rgb(143,128,173)]'
                }`}
                aria-current={pathname.startsWith(item.to) ? 'page' : undefined}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="inline-flex items-center gap-0">
          <a
            className="inline-flex rounded-[6px] p-2 text-primary hover:text-[rgb(143,128,173)]"
            href="https://www.linkedin.com/in/angelatxhuang/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedIn />
          </a>
          <a
            className="inline-flex rounded-[6px] p-2 text-primary hover:text-[rgb(143,128,173)]"
            href="mailto:angelatxhuang@gmail.com"
            aria-label="Email"
          >
            <IconMail />
          </a>
        </div>
      </div>
    </header>

    <main className="mx-auto flex w-[min(800px,calc(100%-160px))] flex-col gap-[88px] pt-16">
      <div key={pathname} className="animate-page">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
  )
}

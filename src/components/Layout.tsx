import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect, useLayoutEffect } from 'react'
import { navItems } from '../data'
import { IconLinkedIn } from './Icons'
import { Footer } from './Footer'
import { EmailCopyButton } from './EmailCopyButton'

export const Layout = () => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return

    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    setIsVisible(true)
  }, [pathname])

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
      <div className="site-container flex items-center justify-between gap-1 py-[14px]">
        <div className="inline-flex min-w-0 items-center">
          <Link className="inline-flex items-center text-accent no-underline" to="/" aria-label="Back to home">
            <span className="mb-1 text-[32px] leading-none max-[340px]:text-[28px]">🪽</span>
          </Link>
          <span 
            className="ml-2 mr-1 font-geist text-[18px] font-normal leading-none tracking-[-0.02em] text-start no-underline max-[340px]:ml-1 max-[340px]:mr-0 max-[340px]:text-[16px] sm:ml-5 sm:mr-2"
            style={{ color: 'rgba(101, 99, 143, 0.3)' }}
            aria-hidden="true"
          >
            |
          </span>
          <nav className="flex flex-nowrap items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              // Highlight current page in accent color
              // Treat nested routes (e.g., /work/slug) as active for their parent
              <Link
                key={item.to}
                className={`rounded-[6px] px-2 py-2 text-[15px] font-normal tracking-[-0.01em] no-underline max-[340px]:px-1 max-[340px]:text-[14px] ${
                  pathname.startsWith(item.to)
                    ? 'text-primary hover:text-[#65638f]'
                    : 'text-primary hover:text-[#65638f]'
                }`}
                aria-current={pathname.startsWith(item.to) ? 'page' : undefined}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="ml-auto inline-flex shrink-0 items-center gap-0">
          <a
            className="inline-flex rounded-[6px] p-2 text-primary hover:text-[#65638f]"
            href="https://www.linkedin.com/in/angelatxhuang/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedIn />
          </a>
          <EmailCopyButton />
        </div>
      </div>
    </header>

    <main className="site-container flex flex-col gap-[88px] pt-16">
      <div key={pathname} className="animate-page">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
  )
}

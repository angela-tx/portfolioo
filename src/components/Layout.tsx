import { Link, Outlet } from 'react-router-dom'
import { navItems } from '../data'
import { IconLinkedIn, IconMail } from './Icons'
import { Footer } from './Footer'

export const Layout = () => (
  <div className="min-h-screen bg-white text-primary">
    <header className="sticky top-0 z-10 border-b border-[rgba(232,227,243,0.8)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-[min(800px,calc(100%-160px))] flex-col items-start justify-between gap-4 py-[14px] lg:flex-row lg:items-center">
        <div className="inline-flex items-center gap-2.5">
          <Link className="inline-flex items-center gap-2 text-accent no-underline" to="/" aria-label="Back to home">
            <span className="text-sm">🪽</span>
          </Link>
          <span className="text-[14px] text-[rgba(97,90,117,0.5)]" aria-hidden="true">
            |
          </span>
          <nav className="flex flex-wrap items-center gap-2" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.to}
                className="rounded-[6px] px-3 py-2 text-[15px] font-semibold tracking-[-0.01em] text-primary transition duration-200 ease-out hover:-translate-y-[1px] hover:bg-[rgba(109,99,206,0.08)] hover:text-accent no-underline"
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="inline-flex items-center gap-2.5">
          <a
            className="inline-flex rounded-[6px] p-2 text-primary transition duration-200 ease-out hover:bg-[rgba(109,99,206,0.08)]"
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedIn />
          </a>
          <a
            className="inline-flex rounded-[6px] p-2 text-primary transition duration-200 ease-out hover:bg-[rgba(109,99,206,0.08)]"
            href="mailto:hello@angelatxhuang.com"
            aria-label="Email"
          >
            <IconMail />
          </a>
        </div>
      </div>
    </header>

    <main className="mx-auto flex w-[min(800px,calc(100%-160px))] flex-col gap-[88px] pt-3 pb-24">
      <Outlet />
    </main>
    <Footer />
  </div>
)

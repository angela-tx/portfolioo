import { Link } from 'react-router-dom'

export const Footer = () => (
  <footer className="mt-16 border-t border-border py-4">
    <div className="mx-auto flex w-[min(800px,calc(100%-160px))] items-center justify-between text-muted">
      <span className="font-body text-muted">Angela Huang</span>
      <nav className="inline-flex items-center gap-4" aria-label="Footer">
        <Link className="text-muted no-underline hover:text-primary" to="/">
          home
        </Link>
        <Link className="text-muted no-underline hover:text-primary" to="/about">
          about me
        </Link>
        <Link className="text-muted no-underline hover:text-primary" to="/work">
          projects
        </Link>
      </nav>
    </div>
  </footer>
)

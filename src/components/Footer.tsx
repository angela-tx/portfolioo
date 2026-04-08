import { IconLinkedIn, IconMail } from './Icons'

export const Footer = () => (
  <footer className="mt-16 border-t border-border py-4">
    <div className="mx-auto flex w-[min(800px,calc(100%-160px))] items-center justify-between text-muted">
      <span className="font-body text-muted">Nice to meet you or welcome back!</span>
      <nav className="inline-flex items-center gap-0" aria-label="Footer">
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
      </nav>
    </div>
  </footer>
)

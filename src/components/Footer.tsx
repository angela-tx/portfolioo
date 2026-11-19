import { EmailCopyButton } from './EmailCopyButton'
import { IconLinkedIn } from './Icons'

export const Footer = () => (
  <footer className="mt-16 border-t border-[#d8d6ea] py-4">
    <div className="site-container flex flex-wrap items-center justify-between gap-2 text-muted">
      <span className="font-body text-[15px] text-primary sm:text-[16px]">
        Nice to meet you or welcome back!
      </span>
      <nav className="inline-flex items-center gap-0" aria-label="Footer">
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
      </nav>
    </div>
  </footer>
)

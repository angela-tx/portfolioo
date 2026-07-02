import { useEffect, useRef, useState } from 'react'
import { IconMail } from './Icons'

const emailAddress = 'angelatxhuang@gmail.com'

export const EmailCopyButton = () => {
  const [emailCopied, setEmailCopied] = useState(false)
  const copyTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) window.clearTimeout(copyTimeoutRef.current)
    }
  }, [])

  const handleCopyEmail = async () => {
    if (copyTimeoutRef.current) window.clearTimeout(copyTimeoutRef.current)

    try {
      await navigator.clipboard.writeText(emailAddress)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = emailAddress
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setEmailCopied(true)
    copyTimeoutRef.current = window.setTimeout(() => setEmailCopied(false), 2200)
  }

  return (
    <button
      className={`inline-flex h-[33px] items-center overflow-hidden rounded-[6px] border-0 bg-transparent px-2 text-primary transition-[max-width,color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[rgb(143,128,173)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(116,99,150,0.2)] [&_svg]:shrink-0 ${
        emailCopied ? 'max-w-[340px] bg-[#f7f5fb] text-[rgb(143,128,173)]' : 'max-w-[33px]'
      }`}
      type="button"
      aria-label="Copy email address"
      aria-live="polite"
      onClick={handleCopyEmail}
    >
      <IconMail />
      <span
        className={`whitespace-nowrap pl-2 font-body text-[13px] font-medium tracking-[0.01em] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          emailCopied ? 'translate-x-0 opacity-100' : 'translate-x-1 opacity-0'
        }`}
      >
        copied to clipboard: {emailAddress}
      </span>
    </button>
  )
}

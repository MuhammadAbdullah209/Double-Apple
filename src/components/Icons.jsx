export function LeafIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20 4c-8 0-14 5-16 12 0 0 6 4 12-1 4-3.2 4.8-7.6 4-11z"
        fill="currentColor"
      />
      <path d="M4.5 19.5 15 9" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function StarIcon({ className = 'w-4 h-4', filled = true }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
      <path
        strokeWidth={filled ? 0 : 1.2}
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.85l-5.2 2.66.99-5.79-4.21-4.1 5.82-.85z"
      />
    </svg>
  )
}

export function SearchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  )
}

export function CartIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <path d="M2.5 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.96-1.6L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function UserIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c1.6-3.6 4.6-5.4 7.5-5.4s5.9 1.8 7.5 5.4" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronDownIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlusIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

export function SocialIcon({ type, className = 'w-4.5 h-4.5' }) {
  const paths = {
    facebook: 'M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.7c0-.4.3-.7.5-.7z',
    instagram:
      'M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.89 1.1 1.15 1.76.25.64.42 1.37.47 2.43C21.99 8.94 22 9.3 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76c-.55.55-1.1.89-1.76 1.15-.64.25-1.37.42-2.43.47C15.06 21.99 14.7 22 12 22s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.44 2.5c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 7.53 4.27 7.85 4.27 12s.01 2.47.06 4.04c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.57.06-1.89.06-4.04s-.01-2.47-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm5.35-1.98a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z',
    twitter:
      'M18.9 3H22l-7.2 8.2L23 21h-6.6l-5.2-6.4L5.2 21H2l7.7-8.8L1.5 3H8.3l4.7 5.9L18.9 3zM17.7 19h1.8L7.4 4.9H5.5L17.7 19z',
    youtube:
      'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    tiktok:
      'M16.6 5.82c-.9-.87-1.4-2.06-1.4-3.32h-3.14v13.5c0 1.53-1.24 2.77-2.77 2.77-1.53 0-2.77-1.24-2.77-2.77 0-1.53 1.24-2.77 2.77-2.77.28 0 .55.04.8.12V9.99a5.9 5.9 0 0 0-.8-.05A5.92 5.92 0 0 0 3.37 15.9a5.92 5.92 0 0 0 5.92 5.92 5.92 5.92 0 0 0 5.92-5.92V9.28a8.1 8.1 0 0 0 4.6 1.43V7.57c-1.14 0-2.2-.36-3.21-1.02a5.7 5.7 0 0 1-.53-.73z',
    whatsapp:
      'M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.2-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C9.5 9 9 7.7 8.8 7.2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 5 4.2.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.7 3.1 1.1 4.8 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.9 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z',
    pinterest:
      'M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.3-5.6s-.3-.7-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-1 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.3-2.4 3.3-5.3 0-2.2-1.6-3.9-4.4-3.9-3.2 0-5.2 2.4-5.2 5 0 .9.3 1.6.7 2.1.2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.2-1.2-.5-1.8-1.9-1.8-3.5 0-2.6 2.2-5.7 6.5-5.7 3.5 0 5.8 2.5 5.8 5.2 0 3.6-1.9 6.3-4.8 6.3-1 0-1.9-.5-2.2-1.1l-.6 2.4c-.2.9-.7 1.9-1.1 2.6.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z',
    telegram:
      'M21.9 4.4L18.6 20c-.2 1.1-.9 1.4-1.9.9l-5.1-3.8-2.5 2.4c-.3.3-.5.5-1 .5l.4-5.3L18 5.5c.4-.4-.1-.6-.6-.2L6.5 12.4l-5.1-1.6c-1.1-.3-1.1-1.1.2-1.6L20.5 2.8c.9-.3 1.7.2 1.4 1.6z',
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d={paths[type]} />
    </svg>
  )
}

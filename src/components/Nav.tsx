import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-100">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent-cyan to-accent-violet text-ink-950 text-[10px] font-bold">
            YB
          </span>
          <span className="hidden sm:inline">yashwanth.balusu</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                active === l.id
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full bg-accent-cyan/90 px-4 py-1.5 text-sm font-medium text-ink-950 hover:bg-accent-cyan transition shadow-glow-cyan"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}

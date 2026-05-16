import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PROJECTS, Project } from '../data/portfolio'
import Section from './Section'

const accentRing: Record<Project['accent'], string> = {
  cyan: 'from-accent-cyan/40 via-accent-cyan/10 to-transparent',
  violet: 'from-accent-violet/40 via-accent-violet/10 to-transparent',
  mint: 'from-accent-mint/40 via-accent-mint/10 to-transparent',
}

const accentText: Record<Project['accent'], string> = {
  cyan: 'text-accent-cyan',
  violet: 'text-accent-violet',
  mint: 'text-accent-mint',
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <Section
      id="projects"
      eyebrow="02 — Projects"
      title={
        <>
          Featured <span className="heading-gradient animate-gradient-x">case studies</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p, idx) => (
          <motion.button
            key={p.slug}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.06 * idx }}
            className="card-interactive group relative overflow-hidden p-6 text-left"
          >
            <div
              className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-radial blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accentRing[p.accent]}`}
            />

            <div className="flex items-center justify-between mb-3">
              <span className={`font-mono text-[11px] uppercase tracking-widest ${accentText[p.accent]}`}>
                Case study
              </span>
              <span className={`chip border-white/10 ${accentText[p.accent]} bg-white/[0.04]`}>
                {p.highlight}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-slate-50 leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 5).map((s) => (
                <span key={s} className="chip text-[11px]">
                  {s}
                </span>
              ))}
              {p.stack.length > 5 && (
                <span className="chip text-[11px]">+{p.stack.length - 5}</span>
              )}
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 group-hover:text-accent-cyan transition">
              Read case study
              <span aria-hidden>→</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>{active && <Modal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </Section>
  )
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center bg-ink-950/80 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto card p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 transition"
        >
          <X className="h-4 w-4" />
        </button>

        <div className={`font-mono text-[11px] uppercase tracking-widest ${accentText[project.accent]}`}>
          Case study
        </div>
        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-50">{project.title}</h3>
        <p className="mt-2 text-slate-400">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="chip text-[11px]">
              {s}
            </span>
          ))}
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-cyan/90 px-4 py-2 text-sm font-medium text-ink-950 hover:bg-accent-cyan transition shadow-glow-cyan"
        >
          Open live demo
          <ExternalLink className="h-4 w-4" />
        </a>

        <div className="mt-8 space-y-6">
          <Block label="Problem" body={<p>{project.problem}</p>} />
          <Block
            label="Approach"
            body={
              <ul className="space-y-2 list-disc list-inside marker:text-accent-cyan/70">
                {project.approach.map((a, i) => (
                  <li key={i} className="text-slate-300/90">
                    {a}
                  </li>
                ))}
              </ul>
            }
          />
          <Block
            label="Impact"
            body={
              <ul className="space-y-2 list-disc list-inside marker:text-accent-mint/70">
                {project.impact.map((a, i) => (
                  <li key={i} className="text-slate-300/90">
                    {a}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

function Block({ label, body }: { label: string; body: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan/80 mb-2">
        {label}
      </div>
      <div className="text-slate-300/90 leading-relaxed">{body}</div>
    </div>
  )
}

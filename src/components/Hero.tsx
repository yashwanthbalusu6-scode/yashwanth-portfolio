import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 px-3 py-1 text-xs font-mono text-accent-cyan/90"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          Open to AI/ML roles · UK · EU
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-50"
        >
          Hi, I'm <span className="heading-gradient animate-gradient-x">{PROFILE.name.split(' ')[0]}</span>.
          <br />
          I build <span className="heading-gradient animate-gradient-x">AI systems</span> that ship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-slate-300/90 leading-relaxed"
        >
          {PROFILE.title}. I take ML systems end-to-end — from messy real-world data and LLM prototypes to
          containerised, observable, GDPR-compliant production services on Azure, AWS and Hugging Face.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {PROFILE.taglineHighlights.map((t) => (
            <span key={t} className="chip-accent font-mono">
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent-cyan px-5 py-2.5 text-sm font-medium text-ink-950 hover:bg-accent-mint transition shadow-glow-cyan"
          >
            See my work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/[0.07] transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/[0.07] transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/[0.07] transition"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}

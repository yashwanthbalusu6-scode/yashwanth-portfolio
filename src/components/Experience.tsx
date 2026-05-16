import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { EXPERIENCE } from '../data/portfolio'
import Section from './Section'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title={
        <>
          Where I've <span className="heading-gradient animate-gradient-x">put ML into production</span>
        </>
      }
    >
      <div className="relative pl-6 sm:pl-10">
        {/* timeline rail */}
        <div className="absolute left-2 sm:left-4 top-1 bottom-1 w-px bg-gradient-to-b from-accent-cyan/60 via-white/10 to-transparent" />

        {EXPERIENCE.map((role, ri) => (
          <motion.div
            key={`${role.company}-${ri}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="relative mb-12"
          >
            <div className="absolute -left-[26px] sm:-left-[34px] top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ink-900 border border-accent-cyan/50 shadow-glow-cyan">
              <Briefcase className="h-2.5 w-2.5 text-accent-cyan" />
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">{role.role}</h3>
                <div className="text-slate-400 text-sm">
                  {role.company} · {role.location}
                </div>
              </div>
              <div className="font-mono text-xs text-accent-cyan/80">{role.period}</div>
            </div>

            <div className="mt-6 space-y-5">
              {role.engagements.map((eng, ei) => (
                <div key={`${eng.client}-${ei}`} className="card p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="text-slate-100 font-semibold">
                        {eng.project}
                        <span className="text-slate-500 font-normal"> — {eng.client}</span>
                      </div>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">{eng.dates}</div>
                  </div>

                  <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">{eng.summary}</p>

                  <ul className="mt-4 space-y-2 list-disc list-inside marker:text-accent-cyan/70">
                    {eng.bullets.map((b, i) => (
                      <li key={i} className="text-slate-300/90 text-sm leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {eng.stack.map((s) => (
                        <span key={s} className="chip text-[11px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

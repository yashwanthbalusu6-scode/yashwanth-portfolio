import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { EDUCATION } from '../data/portfolio'
import Section from './Section'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="04 — Education"
      title={
        <>
          Foundations in <span className="heading-gradient animate-gradient-x">computing & ML</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-5">
        {EDUCATION.map((e, i) => (
          <motion.div
            key={`${e.degree}-${i}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.07 * i }}
            className="card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-violet/10 border border-accent-violet/30 text-accent-violet">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                  <h3 className="text-lg font-semibold text-slate-50">{e.degree}</h3>
                  <span className="font-mono text-[11px] text-accent-violet/90">{e.period}</span>
                </div>
                <div className="text-slate-400 text-sm">
                  {e.school} · {e.location}
                </div>
                <p className="mt-3 text-sm text-slate-300/90 leading-relaxed">{e.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

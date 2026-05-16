import { motion } from 'framer-motion'
import { ABOUT } from '../data/portfolio'
import Section from './Section'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          I ship <span className="heading-gradient animate-gradient-x">production AI</span>, not demos.
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-5 text-slate-300/90 leading-relaxed">
          <p className="text-lg">{ABOUT.intro}</p>
          {ABOUT.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-4">
          {ABOUT.coreSkills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="card p-4"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan/80 mb-2">
                {s.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

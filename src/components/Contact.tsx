import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { PROFILE } from '../data/portfolio'
import Section from './Section'

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title={
        <>
          Let's build <span className="heading-gradient animate-gradient-x">something</span>.
        </>
      }
    >
      <div className="grid md:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 card p-7 sm:p-9"
        >
          <p className="text-slate-300/90 leading-relaxed">
            I'm currently open to <span className="text-slate-100 font-medium">AI/ML Engineer</span>,{' '}
            <span className="text-slate-100 font-medium">ML Engineer</span>, and{' '}
            <span className="text-slate-100 font-medium">Data Scientist</span> roles across the UK and EU
            (Graduate Route now, EU Blue Card eligible). The best way to reach me is email — I reply within a
            day.
          </p>

          <a
            href={`mailto:${PROFILE.email}?subject=Hello%20from%20your%20portfolio`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-cyan px-5 py-2.5 text-sm font-medium text-ink-950 hover:bg-accent-mint transition shadow-glow-cyan"
          >
            <Mail className="h-4 w-4" /> {PROFILE.email}
          </a>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="card-interactive flex items-center gap-3 p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <div className="text-slate-100 font-medium">LinkedIn</div>
                <div className="text-slate-500 truncate">/in/yashwanth-balusu</div>
              </div>
            </a>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="card-interactive flex items-center gap-3 p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-violet/10 border border-accent-violet/30 text-accent-violet">
                <Github className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <div className="text-slate-100 font-medium">GitHub</div>
                <div className="text-slate-500 truncate">/yashwanthbalusu6-scode</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 card p-7 space-y-4"
        >
          <div className="flex items-center gap-3 text-slate-300">
            <Mail className="h-4 w-4 text-accent-cyan" />
            <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition">
              {PROFILE.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Phone className="h-4 w-4 text-accent-cyan" />
            <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="hover:text-white transition">
              {PROFILE.phone}
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <MapPin className="h-4 w-4 text-accent-cyan" />
            {PROFILE.location}
          </div>

          <div className="glow-divider my-2" />

          <div className="text-xs text-slate-500 font-mono leading-relaxed">
            Open to onsite / hybrid / remote across the UK, Germany and the Netherlands. Sponsorship-eligible
            via Graduate Route (UK), EU Blue Card (DE), Highly Skilled Migrant (NL).
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

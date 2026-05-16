import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
}

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="section-title mb-3">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

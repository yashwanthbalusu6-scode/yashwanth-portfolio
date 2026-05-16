import { PROFILE } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="container-wide py-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-slate-500">
        <div className="font-mono">
          © {new Date().getFullYear()} {PROFILE.name}
        </div>
        <div className="font-mono text-xs">
          Built with React · TypeScript · Vite · Tailwind · Framer Motion
        </div>
      </div>
    </footer>
  )
}

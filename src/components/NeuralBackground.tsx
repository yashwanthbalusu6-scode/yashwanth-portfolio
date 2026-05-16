import { useEffect, useRef } from 'react'

/**
 * Lightweight interactive "neural network" background:
 * - Floating nodes (small dots)
 * - Edges that fade in/out as nodes drift past each other
 * - Subtle attraction toward the cursor
 *
 * Pure canvas; no dependencies; respects prefers-reduced-motion.
 */
export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    const density = Math.max(40, Math.floor((width * height) / 22000))
    const nodes = Array.from({ length: density }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.6,
    }))

    const mouse = { x: -9999, y: -9999, active: false }

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const handleLeave = () => {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    window.addEventListener('resize', handleResize)

    const MAX_DIST = 140

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx
          n.y += n.vy
          // gentle drift toward cursor
          if (mouse.active) {
            const dx = mouse.x - n.x
            const dy = mouse.y - n.y
            const d2 = dx * dx + dy * dy
            if (d2 < 220 * 220) {
              n.x += dx * 0.0008
              n.y += dy * 0.0008
            }
          }
          if (n.x < -10) n.x = width + 10
          if (n.x > width + 10) n.x = -10
          if (n.y < -10) n.y = height + 10
          if (n.y > height + 10) n.y = -10
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(94, 234, 212, 0.45)'
        ctx.fill()
      }

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < MAX_DIST) {
            const alpha = 1 - dist / MAX_DIST
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.18})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      if (mouse.active) {
        for (const n of nodes) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < 180) {
            const alpha = 1 - dist / 180
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha * 0.5})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

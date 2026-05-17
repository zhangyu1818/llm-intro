import { useEffect, useRef } from 'react'

import { useLocale } from '../i18n'
import content from './Hero.i18n'

export function Hero() {
  const t = content[useLocale()]
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {return}
    const ctx = canvas.getContext('2d')
    if (!ctx) {return}

    let w = canvas.width = canvas.offsetWidth * window.devicePixelRatio
    let h = canvas.height = canvas.offsetHeight * window.devicePixelRatio

    const dots: { c: string; r: number; vx: number; vy: number; x: number; y: number; }[] = []
    const colors = ['#ff5a3c', '#ffb020', '#4b8bff', '#3ea16d', '#8a5cff', '#ff7a9a']
    const count = 28
    for (let i = 0; i < count; i++) {
      dots.push({
        c: colors[i % colors.length],
        r: (4 + Math.random() * 10) * window.devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.3 * window.devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.3 * window.devicePixelRatio,
        x: Math.random() * w,
        y: Math.random() * h,
      })
    }

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < -20) {d.x = w + 20}
        if (d.x > w + 20) {d.x = -20}
        if (d.y < -20) {d.y = h + 20}
        if (d.y > h + 20) {d.y = -20}
        ctx.fillStyle = d.c
        ctx.globalAlpha = 0.55
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-28 pb-12 md:px-12 md:pt-32"
      id="hero"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40 blur-sm"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="font-mono text-xs tracking-[0.3em] text-ink/60 uppercase">
          {t.badge}
        </div>

        <h1 className="font-display mt-8 text-7xl leading-[0.88] font-extrabold tracking-tight md:text-[10rem]">
          {t.titleA}
          <span className="stroke-sketch ml-4 inline-block">{t.titleB}</span>
          <span className="text-ember">{t.titleDot}</span>
        </h1>

        <p className="font-display mt-10 max-w-3xl text-2xl leading-snug italic md:text-3xl">
          <span className="block">{t.leadLineA}</span>
          <span className="block">
            {t.leadLineB1}
            <span className="underline-sketch">{t.leadLineB2}</span>
          </span>
        </p>

        <div className="mt-14 flex flex-wrap gap-3 font-mono text-xs tracking-widest text-ink/70 uppercase">
          {t.chips.map((chip) => (
            <span key={chip} className="rounded-full border border-ink px-3 py-1.5">{chip}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-between">
        <div className="max-w-md text-sm text-ink/60 md:text-base">
          {t.bottomHint}
        </div>
        <a
          className="group flex items-center gap-3 font-mono text-xs tracking-widest text-ink uppercase"
          href="#ch-0"
        >
          <span>{t.ctaLabel}</span>
          <span className="animate-floaty inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink bg-sun transition group-hover:bg-ember">
            ↓
          </span>
        </a>
      </div>

      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-sun/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-96 w-96 rounded-full bg-rose/30 blur-3xl" />
    </section>
  )
}

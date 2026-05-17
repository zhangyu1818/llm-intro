import { useEffect, useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter05.i18n'

const sampleWords = [
  '春秋', '函数', '叙事', '机票', '漏斗', '年报',
  '唐诗', '递归', '结构', '攻略', '转化', '沟通',
  '典故', '链表', '伏笔', '签证', '曝光', '分层',
  '事件', '泛型', '节奏', '车站', '投放', '反馈',
  '朝代', '闭包', '意象', '住宿', '复购', '目标',
  '疆域', '并发', '留白', '预算', '裂变', '协作',
]

export function Chapter05() {
  const t = content[useLocale()]
  const [topic, setTopic] = useState(t.topics[0])
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {return}
    const ctx = canvas.getContext('2d')
    if (!ctx) {return}

    const dpr = window.devicePixelRatio
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
    }
    resize()

    const particles = Array.from({ length: 70 }).map((_, i) => ({
      alpha: 0.2 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.4 * dpr,
      vy: (Math.random() - 0.5) * 0.4 * dpr,
      word: sampleWords[i % sampleWords.length],
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }))

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${12 * dpr}px "JetBrains Mono", monospace`
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) {p.vx *= -1}
        if (p.y < 0 || p.y > canvas.height) {p.vy *= -1}
        ctx.fillStyle = `rgba(26, 22, 20, ${p.alpha})`
        ctx.fillText(p.word, p.x, p.y)
      }

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 180 * dpr)
      grad.addColorStop(0, `${topic.color}ee`)
      grad.addColorStop(1, 'rgba(253, 249, 241, 0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, 180 * dpr, 0, Math.PI * 2)
      ctx.fill()

      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [topic])

  return (
    <Section
      accent="--color-sun"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-5"
      index="06"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-5">
            <div>
              <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                {t.interactive.eyebrow}
              </div>
              <p className="mt-1 text-sm text-ink/70">
                {t.interactive.hint}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-card">
              <canvas ref={canvasRef} className="h-[360px] w-full" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-ink bg-paper text-center font-mono text-xs tracking-widest uppercase shadow-card">
                  <span>
                    {t.interactive.centerPrefix}
                    <span className="font-display mx-1 text-xl font-bold" style={{ color: topic.color }}>
                      {topic.label}
                    </span>
                    {t.interactive.centerSuffix}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {t.topics.map((tp) => (
                <button
                  key={tp.id}
                  className={cn(
                    'rounded-full border-2 border-ink px-4 py-2 text-sm font-medium transition-all',
                    topic.id === tp.id ? 'shadow-card -translate-y-0.5' : 'hover:-translate-y-0.5',
                  )}
                  style={{ background: topic.id === tp.id ? tp.color : 'transparent' }}
                  onClick={() => setTopic(tp)}
                >
                  # {tp.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter08.i18n'

type Tool = (typeof content)['zh']['tools'][number]

export function Chapter08() {
  const t = content[useLocale()]
  const [active, setActive] = useState<Set<string>>(new Set(['web']))

  const toggle = (id: string) => {
    setActive((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {next.delete(id)}
      else {next.add(id)}
      return next
    })
  }

  return (
    <Section
      accent="--color-leaf"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-8"
      index="11"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  {t.interactive.eyebrow}
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  {t.interactive.hint}
                </p>
              </div>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-ink bg-leaf/10 shadow-card">
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {t.tools.map((tool: Tool) => {
                  const isOn = active.has(tool.id)
                  const d = `M ${tool.x} ${tool.y} Q 50 50 50 50`
                  return (
                    <g key={tool.id}>
                      <path
                        className="transition-all duration-500"
                        d={d}
                        fill="none"
                        opacity={isOn ? 0.9 : 0.25}
                        stroke={isOn ? tool.color : '#1a1614'}
                        strokeDasharray={isOn ? '0' : '1 1'}
                        strokeWidth={isOn ? 0.6 : 0.25}
                      />
                      {isOn && (
                        <circle fill={tool.color} r="0.8">
                          <animateMotion dur="2s" path={d} repeatCount="indefinite" />
                        </circle>
                      )}
                    </g>
                  )
                })}
              </svg>

              <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-36 w-36 rounded-full border-2 border-ink bg-paper shadow-card">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl">🧠</div>
                    <div className="font-display text-lg font-bold">Model</div>
                    <div className="font-mono text-[9px] tracking-widest text-ink/55 uppercase">
                      {t.interactive.modelLabel}
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-6 rotate-6 rounded-full border-2 border-ink bg-sun px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase shadow-paper">
                    MCP
                  </div>
                </div>
              </div>

              <div className="absolute right-3 bottom-3 z-20 rounded-xl border-2 border-ink bg-paper px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase shadow-paper">
                {t.interactive.socketBadge}
              </div>

              {t.tools.map((tool: Tool) => {
                const isOn = active.has(tool.id)
                return (
                  <button
                    key={tool.id}
                    className={cn(
                      'group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1',
                      isOn && 'z-10',
                    )}
                    style={{ left: `${tool.x}%`, top: `${tool.y}%` }}
                    onClick={() => toggle(tool.id)}
                  >
                    <span
                      className={cn(
                        'flex h-14 w-14 origin-bottom items-center justify-center rounded-full border-2 border-ink text-2xl shadow-paper transition-transform',
                        isOn ? 'scale-110 shadow-card' : 'bg-paper group-hover:-translate-y-0.5',
                      )}
                      style={{ background: isOn ? tool.color : undefined }}
                    >
                      {tool.icon}
                    </span>
                    <span className="relative z-10 rounded-full border border-ink bg-paper px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                      {tool.label}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="rounded-2xl border-2 border-ink bg-paper p-4">
              <div className="mb-2 font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                {t.interactive.reachLabel}
              </div>
              <div className="flex flex-wrap gap-2">
                {active.size === 0 ? (
                  <span className="text-sm text-ink/50">{t.interactive.noToolMsg}</span>
                ) : (
                  Array.from(active).map((id) => {
                    const tool = t.tools.find((x: Tool) => x.id === id)!
                    return (
                      <span
                        key={id}
                        className="rounded-full border-2 border-ink px-3 py-1 text-sm font-medium"
                        style={{ background: tool.color, color: '#fdf9f1' }}
                      >
                        {tool.icon} {tool.value}
                      </span>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

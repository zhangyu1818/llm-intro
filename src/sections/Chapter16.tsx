import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter16.i18n'

type Scene = (typeof content)['zh']['scenes'][number]
type Takeaway = (typeof content)['zh']['panel']['takeaways'][number]

export function Chapter16() {
  const t = content[useLocale()]
  const [active, setActive] = useState(t.scenes[0].id)
  const scene = t.scenes.find((s: Scene) => s.id === active)!

  return (
    <Section
      accent="--color-rose"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-16"
      index="17"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-3">
            <div>
              <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                {t.panel.interactiveLabel}
              </div>
              <p className="mt-1 text-sm text-ink/70">
                {t.panel.interactiveHint}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {t.scenes.map((s: Scene) => {
                const on = s.id === active
                return (
                  <button
                    key={s.id}
                    className={cn(
                      'flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1.5 text-xs font-semibold transition-all',
                      on ? 'bg-ink text-paper shadow-card' : 'bg-paper text-ink/70 hover:-translate-y-0.5',
                    )}
                    onClick={() => setActive(s.id)}
                  >
                    <span className="text-sm leading-none">{s.icon}</span>
                    <span>{s.short}</span>
                  </button>
                )
              })}
            </div>

            <div className={cn('rounded-3xl border-2 p-4 shadow-card', scene.accent)}>
              <div className="flex items-start gap-3">
                <span className="text-3xl leading-none">{scene.icon}</span>
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                    {t.panel.sceneLabel}
                  </div>
                  <div className="font-display text-lg leading-tight font-bold">
                    {scene.title}
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-ink/15 bg-paper/80 px-3 py-2">
                <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                  {t.panel.doingLabel}
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-ink/85">{scene.doing}</p>
              </div>

              <div className="mt-3">
                <div className="mb-1.5 font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                  {t.panel.toolsLabel}
                </div>
                <div className="space-y-1.5">
                  {scene.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-xl border-2 border-ink bg-paper px-3 py-1.5"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-display text-[13px] font-bold">{tool.name}</span>
                        <span className="font-mono text-[9px] tracking-widest text-ink/50 uppercase">
                          {tool.maker}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[11px] leading-snug text-ink/70">
                        {tool.oneliner}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-ink bg-cream px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                {t.panel.takeawaysLabel}
              </div>
              <ol className="mt-1.5 space-y-0.5 text-[11.5px] leading-snug text-ink/80">
                {t.panel.takeaways.map((item: Takeaway, i: number) => (
                  <li key={i}>
                    {item.prefix}<strong>{item.strong}</strong>{item.suffix}
                    {'strong2' in item && item.strong2 != null && (
                      <><strong>{item.strong2}</strong>{item.suffix2}</>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

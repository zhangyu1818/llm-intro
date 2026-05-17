import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import content from './Chapter04.i18n'

export function Chapter04() {
  const t = content[useLocale()]
  const [tidy, setTidy] = useState(false)

  return (
    <Section
      accent="--color-leaf"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-4"
      index="05"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  {t.interactive.eyebrow}
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  {t.interactive.hint}
                </p>
              </div>
              <button
                className="rounded-full border-2 border-ink bg-leaf px-5 py-1.5 font-mono text-xs tracking-widest text-paper uppercase transition hover:-translate-y-0.5"
                onClick={() => {
                  setTidy((v) => !v)
                }}
              >
                {tidy ? t.interactive.scatterBtn : t.interactive.tidyBtn}
              </button>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl border-2 border-ink bg-cream/60 shadow-card">
              <div className="relative h-[520px]">
                {t.notes.map((n, i) => {
                  if (!tidy) {
                    return (
                      <div
                        key={n.id}
                        className="absolute w-40 rounded-lg border-2 border-ink p-3 text-sm shadow-paper transition-all duration-700 ease-out"
                        style={{
                          background: n.color,
                          left: `${n.x}%`,
                          top: `${n.y}%`,
                          transform: `rotate(${n.rot}deg)`,
                        }}
                      >
                        {n.raw}
                      </div>
                    )
                  }

                  if (!n.keep) {
                    return (
                      <div
                        key={n.id}
                        className="absolute w-36 rounded-lg border-2 border-ink p-3 text-xs opacity-20 blur-[1px] transition-all duration-700"
                        style={{
                          background: n.color,
                          left: `${n.x}%`,
                          top: `${110 + i * 2}%`,
                          transform: `rotate(${n.rot * 2}deg)`,
                        }}
                      >
                        {n.raw}
                      </div>
                    )
                  }

                  const idx = t.buckets.indexOf(n.bucket!)
                  return (
                    <div
                      key={n.id}
                      className="absolute w-[78%] rounded-xl border-2 border-ink bg-paper p-3 shadow-paper transition-all duration-700 ease-out"
                      style={{
                        left: '10%',
                        top: `${6 + idx * 22}%`,
                        transform: 'rotate(-0.6deg)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink bg-leaf font-mono text-xs font-bold text-paper">
                          {idx + 1}
                        </span>
                        <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                          {n.bucket}
                        </div>
                      </div>
                      <div className="mt-1.5 pl-10 text-base font-medium text-ink">
                        {n.distilled}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-ink/15 bg-paper px-3 py-2">
                <span className="font-mono tracking-widest text-ink/60 uppercase">{t.interactive.beforeLabel}</span>
                <p className="mt-1 text-sm">{t.interactive.beforeText}</p>
              </div>
              <div className="rounded-xl border border-ink/15 bg-leaf/15 px-3 py-2">
                <span className="font-mono tracking-widest text-ink/60 uppercase">{t.interactive.afterLabel}</span>
                <p className="mt-1 text-sm">{t.interactive.afterText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

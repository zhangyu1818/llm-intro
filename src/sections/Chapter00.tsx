import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter00.i18n'

type Material = (typeof content)['zh']['materials'][number]

export function Chapter00() {
  const t = content[useLocale()]
  const [picked, setPicked] = useState<Material | null>(null)

  return (
    <Section
      accent="--color-ember"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-0"
      index="01"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24">
            <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
              {t.interactive.eyebrow}
            </div>
            <p className="mt-2 mb-6 text-base text-ink/70">
              {t.interactive.hint}
            </p>

            <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-cream p-6 shadow-card">
              <div className="bg-dots pointer-events-none absolute inset-0 opacity-50" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-paper text-2xl">
                    🙂
                  </div>
                  <div>
                    <div className="font-semibold">{t.interactive.personaName}</div>
                    <div className="text-xs text-ink/60">{t.interactive.personaSub}</div>
                  </div>
                </div>

                <div className="relative min-h-[180px] rounded-2xl border-2 border-dashed border-ink/40 bg-paper/80 p-4">
                  <div className="mb-2 font-mono text-[10px] tracking-widest text-ink/50 uppercase">
                    {t.interactive.deskLabel}
                  </div>
                  {picked ? (
                    <div
                      key={picked.id}
                      className={cn(picked.color, 'rotate-tilt-3 rounded-xl border-2 border-ink px-4 py-3 transition-all duration-300')}
                    >
                      <div className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                        {picked.tag}
                      </div>
                      <div className="mt-1 text-sm font-medium text-ink">{picked.preview}</div>
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[100px] items-center justify-center text-sm text-ink/45">
                      {t.interactive.deskEmpty}
                    </div>
                  )}
                </div>

                <div className="relative mt-5 rounded-2xl border-2 border-ink bg-paper p-4">
                  <div className="absolute -top-2 left-4 bg-paper px-2 font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                    {t.interactive.answerLabel}
                  </div>
                  <p
                    key={picked?.id ?? 'empty'}
                    className="mt-1 text-[15px] leading-relaxed text-ink transition-opacity"
                  >
                    {picked?.answer ?? t.interactive.answerEmpty}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {t.materials.map((m) => (
                <button
                  key={m.id}
                  className={cn(
                    'group relative rounded-xl border-2 border-ink px-3 py-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-card',
                    m.color,
                    picked?.id === m.id && 'shadow-card',
                  )}
                  onClick={() => setPicked(m)}
                >
                  <div className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                    {m.tag}
                  </div>
                  <div className="mt-1 line-clamp-2 text-xs text-ink">{m.preview}</div>
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

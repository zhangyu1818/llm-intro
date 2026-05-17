import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter06.i18n'

type Twin = (typeof content)['zh']['twins'][number]

export function Chapter06() {
  const t = content[useLocale()]
  const [picked, setPicked] = useState<Twin>(t.twins[0])
  const [revealed, setRevealed] = useState(false)

  const choose = (twin: Twin) => {
    setPicked(twin)
    setRevealed(false)
  }

  return (
    <Section
      accent="--color-ember"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-6"
      index="08"
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

            <div className="grid gap-2">
              {t.twins.map((twin) => (
                <button
                  key={twin.id}
                  className={cn(
                    'group flex items-center justify-between gap-3 rounded-xl border-2 border-ink bg-paper px-4 py-3 text-left transition-all hover:-translate-y-0.5',
                    picked.id === twin.id && 'shadow-card',
                  )}
                  onClick={() => choose(twin)}
                >
                  <span className="text-sm font-medium">{twin.question}</span>
                  <span className="shrink-0 rounded-full border border-ink bg-ember/20 px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                    {twin.topic}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-card">
              <div className="flex items-center justify-between border-b-2 border-ink bg-ember/15 px-5 py-3">
                <div className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                  {t.interactive.answerLabel}
                </div>
                <button
                  className="rounded-full border-2 border-ink bg-paper px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition hover:bg-ember hover:text-paper"
                  onClick={() => setRevealed((v) => !v)}
                >
                  {revealed ? t.interactive.backBtn : t.interactive.flipBtn}
                </button>
              </div>

              <div className="relative min-h-[200px] px-5 py-5">
                {!revealed ? (
                  <div>
                    <div className="mb-2 font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                      {t.interactive.plausibleTag}
                    </div>
                    <p className="leading-relaxed text-ink">{picked.plausible}</p>
                    <div className="mt-4 rounded-xl border border-ink/20 bg-paper/70 px-3 py-2 text-xs text-ink/65">
                      {t.interactive.tipNote}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-2 font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                      {t.interactive.truthTag}
                    </div>
                    <p className="leading-relaxed text-ink">{picked.truth}</p>
                    <div className="mt-4 rounded-xl border-2 border-ember bg-ember/15 px-3 py-2 text-sm">
                      ⚠ {picked.hint}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="mb-3 font-mono text-xs tracking-widest text-ink/55 uppercase">
                {t.interactive.flagsLabel}
              </div>
              <div className="flex flex-wrap gap-2">
                {t.flags.map((p) => (
                  <span
                    key={p.label}
                    className="rounded-full border-2 border-ink px-3 py-1.5 text-sm font-medium"
                    style={{ background: p.color, color: '#fdf9f1' }}
                  >
                    ⚠ {p.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter01.i18n'

type Turn = (typeof content)['zh']['turns'][number]

export function Chapter01() {
  const t = content[useLocale()]
  const [step, setStep] = useState(1)

  const visibleChat: Turn[] = t.turns.slice(0, step)
  const userTurnCount = Math.ceil(step / 2)

  const reset = () => {
    setStep(1)
  }
  const next = () => {
    setStep((s) => Math.min(s + 1, t.turns.length))
  }

  return (
    <Section
      accent="--color-rose"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-1"
      index="02"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  {t.interactive.eyebrow}
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  {t.interactive.turnLabel(userTurnCount)}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:bg-cream"
                  onClick={reset}
                >
                  {t.interactive.resetBtn}
                </button>
                <button
                  className="rounded-full border-2 border-ink bg-rose px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={step >= t.turns.length}
                  onClick={next}
                >
                  {t.interactive.nextBtn}
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border-2 border-ink bg-paper p-4 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                    {t.interactive.chatLabel}
                  </div>
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-ember" />
                    <span className="h-2 w-2 rounded-full bg-sun" />
                    <span className="h-2 w-2 rounded-full bg-leaf" />
                  </div>
                </div>
                <div className="flex max-h-[320px] min-h-[260px] flex-col gap-2 overflow-y-auto">
                  {visibleChat.map((turn, i) => (
                    <div
                      key={i}
                      className={cn(
                        'max-w-[85%] rounded-2xl border border-ink/10 px-3 py-2 text-sm',
                        turn.role === 'user' ? 'ml-auto bg-sky/20' : 'mr-auto bg-cream',
                      )}
                    >
                      {turn.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rotate-tilt-2 rounded-3xl border-2 border-ink bg-ember/95 p-4 text-paper shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-mono text-[10px] tracking-widest uppercase">
                    {t.interactive.rawLabel}
                  </div>
                  <div className="font-mono text-[10px] uppercase">{t.interactive.rawTag}</div>
                </div>
                <div className="max-h-[320px] min-h-[260px] space-y-1.5 overflow-y-auto font-mono text-[11px] leading-relaxed">
                  {visibleChat.length === 0 && (
                    <div className="opacity-60">{t.interactive.noInput}</div>
                  )}
                  {visibleChat.map((turn, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="shrink-0 opacity-60">
                        {turn.role === 'user' ? '[user]' : '[assistant]'}
                      </span>
                      <span>{turn.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink/15 bg-cream/60 p-4 text-sm text-ink/80">
              <span className="font-semibold">{t.interactive.tipPrefix}</span>{' '}
              {t.interactive.tip}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

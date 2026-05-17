import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter07.i18n'

export function Chapter07() {
  const t = content[useLocale()]
  const [step, setStep] = useState(0)

  const reset = () => setStep(0)
  const answer = t.answers[step]
  const done = step === t.answers.length - 1

  return (
    <Section
      accent="--color-sky"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-7"
      index="10"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-4">
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
                className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
                disabled={step === 0}
                onClick={reset}
              >
                {t.interactive.resetBtn}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {t.slots.map((s, i) => {
                const filled = i < step
                const isNext = i === step
                const locked = i > step
                return (
                  <button
                    key={s.id}
                    className={cn(
                      'relative rounded-xl border-2 border-ink px-2.5 py-2 text-left transition-all',
                      filled && 'shadow-card',
                      isNext && 'animate-pulse hover:-translate-y-0.5 cursor-pointer',
                      locked && 'cursor-not-allowed opacity-30 saturate-0',
                    )}
                    disabled={!isNext}
                    style={{ background: filled ? s.color : isNext ? '#fdf9f1' : '#eeeae1' }}
                    onClick={() => isNext && setStep(step + 1)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold">{s.label}</span>
                      <span
                        className={cn(
                          'flex h-4 w-4 items-center justify-center rounded-full border border-ink font-mono text-[10px]',
                          filled && 'bg-paper',
                        )}
                      >
                        {filled ? '✓' : isNext ? '→' : ''}
                      </span>
                    </div>
                    <div className={cn('mt-0.5 text-[10.5px] leading-snug', filled ? 'text-ink/80' : 'text-ink/55')}>
                      {s.hint}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="rounded-2xl border border-ink/20 bg-cream/60 px-3 py-2 text-xs text-ink/70">
              <span className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                {t.interactive.stepLabel(step)}
              </span>{' '}
              {answer.delta}
            </div>

            <div
              className={cn(
                'rounded-3xl border-2 border-ink p-5 shadow-card transition-all',
                done ? 'bg-sky/20' : 'bg-ember/10',
              )}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                  {t.interactive.answerLabel}
                </div>
                <span
                  className={cn(
                    'rounded-full border-2 border-ink px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase',
                    done ? 'bg-paper' : 'bg-ember text-paper',
                  )}
                >
                  {done ? t.interactive.statusDone : step === 0 ? t.interactive.statusBlank : t.interactive.statusBetter}
                </span>
              </div>
              <pre className="font-display max-h-[220px] overflow-auto text-[13px] leading-relaxed whitespace-pre-wrap text-ink/90">
                {answer.text}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

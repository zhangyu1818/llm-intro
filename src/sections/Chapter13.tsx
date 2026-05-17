import { useEffect, useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter13.i18n'

type StepKind = 'act' | 'done' | 'error' | 'observe' | 'think'

const KIND_ICON: Record<StepKind, string> = {
  act: '🔧',
  done: '✅',
  error: '⚠️',
  observe: '👁',
  think: '🧠',
}

export function Chapter13() {
  const t = content[useLocale()]
  const [mode, setMode] = useState<'astray' | 'normal'>('normal')
  const [step, setStep] = useState(0)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const steps = mode === 'normal' ? t.normalSteps : t.astraySteps
  const isFinished = step >= steps.length
  const visibleSteps = steps.slice(0, step)

  useEffect(() => {
    const el = scrollRef.current
    if (!el || step === 0) {return}
    requestAnimationFrame(() => {
      el.scrollTo({ behavior: 'smooth', top: el.scrollHeight })
    })
  }, [step, mode])

  const handleModeChange = (next: 'astray' | 'normal') => {
    if (next === mode) {return}
    setMode(next)
    setStep(0)
  }

  const handleNext = () => {
    setStep((s) => Math.min(s + 1, steps.length))
  }

  const handleReset = () => {
    setStep(0)
  }

  return (
    <Section
      accent="--color-leaf"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-13"
      index="14"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-4 md:space-y-5">
            <div className="rounded-2xl border-2 border-ink bg-leaf/20 px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                {t.interactive.taskLabel}
              </div>
              <p className="mt-1 text-sm font-semibold text-ink/90">
                {t.interactive.task}
              </p>
            </div>

            <div className="flex rounded-2xl border-2 border-ink bg-paper p-1">
              {(['normal', 'astray'] as const).map((m) => (
                <button
                  key={m}
                  className={cn(
                    'flex-1 rounded-xl py-2 font-mono text-xs tracking-widest transition-all duration-200 uppercase',
                    mode === m
                      ? m === 'normal'
                        ? 'bg-leaf text-ink shadow-sm'
                        : 'bg-ember text-paper shadow-sm'
                      : 'text-ink/50 hover:text-ink/80',
                  )}
                  onClick={() => handleModeChange(m)}
                >
                  {m === 'normal' ? t.interactive.modeNormal : t.interactive.modeAstray}
                </button>
              ))}
            </div>

            <div
              ref={scrollRef}
              className="max-h-[360px] min-h-[160px] overflow-y-auto rounded-2xl border-2 border-ink bg-paper p-4"
            >
              {step === 0 ? (
                <div className="flex h-[140px] flex-col items-center justify-center gap-2 text-center">
                  <div className="text-3xl opacity-60">🎬</div>
                  <p className="font-mono text-[11px] tracking-widest text-ink/45 uppercase">
                    {t.interactive.idleMsg}
                  </p>
                  <p className="max-w-[220px] text-xs leading-relaxed text-ink/55 whitespace-pre-line">
                    {t.interactive.idleHint}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {visibleSteps.map((s, i) => {
                    const isCurrent = i === step - 1
                    const isAstrayAlert = mode === 'astray' && !!(s as { isAlert?: boolean }).isAlert
                    return (
                      <div
                        key={`${mode}-${i}`}
                        className={cn(
                          'flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300',
                          isAstrayAlert ? 'border-ember/60 bg-ember/10' : 'border-leaf/60 bg-leaf/10',
                          isCurrent && 'shadow-paper',
                        )}
                      >
                        <span className="mt-px shrink-0 text-lg leading-none">
                          {KIND_ICON[s.kind]}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div
                            className={cn(
                              'font-mono text-[10px] tracking-widest uppercase',
                              isAstrayAlert ? 'text-ember' : 'text-leaf',
                            )}
                          >
                            {t.kindLabel[s.kind]}
                          </div>
                          <p className="mt-0.5 text-sm leading-snug text-ink/90">
                            {s.label}
                            {isAstrayAlert && (
                              <span className="ml-1.5 text-ember">
                                {t.interactive.astrayAlertSuffix}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {isFinished && (
              <div
                className={cn(
                  'rounded-xl border-2 px-4 py-3 text-sm',
                  mode === 'normal'
                    ? 'border-leaf/60 bg-leaf/15 text-ink/80'
                    : 'border-ember/60 bg-ember/15 text-ink/80',
                )}
              >
                {mode === 'normal' ? (
                  <p>{t.interactive.doneNormal}</p>
                ) : (
                  <>
                    <p className="font-semibold text-ember">
                      {t.interactive.doneAstrayTitle}
                    </p>
                    <p className="mt-1">
                      {t.interactive.doneAstrayBody}
                    </p>
                  </>
                )}
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button
                className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
                disabled={step === 0}
                onClick={handleReset}
              >
                {t.interactive.resetBtn}
              </button>
              {!isFinished && (
                <button
                  className="rounded-full border-2 border-ink bg-leaf px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:-translate-y-0.5"
                  onClick={handleNext}
                >
                  {t.interactive.nextBtn}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

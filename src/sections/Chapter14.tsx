import { useEffect, useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter14.i18n'

type RunStep =
  | (typeof content)['zh']['looseSteps'][number]
  | (typeof content)['zh']['strictSteps'][number]

export function Chapter14() {
  const t = content[useLocale()]
  const [step, setStep] = useState(0)
  const [running, setRunning] = useState(false)
  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {clearTimeout(timerRef.current)}
    }
  }, [])

  useEffect(() => {
    if (!running) {return}
    if (step >= t.looseSteps.length) {
      setRunning(false)
      return
    }
    timerRef.current = setTimeout(() => {
      setStep((s) => s + 1)
    }, 900)
    return () => {
      if (timerRef.current) {clearTimeout(timerRef.current)}
    }
  }, [running, step, t.looseSteps.length])

  const handleStart = () => {
    if (running) {return}
    setStep(0)
    setRunning(true)
  }

  const handleReset = () => {
    if (timerRef.current) {clearTimeout(timerRef.current)}
    setRunning(false)
    setStep(0)
  }

  const total = t.looseSteps.length
  const isDone = step >= total && !running

  return (
    <Section
      accent="--color-ember"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-14"
      index="15"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-3">
            <div className="rounded-2xl border-2 border-ink bg-ember/15 px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                {t.interactive.taskLabel}
              </div>
              <p className="mt-1 text-sm font-semibold text-ink/90">
                {t.interactive.task}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="flex-1 rounded-full border-2 border-ink bg-ember px-4 py-2 font-mono text-xs font-bold tracking-widest text-paper uppercase transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
                disabled={running}
                onClick={handleStart}
              >
                {t.interactive.startBtn(running, isDone)}
              </button>
              <button
                className="rounded-full border-2 border-ink bg-paper px-4 py-2 font-mono text-xs tracking-widest uppercase transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
                disabled={!running && step === 0}
                onClick={handleReset}
              >
                {t.interactive.resetBtn}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <ScenarioColumn
                badge={t.interactive.looseBadge}
                step={step}
                steps={t.looseSteps}
                subtitle={t.interactive.looseSubtitle}
                title={t.interactive.looseTitle}
                variant="loose"
              />
              <ScenarioColumn
                badge={t.interactive.strictBadge}
                step={step}
                steps={t.strictSteps}
                subtitle={t.interactive.strictSubtitle}
                title={t.interactive.strictTitle}
                variant="strict"
              />
            </div>

            {isDone && (
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border-2 border-ember bg-ember/15 px-3 py-2 text-[11px] leading-snug text-ink/85">
                  <span className="font-semibold text-ember">{t.interactive.doneLooseTitle}</span>
                  <div className="mt-0.5">{t.interactive.doneLooseBody}</div>
                </div>
                <div className="rounded-xl border-2 border-leaf bg-leaf/20 px-3 py-2 text-[11px] leading-snug text-ink/85">
                  <span className="font-semibold text-leaf">{t.interactive.doneStrictTitle}</span>
                  <div className="mt-0.5">{t.interactive.doneStrictBody}</div>
                </div>
              </div>
            )}

            <div className="rounded-xl border border-ink/15 bg-cream/60 px-3 py-2 text-[11px] leading-relaxed text-ink/70">
              {t.interactive.footNote}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

interface ColumnProps {
  badge: string
  step: number
  steps: RunStep[]
  subtitle: string
  title: string
  variant: 'loose' | 'strict'
}

function ScenarioColumn({ badge, step, steps, subtitle, title, variant }: ColumnProps) {
  const headTone = variant === 'loose' ? 'bg-ember/20 border-ember' : 'bg-leaf/20 border-leaf'
  const badgeTone =
    variant === 'loose' ? 'bg-ember text-paper' : 'bg-leaf text-paper'

  return (
    <div className="rounded-2xl border-2 border-ink bg-paper p-3">
      <div className={cn('mb-2 flex items-center justify-between rounded-xl border-2 px-2.5 py-1.5', headTone)}>
        <div>
          <div className="font-display text-[13px] leading-tight font-bold">{title}</div>
          <div className="font-mono text-[9px] tracking-widest text-ink/55 uppercase">
            {subtitle}
          </div>
        </div>
        <span className={cn('rounded-full px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase', badgeTone)}>
          {badge}
        </span>
      </div>

      <div className="space-y-1">
        {steps.map((s, i) => {
          const active = i < step
          return (
            <div
              key={i}
              className={cn(
                'flex items-start gap-1.5 rounded-md border px-2 py-1.5 transition-all duration-300',
                active
                  ? s.tone === 'danger'
                    ? 'border-ember/70 bg-ember/10'
                    : s.tone === 'blocked'
                      ? 'border-sun/70 bg-sun/15'
                      : s.tone === 'ok'
                        ? 'border-leaf/70 bg-leaf/15'
                        : 'border-ink/20 bg-cream/50'
                  : 'border-ink/10 bg-cream/30 opacity-40',
              )}
            >
              <span className="shrink-0 text-sm leading-none">{active ? s.icon : '·'}</span>
              <span
                className={cn(
                  'flex-1 text-[11px] leading-snug',
                  active
                    ? s.tone === 'danger'
                      ? 'text-ember'
                      : s.tone === 'blocked'
                        ? 'text-ink/85'
                        : s.tone === 'ok'
                          ? 'text-ink/90'
                          : 'text-ink/80'
                    : 'text-ink/40',
                )}
              >
                {active ? s.label : '—'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

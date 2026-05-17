import { useEffect, useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter15.i18n'

type Phase = 'dispatching' | 'done' | 'idle' | 'merging' | 'running'

export function Chapter15() {
  const t = content[useLocale()]
  const [phase, setPhase] = useState<Phase>('idle')
  const [progress, setProgress] = useState<Record<string, number>>({})
  const [done, setDone] = useState<Set<string>>(new Set())
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([])

  const clearAll = () => {
    timersRef.current.forEach(clearTimeout)
    intervalsRef.current.forEach(clearInterval)
    timersRef.current = []
    intervalsRef.current = []
  }

  useEffect(() => {
    return () => clearAll()
  }, [])

  useEffect(() => {
    if (phase !== 'running') {return}

    t.helpers.forEach((h) => {
      const steps = 30
      const tick = h.duration / steps
      let i = 0
      const iv = setInterval(() => {
        i++
        const pct = Math.min((i / steps) * 100, 100)
        setProgress((prev) => ({ ...prev, [h.id]: pct }))
        if (i >= steps) {clearInterval(iv)}
      }, tick)
      intervalsRef.current.push(iv)

      const timer = setTimeout(() => {
        setDone((prev) => new Set([...prev, h.id]))
      }, h.duration)
      timersRef.current.push(timer)
    })

    const maxDur = Math.max(...t.helpers.map((h) => h.duration))
    const mergeT = setTimeout(() => setPhase('merging'), maxDur + 400)
    const doneT = setTimeout(() => setPhase('done'), maxDur + 1600)
    timersRef.current.push(mergeT, doneT)
  }, [phase, t.helpers])

  const handleStart = () => {
    clearAll()
    setProgress({})
    setDone(new Set())
    setPhase('dispatching')
    const timer = setTimeout(() => setPhase('running'), 600)
    timersRef.current.push(timer)
  }

  const handleReset = () => {
    clearAll()
    setProgress({})
    setDone(new Set())
    setPhase('idle')
  }

  const isBusy = phase === 'dispatching' || phase === 'running' || phase === 'merging'
  const isDone = phase === 'done'

  return (
    <Section
      accent="--color-sky"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-15"
      index="16"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-3">
            <div className="rounded-2xl border-2 border-ink bg-sky/20 px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                {t.interactive.taskLabel}
              </div>
              <p className="mt-1 text-sm font-semibold text-ink/90">
                {t.interactive.task}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="flex-1 rounded-full border-2 border-ink bg-sky px-4 py-2 font-mono text-xs font-bold tracking-widest text-paper uppercase transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
                disabled={isBusy}
                onClick={handleStart}
              >
                {t.interactive.startBtn(isBusy, isDone)}
              </button>
              <button
                className="rounded-full border-2 border-ink bg-paper px-4 py-2 font-mono text-xs tracking-widest uppercase transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
                disabled={phase === 'idle'}
                onClick={handleReset}
              >
                {t.interactive.resetBtn}
              </button>
            </div>

            <div className="flex items-center gap-2 rounded-xl border-2 border-ink bg-cream/70 px-3 py-2">
              <span className="text-lg leading-none">🧠</span>
              <span className="flex-1 font-mono text-[11px] tracking-widest text-ink/75 uppercase">
                {phase === 'idle' && t.interactive.phaseIdle}
                {phase === 'dispatching' && t.interactive.phaseDispatching}
                {phase === 'running' && t.interactive.phaseRunning(t.helpers.length - done.size)}
                {phase === 'merging' && t.interactive.phaseMerging}
                {phase === 'done' && t.interactive.phaseDone}
              </span>
              {(phase === 'dispatching' || phase === 'running' || phase === 'merging') && (
                <span className="flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-ember" />
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {t.helpers.map((h) => {
                const pct = progress[h.id] ?? 0
                const isHelperDone = done.has(h.id)
                const isRunning = (phase === 'running' || phase === 'merging' || phase === 'done') && !isHelperDone
                const isIdle = phase === 'idle' || phase === 'dispatching'

                return (
                  <div
                    key={h.id}
                    className={cn(
                      'relative rounded-2xl border-2 border-ink p-3 transition-all duration-300',
                      isHelperDone ? h.tone : 'bg-paper',
                      isIdle && 'opacity-80',
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg leading-none">{h.icon}</span>
                        <div>
                          <div className="text-[12px] font-semibold leading-tight">{h.label}</div>
                          <div className="font-mono text-[9px] tracking-widest text-ink/50 uppercase">
                            {h.duty}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm leading-none">
                        {isHelperDone ? '✅' : isRunning ? '⏳' : '💤'}
                      </span>
                    </div>

                    <div className="mt-2 h-1 overflow-hidden rounded-full border border-ink/15 bg-cream">
                      <div
                        className="h-full bg-sky transition-all duration-200"
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <div className="mt-2 min-h-[44px] rounded-md border border-dashed border-ink/25 bg-paper/70 px-2 py-1 font-mono text-[10px] leading-snug whitespace-pre-line text-ink/70">
                      {isHelperDone ? h.summary : isRunning ? t.interactive.helperRunning : t.interactive.helperIdle}
                    </div>
                  </div>
                )
              })}
            </div>

            <div
              className={cn(
                'rounded-2xl border-2 border-ink p-3 transition-all duration-500',
                phase === 'done' ? 'bg-leaf/20' : phase === 'merging' ? 'bg-sun/25' : 'bg-paper',
              )}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                  {t.interactive.reportLabel}
                </div>
                {phase === 'merging' && (
                  <span className="animate-pulse font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                    {t.interactive.mergingLabel}
                  </span>
                )}
              </div>
              <pre
                className={cn(
                  'mt-2 min-h-[110px] overflow-auto rounded-md border border-ink/20 bg-paper px-3 py-2 font-mono text-[11px] leading-relaxed whitespace-pre-wrap transition-opacity duration-500',
                  phase === 'done' ? 'text-ink/90 opacity-100' : 'text-ink/35 opacity-70',
                )}
              >
                {phase === 'done' ? t.finalReport : t.interactive.reportPlaceholder}
              </pre>
            </div>

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

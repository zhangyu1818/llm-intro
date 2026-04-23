import { useEffect, useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

type StepKind = 'think' | 'act' | 'observe' | 'done' | 'error'

interface Step {
  kind: StepKind
  label: string
  isAlert?: boolean
}

const NORMAL_STEPS: Step[] = [
  { kind: 'think', label: '先看看这个文件长什么样' },
  { kind: 'act', label: '打开 sales_20260421.csv' },
  { kind: 'observe', label: '3 列：日期 / 产品 / 金额。共 1420 行。' },
  { kind: 'think', label: '要按产品分组求和' },
  { kind: 'act', label: '分组汇总' },
  { kind: 'observe', label: '12 个产品，合计 183 万' },
  { kind: 'think', label: '写一份日报，按金额排序' },
  { kind: 'act', label: '生成 report.md' },
  { kind: 'done', label: '完成：日报已保存' },
]

const ASTRAY_STEPS: Step[] = [
  { kind: 'think', label: '先看看这个文件长什么样' },
  { kind: 'act', label: '打开 sales_20260421.csv' },
  { kind: 'observe', label: '3 列：日期 / 产品 / 数量', isAlert: true },
  { kind: 'think', label: '按产品分组求和"数量"' },
  { kind: 'act', label: '分组汇总数量' },
  { kind: 'observe', label: '合计 3820（它以为是件数）' },
  { kind: 'think', label: '写一份"销量日报"（实际数据是金额）' },
  { kind: 'act', label: '生成 report.md' },
  { kind: 'done', label: '它报告：完成。—— 但内容方向完全错了。' },
]

const KIND_ICON: Record<StepKind, string> = {
  think: '🧠',
  act: '🔧',
  observe: '👁',
  done: '✅',
  error: '⚠️',
}

const KIND_LABEL: Record<StepKind, string> = {
  think: '想',
  act: '做',
  observe: '看',
  done: '完成',
  error: '出错',
}

export function Chapter13() {
  const [mode, setMode] = useState<'normal' | 'astray'>('normal')
  const [step, setStep] = useState(0)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const steps = mode === 'normal' ? NORMAL_STEPS : ASTRAY_STEPS
  const isFinished = step >= steps.length
  const visibleSteps = steps.slice(0, step)

  useEffect(() => {
    const el = scrollRef.current
    if (!el || step === 0) return
    requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    })
  }, [step, mode])

  const handleModeChange = (next: 'normal' | 'astray') => {
    if (next === mode) return
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
      id="ch-13"
      index="14"
      eyebrow="它的工作节奏"
      caption="不是一次答完——而是一直在循环"
      accent="--color-leaf"
      title={
        <>
          <span className="block">想 → 做 → 看，</span>
          <span className="block">
            它一直在<span className="text-ember">循环</span>。
          </span>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>上一章我们看到它开始自己动手。那它到底是怎么一步步做完一件事的？</P>

          <H3>节奏就三个动作</H3>
          <P>
            它其实一直在做三个动作，<strong>反复循环</strong>：
          </P>
          <UL>
            <LI>
              <strong>想</strong>（think）：接下来这一步要做什么？
            </LI>
            <LI>
              <strong>做</strong>（act）：真的去做——读个文件、跑个命令、查个资料
            </LI>
            <LI>
              <strong>看</strong>（observe）：拿到结果，再决定下一步
            </LI>
          </UL>
          <P>直到它自己判断"完成了"，才停下来。</P>

          <Pull>它不是一次答完——它是在想 → 做 → 看的循环里走到终点。</Pull>

          <H3>一个完整例子（整理销售表）</H3>
          <P>感受一下这个循环实际的节拍：</P>
          <UL>
            <LI>想 → 做（打开表看结构）→ 看（3 列：日期 / 产品 / 金额）</LI>
            <LI>想 → 做（按产品分组求和）→ 看（12 个产品，合计 183 万）</LI>
            <LI>想 → 做（写成一份日报排好序）→ 看（文件已生成）</LI>
            <LI>✅ 完成</LI>
          </UL>

          <H3>关键认知 · 也是风险</H3>
          <P>
            每一步都可能出错。尤其"看"这一步——<Mark>如果它看岔了</Mark>
            ，后面的每一步都会顺着岔掉的方向走下去。
          </P>
          <P>
            之前讲过的"顺 ≠ 对"，在这里会被<strong>放大</strong>
            。它可能一路很顺地，做到一个错误的终点。
          </P>

          <H3>实用心态</H3>
          <UL>
            <LI>
              让它<strong>边做边报告</strong>（很多 agent 产品已经默认这样）
            </LI>
            <LI>
              发现它走偏，立刻<strong>打断</strong>——别尬等它跑完
            </LI>
            <LI>
              重要任务，让它<strong>先说计划</strong>再开始（下一章细讲）
            </LI>
          </UL>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-4 md:space-y-5">
            <div className="rounded-2xl border-2 border-ink bg-leaf/20 px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                🎯 任务
              </div>
              <p className="mt-1 text-sm font-semibold text-ink/90">
                把昨天的销售 CSV 做成一份日报
              </p>
            </div>

            <div className="flex rounded-2xl border-2 border-ink bg-paper p-1">
              {(['normal', 'astray'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => handleModeChange(m)}
                  className={`flex-1 rounded-xl py-2 font-mono text-xs tracking-widest transition-all duration-200 uppercase ${
                    mode === m
                      ? m === 'normal'
                        ? 'bg-leaf text-ink shadow-sm'
                        : 'bg-ember text-paper shadow-sm'
                      : 'text-ink/50 hover:text-ink/80'
                  }`}
                >
                  {m === 'normal' ? '正常跑' : '看它走偏'}
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
                    还没开跑
                  </p>
                  <p className="max-w-[220px] text-xs leading-relaxed text-ink/55">
                    点下方「下一步」开始第一步循环，它会<br />想 → 做 → 看，一步一步往下走
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {visibleSteps.map((s, i) => {
                    const isCurrent = i === step - 1
                    const isAstrayAlert = mode === 'astray' && s.isAlert
                    return (
                      <div
                        key={`${mode}-${i}`}
                        className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300 ${
                          isAstrayAlert
                            ? 'border-ember/60 bg-ember/10'
                            : 'border-leaf/60 bg-leaf/10'
                        } ${isCurrent ? 'shadow-paper' : ''}`}
                      >
                        <span className="mt-px shrink-0 text-lg leading-none">
                          {KIND_ICON[s.kind]}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div
                            className={`font-mono text-[10px] tracking-widest uppercase ${
                              isAstrayAlert ? 'text-ember' : 'text-leaf'
                            }`}
                          >
                            {KIND_LABEL[s.kind]}
                          </div>
                          <p className="mt-0.5 text-sm leading-snug text-ink/90">
                            {s.label}
                            {isAstrayAlert && (
                              <span className="ml-1.5 text-ember">
                                ⚠️ 其实第 3 列是"金额"，它看岔了
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
                className={`rounded-xl border-2 px-4 py-3 text-sm ${
                  mode === 'normal'
                    ? 'border-leaf/60 bg-leaf/15 text-ink/80'
                    : 'border-ember/60 bg-ember/15 text-ink/80'
                }`}
              >
                {mode === 'normal' ? (
                  <p>✓ 想 → 做 → 看 的循环，走到了它认为"完成"的那一刻。</p>
                ) : (
                  <>
                    <p className="font-semibold text-ember">
                      ⚠️ 它"顺"着跑完了——但第 3 步看岔了字段。
                    </p>
                    <p className="mt-1">
                      每一步都没停下来质疑——于是最终答案是错的。
                    </p>
                  </>
                )}
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button
                onClick={handleReset}
                disabled={step === 0}
                className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
              >
                重置 ↺
              </button>
              {!isFinished && (
                <button
                  onClick={handleNext}
                  className="rounded-full border-2 border-ink bg-leaf px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:-translate-y-0.5"
                >
                  下一步 →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它一路走得很顺，不等于它走对了——中间任何一步"看岔了"，都可能让它顺顺利利地走到错误的终点。
      </KeyLine>
    </Section>
  )
}

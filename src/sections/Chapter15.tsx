import { useEffect, useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

type Phase = 'idle' | 'dispatching' | 'running' | 'merging' | 'done'

interface Helper {
  id: string
  icon: string
  label: string
  duty: string
  duration: number
  summary: string
  tone: string
}

const helpers: Helper[] = [
  {
    id: 'data',
    icon: '📊',
    label: '收集数据',
    duty: '查规模 / 估值',
    duration: 2200,
    summary: 'A · 500 人，估值 10 亿\nB · 200 人\nC · 80 人',
    tone: 'bg-sun/30 border-sun',
  },
  {
    id: 'product',
    icon: '💼',
    label: '总结产品',
    duty: '看各家主打方向',
    duration: 4000,
    summary: 'A · 企业 SaaS\nB · 社交工具\nC · 开源平台',
    tone: 'bg-rose/25 border-rose',
  },
  {
    id: 'news',
    icon: '📰',
    label: '扫近期新闻',
    duty: '过去一周动向',
    duration: 3100,
    summary: 'A · 刚发新版\nB · 完成 B 轮\nC · 开源新模块',
    tone: 'bg-leaf/25 border-leaf',
  },
  {
    id: 'edit',
    icon: '✍️',
    label: '格式润色',
    duty: '统一样式',
    duration: 1300,
    summary: '按字母排序\n加来源脚注\n统一标题字号',
    tone: 'bg-violet/25 border-violet',
  },
]

const FINAL_REPORT = `🏢  3 家竞品速查表

· A 公司
  规模 500 人，估值 10 亿
  主打 企业 SaaS
  近况 刚发新版

· B 公司
  规模 200 人
  主打 社交工具
  近况 完成 B 轮融资

· C 公司
  规模 80 人
  主打 开源平台
  近况 开源新模块

— 按字母排序 · 来源已脚注 —`

export function Chapter15() {
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
    if (phase !== 'running') return

    helpers.forEach((h) => {
      const steps = 30
      const tick = h.duration / steps
      let i = 0
      const iv = setInterval(() => {
        i++
        const pct = Math.min((i / steps) * 100, 100)
        setProgress((prev) => ({ ...prev, [h.id]: pct }))
        if (i >= steps) clearInterval(iv)
      }, tick)
      intervalsRef.current.push(iv)

      const t = setTimeout(() => {
        setDone((prev) => new Set([...prev, h.id]))
      }, h.duration)
      timersRef.current.push(t)
    })

    const maxDur = Math.max(...helpers.map((h) => h.duration))
    const mergeT = setTimeout(() => setPhase('merging'), maxDur + 400)
    const doneT = setTimeout(() => setPhase('done'), maxDur + 1600)
    timersRef.current.push(mergeT, doneT)
  }, [phase])

  const handleStart = () => {
    clearAll()
    setProgress({})
    setDone(new Set())
    setPhase('dispatching')
    const t = setTimeout(() => setPhase('running'), 600)
    timersRef.current.push(t)
  }

  const handleReset = () => {
    clearAll()
    setProgress({})
    setDone(new Set())
    setPhase('idle')
  }

  const isBusy = phase === 'dispatching' || phase === 'running' || phase === 'merging'
  const startLabel = phase === 'done' ? '再跑一次 →' : isBusy ? '正在跑……' : '派出帮手 →'

  return (
    <Section
      id="ch-15"
      index="16"
      eyebrow="一个人忙不过来，就喊帮手"
      caption="主干活的喊专精的——各管一摊"
      accent="--color-sky"
      title={
        <>
          <span className="block">一个 agent</span>
          <span className="block">
            还能叫<span className="text-ember">帮手</span>。
          </span>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            前面讲的都是<strong>一个</strong> agent 自己做事。遇到复杂任务，它还可以
            <Mark>叫帮手</Mark>——业内叫「子 agent」（subagent），本质就是
            <strong>派一个专做一件事的小帮手</strong>。
          </P>

          <H3>最好的比喻</H3>
          <P>想象一个项目经理接到任务："做一份竞品速查表。"</P>
          <P>
            他能一个人做吗？能，但慢，而且容易漏。更自然的做法是——
            <Mark>自己管大局，叫几个同事各管一摊</Mark>：
          </P>
          <UL>
            <LI>一个去收集各家规模数据</LI>
            <LI>一个去总结主打产品</LI>
            <LI>一个去扫近期新闻</LI>
            <LI>一个统一格式和排版</LI>
          </UL>
          <P>帮手各自做完，把结果摘要交回来；项目经理收齐 → 合并成一份完整报告。</P>

          <Pull>Agent 现在也这样干：主的拆任务，派一堆小帮手各做一件事，再汇总。</Pull>

          <H3>为什么要这样</H3>
          <UL>
            <LI>
              <strong>分工</strong>：每个帮手只盯一件事，不容易跑题
            </LI>
            <LI>
              <strong>省时</strong>：几件事能<strong>同时做</strong>
            </LI>
            <LI>
              <strong>不塞爆桌子</strong>：主 agent 不用把所有细节都摊在自己面前（想想第 3 章说的"桌面有上限"——子 agent 做完把<strong>摘要</strong>带回来就行）
            </LI>
          </UL>

          <H3>对你的意义</H3>
          <UL>
            <LI>高级 agent 工具里经常弹"正在派子 agent 做 XX"——就是在叫帮手</LI>
            <LI>
              你<strong>自己也可以提出</strong>："这件事分成几小块派出去做"——往往比让它一个人闷头做稳
            </LI>
          </UL>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-3">
            <div className="rounded-2xl border-2 border-ink bg-sky/20 px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                🎯 主 agent 接到的任务
              </div>
              <p className="mt-1 text-sm font-semibold text-ink/90">
                给这 3 家竞品做一份速查表
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleStart}
                disabled={isBusy}
                className="flex-1 rounded-full border-2 border-ink bg-sky px-4 py-2 font-mono text-xs font-bold tracking-widest text-paper uppercase transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
              >
                {startLabel}
              </button>
              <button
                onClick={handleReset}
                disabled={phase === 'idle'}
                className="rounded-full border-2 border-ink bg-paper px-4 py-2 font-mono text-xs tracking-widest uppercase transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
              >
                重置 ↺
              </button>
            </div>

            <div className="flex items-center gap-2 rounded-xl border-2 border-ink bg-cream/70 px-3 py-2">
              <span className="text-lg leading-none">🧠</span>
              <span className="flex-1 font-mono text-[11px] tracking-widest text-ink/75 uppercase">
                {phase === 'idle' && '主 agent · 待命。点「派出帮手」开始'}
                {phase === 'dispatching' && '主 agent · 正在拆任务，准备派帮手……'}
                {phase === 'running' && `主 agent · 等 ${helpers.length - done.size} 位帮手做完……`}
                {phase === 'merging' && '主 agent · 4 份摘要都到齐了，正在合并……'}
                {phase === 'done' && '主 agent · 合并完成，速查表在下方'}
              </span>
              {(phase === 'dispatching' || phase === 'running' || phase === 'merging') && (
                <span className="flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-ember" />
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {helpers.map((h) => {
                const pct = progress[h.id] ?? 0
                const isDone = done.has(h.id)
                const isRunning = (phase === 'running' || phase === 'merging' || phase === 'done') && !isDone
                const isIdle = phase === 'idle' || phase === 'dispatching'

                return (
                  <div
                    key={h.id}
                    className={`relative rounded-2xl border-2 border-ink p-3 transition-all duration-300 ${
                      isDone ? h.tone : 'bg-paper'
                    } ${isIdle ? 'opacity-80' : ''}`}
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
                        {isDone ? '✅' : isRunning ? '⏳' : '💤'}
                      </span>
                    </div>

                    <div className="mt-2 h-1 overflow-hidden rounded-full border border-ink/15 bg-cream">
                      <div
                        className="h-full bg-sky transition-all duration-200"
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <div className="mt-2 min-h-[44px] rounded-md border border-dashed border-ink/25 bg-paper/70 px-2 py-1 font-mono text-[10px] leading-snug whitespace-pre-line text-ink/70">
                      {isDone ? h.summary : isRunning ? '· · ·' : '待命'}
                    </div>
                  </div>
                )
              })}
            </div>

            <div
              className={`rounded-2xl border-2 border-ink p-3 transition-all duration-500 ${
                phase === 'done'
                  ? 'bg-leaf/20'
                  : phase === 'merging'
                    ? 'bg-sun/25'
                    : 'bg-paper'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                  📋 主 agent · 把摘要合成最终产物
                </div>
                {phase === 'merging' && (
                  <span className="animate-pulse font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                    合并中…
                  </span>
                )}
              </div>
              <pre
                className={`mt-2 min-h-[110px] overflow-auto rounded-md border border-ink/20 bg-paper px-3 py-2 font-mono text-[11px] leading-relaxed whitespace-pre-wrap transition-opacity duration-500 ${
                  phase === 'done' ? 'text-ink/90 opacity-100' : 'text-ink/35 opacity-70'
                }`}
              >
                {phase === 'done' ? FINAL_REPORT : '（等 4 份摘要都回来，这里会拼出一份完整速查表）'}
              </pre>
            </div>

            <div className="rounded-xl border border-ink/15 bg-cream/60 px-3 py-2 text-[11px] leading-relaxed text-ink/70">
              💡 每个帮手只管自己那一摊 · 做完带一段摘要回来 · 主 agent 只管拼出最终产物。
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        一个人忙不过来就喊帮手——agent 也一样。把复杂任务拆给几个小帮手各管一摊，比让它独自硬扛更稳。
      </KeyLine>
    </Section>
  )
}

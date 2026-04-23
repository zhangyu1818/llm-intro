import { useEffect, useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, UL } from '../components/Prose'
import { Section } from '../components/Section'

interface RunStep {
  icon: string
  label: string
  tone: 'normal' | 'danger' | 'blocked' | 'ok'
}

const LOOSE_STEPS: RunStep[] = [
  { icon: '🔎', label: '扫描目录……', tone: 'normal' },
  { icon: '🗑️', label: '删除 temp/*.log', tone: 'normal' },
  { icon: '🗑️', label: '删除 .DS_Store', tone: 'normal' },
  { icon: '🗑️', label: '删除 .env  ← 其实是配置文件', tone: 'danger' },
  { icon: '✏️', label: '顺手改了 config.json', tone: 'danger' },
  { icon: '📤', label: '推送到线上', tone: 'danger' },
  { icon: '💥', label: '.env 丢了 · 线上被动 · 出事了', tone: 'danger' },
]

const STRICT_STEPS: RunStep[] = [
  { icon: '🔎', label: '扫描目录……', tone: 'normal' },
  { icon: '🗑️', label: '删除 temp/*.log', tone: 'normal' },
  { icon: '🗑️', label: '删除 .DS_Store', tone: 'normal' },
  { icon: '🛑', label: '要删 .env？停下等你 → 你说"别动" → 跳过', tone: 'blocked' },
  { icon: '🛑', label: '要改 config.json？停下等你 → 你说"别动" → 跳过', tone: 'blocked' },
  { icon: '🛑', label: '要推到线上？停下等你 → 你说"别动" → 跳过', tone: 'blocked' },
  { icon: '✅', label: '清理完成 · 没碰该碰的', tone: 'ok' },
]

export function Chapter14() {
  const [step, setStep] = useState(0)
  const [running, setRunning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    if (!running) return
    if (step >= LOOSE_STEPS.length) {
      setRunning(false)
      return
    }
    timerRef.current = setTimeout(() => {
      setStep((s) => s + 1)
    }, 900)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [running, step])

  const handleStart = () => {
    if (running) return
    setStep(0)
    setRunning(true)
  }

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setRunning(false)
    setStep(0)
  }

  const total = LOOSE_STEPS.length
  const isDone = step >= total && !running

  return (
    <Section
      id="ch-14"
      index="15"
      eyebrow="它开始做事，你要做什么"
      caption="让它跑得动，但别让它跑飞"
      accent="--color-ember"
      title={
        <>
          <span className="block">自由，</span>
          <span className="block">
            但别让它<span className="text-ember">脱缰</span>。
          </span>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            它能一路循环做完任务——但每一步都可能走偏。既然它开始动手，你就不再是"提问的人"——你是
            <Mark>那个盯着它做事的人</Mark>。
          </P>

          <H3>做四件事就够了</H3>
          <UL>
            <LI>让它<strong>先说计划</strong></LI>
            <LI><strong>分级授权</strong>给它</LI>
            <LI>关键节点让它<strong>停下来等你</strong></LI>
            <LI>不可逆的事<strong>你自己按</strong></LI>
          </UL>

          <H3>一 · 先说计划</H3>
          <P>
            很多 agent 产品都有这个模式（比如 Claude Code 的 Plan Mode）：它先列一个清单"我打算做这几步"——等你批准了再开工。
          </P>
          <P>
            这一步能提前摘掉 <Mark>80% 的"它做错了"</Mark>。很多翻车，其实看计划的那一刻你就能拦下来。
          </P>

          <H3>二 · 分级授权</H3>
          <P>
            它手里能做什么，是<Mark>你</Mark>决定的。常见分法：<strong>允许 / 询问 / 禁止</strong>。比如：读文件 = 允许；改文件 = 询问；删文件 = 禁止。不熟的操作一律选"询问"——它动手前敲敲门，你再决定。
          </P>

          <H3>三 · 不可逆的事别交出去</H3>
          <P>能回滚的（改文件、跑测试、查资料）放心让它做。不能回滚的事，它可以<strong>规划</strong>，但<strong>你自己按那一下</strong>：</P>
          <UL>
            <LI>删文件 / 清空数据库</LI>
            <LI>发邮件 / 发消息</LI>
            <LI>付钱 / 下单</LI>
            <LI>推送到线上 / 强制 push</LI>
          </UL>

          <H3>四 · 项目级家规</H3>
          <P>
            不想每次都重复交代？可以放一份"家规文件"——比如 Claude Code 的 <code>CLAUDE.md</code>、OpenAI 生态的 <code>AGENTS.md</code>。写清项目风格、别碰哪些目录、什么绝对禁止……它开工会先读家规。
          </P>
          <P>
            和 Skills 的区别：<Mark>Skills 是"某类任务的说明书"，家规是"整个项目的规矩"。</Mark>
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-3">
            <div className="rounded-2xl border-2 border-ink bg-ember/15 px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                🎯 同一个任务，两种处理方式
              </div>
              <p className="mt-1 text-sm font-semibold text-ink/90">
                帮我清理一下这个项目里的临时文件
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleStart}
                disabled={running}
                className="flex-1 rounded-full border-2 border-ink bg-ember px-4 py-2 font-mono text-xs font-bold tracking-widest text-paper uppercase transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
              >
                {running ? '跑中……' : isDone ? '再跑一次 →' : '让它们俩同时跑 →'}
              </button>
              <button
                onClick={handleReset}
                disabled={!running && step === 0}
                className="rounded-full border-2 border-ink bg-paper px-4 py-2 font-mono text-xs tracking-widest uppercase transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
              >
                重置 ↺
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <ScenarioColumn
                title="没立规矩"
                subtitle="放它自由"
                steps={LOOSE_STEPS}
                step={step}
                variant="loose"
              />
              <ScenarioColumn
                title="立了规矩"
                subtitle="关键节点等你点头"
                steps={STRICT_STEPS}
                step={step}
                variant="strict"
              />
            </div>

            {isDone && (
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border-2 border-ember bg-ember/15 px-3 py-2 text-[11px] leading-snug text-ink/85">
                  <span className="font-semibold text-ember">💥 后果</span>
                  <div className="mt-0.5">.env 丢了。线上被改了。回不来了。</div>
                </div>
                <div className="rounded-xl border-2 border-leaf bg-leaf/20 px-3 py-2 text-[11px] leading-snug text-ink/85">
                  <span className="font-semibold text-leaf">✅ 结果</span>
                  <div className="mt-0.5">该干的干了，不该碰的一样没少。</div>
                </div>
              </div>
            )}

            <div className="rounded-xl border border-ink/15 bg-cream/60 px-3 py-2 text-[11px] leading-relaxed text-ink/70">
              💡 "立规矩" = 审批 + 权限分级 + 家规文件。这几件事加起来，就是给 agent 立的一根缰绳。
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它越能动手，你就越得给它立规矩。让它做事，但别让它替你按那些按不回来的按钮。
      </KeyLine>
    </Section>
  )
}

interface ColumnProps {
  title: string
  subtitle: string
  steps: RunStep[]
  step: number
  variant: 'loose' | 'strict'
}

function ScenarioColumn({ title, subtitle, steps, step, variant }: ColumnProps) {
  const headTone = variant === 'loose' ? 'bg-ember/20 border-ember' : 'bg-leaf/20 border-leaf'
  const badgeTone =
    variant === 'loose' ? 'bg-ember text-paper' : 'bg-leaf text-paper'

  return (
    <div className="rounded-2xl border-2 border-ink bg-paper p-3">
      <div className={`mb-2 flex items-center justify-between rounded-xl border-2 ${headTone} px-2.5 py-1.5`}>
        <div>
          <div className="font-display text-[13px] leading-tight font-bold">{title}</div>
          <div className="font-mono text-[9px] tracking-widest text-ink/55 uppercase">
            {subtitle}
          </div>
        </div>
        <span className={`rounded-full px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase ${badgeTone}`}>
          {variant === 'loose' ? '放任' : '审批'}
        </span>
      </div>

      <div className="space-y-1">
        {steps.map((s, i) => {
          const active = i < step
          return (
            <div
              key={i}
              className={`flex items-start gap-1.5 rounded-md border px-2 py-1.5 transition-all duration-300 ${
                active
                  ? s.tone === 'danger'
                    ? 'border-ember/70 bg-ember/10'
                    : s.tone === 'blocked'
                      ? 'border-sun/70 bg-sun/15'
                      : s.tone === 'ok'
                        ? 'border-leaf/70 bg-leaf/15'
                        : 'border-ink/20 bg-cream/50'
                  : 'border-ink/10 bg-cream/30 opacity-40'
              }`}
            >
              <span className="shrink-0 text-sm leading-none">{active ? s.icon : '·'}</span>
              <span
                className={`flex-1 text-[11px] leading-snug ${
                  active
                    ? s.tone === 'danger'
                      ? 'text-ember'
                      : s.tone === 'blocked'
                        ? 'text-ink/85'
                        : s.tone === 'ok'
                          ? 'text-ink/90'
                          : 'text-ink/80'
                    : 'text-ink/40'
                }`}
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

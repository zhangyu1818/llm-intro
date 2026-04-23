import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, Mark, P, Prose } from '../components/Prose'
import { Section } from '../components/Section'

interface Tool {
  id: string
  label: string
  icon: string
  x: number
  y: number
  color: string
  value: string
}

const tools: Tool[] = [
  { id: 'web',    label: '网页搜索', icon: '🌐', x: 50, y: 8,  color: '#4b8bff', value: '今日最新新闻、价格、政策' },
  { id: 'db',     label: '数据库',   icon: '🗃️', x: 88, y: 35, color: '#8a5cff', value: '你们业务表里的具体记录' },
  { id: 'cal',    label: '日历',     icon: '🗓️', x: 80, y: 80, color: '#ff5a3c', value: '你这周的会议和待办' },
  { id: 'repo',   label: '代码仓库', icon: '🧩', x: 20, y: 80, color: '#3ea16d', value: '最新代码的真实状态' },
  { id: 'files',  label: '本地文件', icon: '📁', x: 12, y: 35, color: '#ffb020', value: '你电脑里的这份 PDF' },
]

export function Chapter08() {
  const [active, setActive] = useState<Set<string>>(new Set(['web']))

  const toggle = (id: string) => {
    setActive((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <Section
      id="ch-8"
      index="11"
      eyebrow="联网、工具、MCP"
      title={
        <>
          <span className="block">让它能伸手，</span>
          <span className="block">
            够到<span className="text-ember">外部世界</span>。
          </span>
        </>
      }
      caption="模型负责组织答案，工具负责把新资料递到它手里"
      accent="--color-leaf"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            前面讲过两件事：它的知识停在训练截止那天，它有时会在不知道的地方一本正经地补。那能不能给它"现场查一下"的能力？——可以。这就是本章要讲的联网和工具。
          </P>
          <P>
            所以，<Mark>"让它知道最新信息"不是让它突然变聪明，而是让它能去把新资料拿回来，再照着新资料回答你。</Mark>
          </P>

          <H3>联网到底补上了什么</H3>
          <P>最直接的作用，是把「训练之后发生的事」补回来。今天刚发生的新闻、某个产品昨天更新的说明、某个城市今天的天气——光靠训练阶段学到的内容，它很可能答不准。但能联网，它就可以先查，再答。</P>
          <P>这时它的工作方式也变了：从「凭已有知识直接回答」，变成「先查当下资料，再按查到的内容组织回答」。</P>

          <H3>外部工具不只是「上网搜索」</H3>
          <P>它还可以被接上很多别的数据来源和操作能力：文档库、数据库、日历、代码仓库、企业内部系统、本地文件……一旦接上，它就不只是「会说话」，而是能先拿到你真正需要的信息，再动手帮你做事。</P>

          <H3>MCP，可以先这样理解</H3>
          <P>第一次听到 MCP，先把它的协议细节放一放。最适合起步的理解是：</P>
          <blockquote className="font-display my-6 max-w-3xl rounded-2xl border-2 border-leaf bg-leaf/15 px-6 py-5 text-lg leading-[1.85] font-medium text-ink/90 md:px-7 md:py-6 md:text-xl md:leading-[1.8]">
            MCP 就像模型接外部工具时用的一种<Mark>标准插座</Mark>——不管是数据库、日历、还是你本地的文件，都按同一个规格插上去。
          </blockquote>
          <P>
            在这之前，想给模型接一个新工具，每种工具都要对接一套自己的接口。有了 MCP，这件事变得像家电接电源：插座是统一的，设备照规格接上就能用。
          </P>

          <H3>一句话讲清楚这一章</H3>
          <P>
            模型主要负责「理解你说什么」和「把回答组织好」；联网、工具、MCP 则负责「去拿新资料、查外部信息、连接真实系统」。两边合起来，它才会从「只会说」变成「既能查、又能答、还能动手做一点事」。
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  interactive · 给它接上不同工具
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  点一下外圈的工具把它「接」进来，看看它能够到什么。
                </p>
              </div>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-ink bg-leaf/10 shadow-card">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {tools.map((t) => {
                  const isOn = active.has(t.id)
                  const d = `M ${t.x} ${t.y} Q 50 50 50 50`
                  return (
                    <g key={t.id}>
                      <path
                        d={d}
                        stroke={isOn ? t.color : '#1a1614'}
                        strokeWidth={isOn ? 0.6 : 0.25}
                        strokeDasharray={isOn ? '0' : '1 1'}
                        fill="none"
                        opacity={isOn ? 0.9 : 0.25}
                        className="transition-all duration-500"
                      />
                      {isOn && (
                        <circle r="0.8" fill={t.color}>
                          <animateMotion dur="2s" repeatCount="indefinite" path={d} />
                        </circle>
                      )}
                    </g>
                  )
                })}
              </svg>

              <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-36 w-36 rounded-full border-2 border-ink bg-paper shadow-card">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl">🧠</div>
                    <div className="font-display text-lg font-bold">Model</div>
                    <div className="font-mono text-[9px] tracking-widest text-ink/55 uppercase">
                      组织回答
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-6 rotate-6 rounded-full border-2 border-ink bg-sun px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase shadow-paper">
                    MCP
                  </div>
                </div>
              </div>

              <div className="absolute right-3 bottom-3 z-20 rounded-xl border-2 border-ink bg-paper px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase shadow-paper">
                MCP · 标准插座
              </div>

              {tools.map((t) => {
                const isOn = active.has(t.id)
                return (
                  <button
                    key={t.id}
                    onClick={() => toggle(t.id)}
                    className={`group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 ${
                      isOn ? 'z-10' : ''
                    }`}
                    style={{ left: `${t.x}%`, top: `${t.y}%` }}
                  >
                    <span
                      className={`flex h-14 w-14 origin-bottom items-center justify-center rounded-full border-2 border-ink text-2xl shadow-paper transition-transform ${
                        isOn ? 'scale-110 shadow-card' : 'bg-paper group-hover:-translate-y-0.5'
                      }`}
                      style={{ background: isOn ? t.color : undefined }}
                    >
                      {t.icon}
                    </span>
                    <span className="relative z-10 rounded-full border border-ink bg-paper px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                      {t.label}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="rounded-2xl border-2 border-ink bg-paper p-4">
              <div className="mb-2 font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                它现在够得到的信息
              </div>
              <div className="flex flex-wrap gap-2">
                {active.size === 0 ? (
                  <span className="text-sm text-ink/50">一样工具都没接——只能靠训练时学到的东西。</span>
                ) : (
                  Array.from(active).map((id) => {
                    const t = tools.find((x) => x.id === id)!
                    return (
                      <span
                        key={id}
                        className="rounded-full border-2 border-ink px-3 py-1 text-sm font-medium"
                        style={{ background: t.color, color: '#fdf9f1' }}
                      >
                        {t.icon} {t.value}
                      </span>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        联网和工具，不是让它突然变聪明，而是让它能接触到新的资料；MCP 则像连接这些外部能力的那个标准插座。
      </KeyLine>
    </Section>
  )
}

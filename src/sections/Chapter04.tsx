import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, Mark, P, Prose } from '../components/Prose'
import { Section } from '../components/Section'

type Note = {
  id: string
  raw: string
  keep: boolean
  distilled?: string
  bucket?: '目标读者' | '文风' | '边界' | '输出形式'
  color: string
  x: number
  y: number
  rot: number
}

const notes: Note[] = [
  { id: '1', raw: '用户：面向第一次接触的人', keep: true, distilled: '第一次接触相关内容的读者', bucket: '目标读者', color: '#ffd7de', x: 3, y: 4, rot: -6 },
  { id: '2', raw: '用户：不要讲底层原理', keep: true, distilled: '不讲底层原理', bucket: '边界', color: '#ffe9a8', x: 62, y: 2, rot: 4 },
  { id: '3', raw: '模型：好的，收到', keep: false, color: '#d9e7ff', x: 32, y: 18, rot: -2 },
  { id: '4', raw: '用户：语气通俗', keep: true, distilled: '通俗、少术语', bucket: '文风', color: '#c7f1d8', x: 78, y: 16, rot: 7 },
  { id: '5', raw: '（闲聊两句）', keep: false, color: '#e8defb', x: 14, y: 38, rot: 3 },
  { id: '6', raw: '模型：这段要不要改？', keep: false, color: '#f7e3d4', x: 43, y: 46, rot: -4 },
  { id: '7', raw: '用户：按章节写，Markdown', keep: true, distilled: 'Markdown，按章节写', bucket: '输出形式', color: '#ffd7de', x: 71, y: 42, rot: -6 },
  { id: '8', raw: '（跑题吐槽）', keep: false, color: '#d9e7ff', x: 5, y: 68, rot: 5 },
  { id: '9', raw: '用户：第三章再展开点', keep: false, color: '#ffe9a8', x: 50, y: 72, rot: -3 },
  { id: '10', raw: '（反复来回改标题）', keep: false, color: '#c7f1d8', x: 80, y: 70, rot: 2 },
]

const buckets: Note['bucket'][] = ['目标读者', '文风', '边界', '输出形式']

export function Chapter04() {
  const [tidy, setTidy] = useState(false)

  return (
    <Section
      id="ch-4"
      index="05"
      eyebrow="桌面真的不够用了怎么办"
      title={
        <>
          <span className="block">别硬聊——</span>
          <span className="block">
            先<span className="text-ember">整理一下</span>再继续。
          </span>
        </>
      }
      caption="最有效的做法往往是压缩、提炼、重写成几条重点"
      accent="--color-leaf"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            一旦发现它开始「飘」，很多人的第一反应是接着硬聊，试图靠更多对话把它拉回来。这样偶尔能救回来一点，但通常不是最稳的办法。
            <Mark>更有效的做法往往不是「继续塞更多聊天记录」，而是主动压缩、提炼、整理。</Mark>
          </P>

          <H3>为什么要压缩</H3>
          <P>
            因为它并不是「看得越多越轻松」。恰恰相反——内容越多越杂，它越容易抓不到重点。如果你先把真正要紧的部分理清楚再递给它，它往往表现得更稳、更像「懂了」。
          </P>
          <P>所以关键不是让它去背整本聊天，而是帮它准备一份<Mark>重点笔记</Mark>。</P>

          <H3>几种常见的整理方式</H3>
          <P>
            <strong>1. 把长对话收成几条关键结论。</strong> 比如目标读者、文风、边界、输出形式——这几条，往往比整段历史更有用。
          </P>
          <P>
            <strong>2. 把要求整理成清单。</strong> 让它一眼就看清「要做什么」「不能做什么」，比散在一堆聊天里稳得多。
          </P>
          <P>
            <strong>3. 把角色、风格、限制固定下来。</strong> 永远用中文、语气简洁、面向新人、不要过于技术——这类反复要出现的要求，最好写死，而不是每次临时再提一句。
          </P>
          <P>
            <strong>4. 长任务分阶段做。</strong> 先定结构 → 再写其中一部分 → 再统一润色 → 最后检查整体一致性。每一轮只处理这一步真正需要的内容。
          </P>

          <H3>一个很实用的小招</H3>
          <P>
            如果你发现对话已经很长、它明显在飘，不妨停下来，对它说：
          </P>
          <blockquote className="font-display mt-5 max-w-3xl rounded-2xl border-2 border-leaf bg-leaf/15 px-6 py-5 text-lg leading-[1.85] font-medium text-ink/90 md:px-7 md:py-6 md:text-xl md:leading-[1.8]">
            “我们先别继续往下推了，把前面已经定下来的关键信息，帮我整理成 5 条。”
          </blockquote>
          <P>很多时候，这一步就能把对话明显拉回正轨。</P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  interactive · 点一下试试
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  把一桌乱糟糟的聊天，收成几条真正关键的结论。
                </p>
              </div>
              <button
                onClick={() => {
                  setTidy((v) => !v)
                }}
                className="rounded-full border-2 border-ink bg-leaf px-5 py-1.5 font-mono text-xs tracking-widest text-paper uppercase transition hover:-translate-y-0.5"
              >
                {tidy ? '打散 ⟲' : '整理成笔记 →'}
              </button>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl border-2 border-ink bg-cream/60 shadow-card">
              <div className="relative h-[520px]">
                {notes.map((n, i) => {
                  if (!tidy) {
                    return (
                      <div
                        key={n.id}
                        className="absolute w-40 rounded-lg border-2 border-ink p-3 text-sm shadow-paper transition-all duration-700 ease-out"
                        style={{
                          background: n.color,
                          left: `${n.x}%`,
                          top: `${n.y}%`,
                          transform: `rotate(${n.rot}deg)`,
                        }}
                      >
                        {n.raw}
                      </div>
                    )
                  }

                  if (!n.keep) {
                    return (
                      <div
                        key={n.id}
                        className="absolute w-36 rounded-lg border-2 border-ink p-3 text-xs opacity-20 blur-[1px] transition-all duration-700"
                        style={{
                          background: n.color,
                          left: `${n.x}%`,
                          top: `${110 + i * 2}%`,
                          transform: `rotate(${n.rot * 2}deg)`,
                        }}
                      >
                        {n.raw}
                      </div>
                    )
                  }

                  const idx = buckets.indexOf(n.bucket!)
                  return (
                    <div
                      key={n.id}
                      className="absolute w-[78%] rounded-xl border-2 border-ink bg-paper p-3 shadow-paper transition-all duration-700 ease-out"
                      style={{
                        left: '10%',
                        top: `${6 + idx * 22}%`,
                        transform: 'rotate(-0.6deg)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink bg-leaf font-mono text-xs font-bold text-paper">
                          {idx + 1}
                        </span>
                        <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                          {n.bucket}
                        </div>
                      </div>
                      <div className="mt-1.5 pl-10 text-base font-medium text-ink">
                        {n.distilled}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-ink/15 bg-paper px-3 py-2">
                <span className="font-mono tracking-widest text-ink/60 uppercase">整理前</span>
                <p className="mt-1 text-sm">10 条散乱便签</p>
              </div>
              <div className="rounded-xl border border-ink/15 bg-leaf/15 px-3 py-2">
                <span className="font-mono tracking-widest text-ink/60 uppercase">整理后</span>
                <p className="mt-1 text-sm">4 条能直接用的结论</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        上下文不够时，最有效的办法通常不是继续硬聊，而是先停下来整理重点，然后再往前走。
      </KeyLine>
    </Section>
  )
}

import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

interface SkillBook {
  id: string
  title: string
  icon: string
  rules: string[]
  color: string
}

const books: SkillBook[] = [
  {
    id: 'weekly',
    title: '周报说明书',
    icon: '📄',
    color: '#ffb020',
    rules: [
      '三段：本周完成 / 风险 / 下周计划',
      '语气简洁，不要套话',
      '风险一定写「对方 + 预期时间」',
    ],
  },
  {
    id: 'review',
    title: '代码审查说明书',
    icon: '🔍',
    color: '#4b8bff',
    rules: [
      '先找 bug 和回归风险',
      '再谈边界情况',
      '最后才说风格问题',
    ],
  },
  {
    id: 'meeting',
    title: '会议纪要说明书',
    icon: '📌',
    color: '#ff5a3c',
    rules: [
      '分四栏：结论 / 待办 / 负责人 / 截止时间',
      '不复述过程，只留「决了什么」',
      '找不到负责人的，标「待指派」',
    ],
  },
  {
    id: 'email',
    title: '邮件说明书',
    icon: '✉️',
    color: '#3ea16d',
    rules: [
      '主题必须写清「做什么/什么时间前」',
      '正文：结论先行，理由其次',
      '附件要在正文里点名',
    ],
  },
]

const adhocVariants = [
  '帮我写本周周报，先写完成的，再写风险，最后写下周计划，语气别太套话',
  '帮我写下周报——本周完成 / 阻塞 / 下周计划，简洁点',
  '写个周报，完成事项 + 遇到的问题 + 下周要做的，别太官腔',
  '周报一下，格式：完成、风险、下周',
]

type Mode = 'adhoc' | 'skills'

export function Chapter09() {
  const [mode, setMode] = useState<Mode>('adhoc')
  const [active, setActive] = useState(books[0].id)
  const [runs, setRuns] = useState(1)
  const book = books.find((b) => b.id === active)!

  const runOne = () => {
    setRuns((r) => (r >= adhocVariants.length ? 1 : r + 1))
  }

  return (
    <Section
      id="ch-9"
      index="12"
      eyebrow="把反复要说的话沉淀下来"
      title={
        <>
          <span className="block">Skills ·</span>
          <span className="block">
            一份<span className="text-ember">说明书</span>，按任务取用。
          </span>
        </>
      }
      caption="别再每次从头交代——同一类任务，让它照同一份规则做"
      accent="--color-violet"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            上一章讲的是「怎么把一次问题说清楚」。但如果同一类任务会<Mark>反复发生</Mark>——周报、会议纪要、代码审查、邮件——你很快会发现一个新麻烦：这些背景、口吻、边界、格式，<em>每次都在重新说一遍</em>。
          </P>

          <P>写一次还行，写十次、二十次，就会遇到几个典型问题：</P>
          <UL>
            <LI>这次漏了一条</LI>
            <LI>下次换了个说法</LI>
            <LI>前半段讲了风格，后半段忘了边界</LI>
            <LI>同一件事，今天做得像样，明天又飘了</LI>
          </UL>

          <Pull>
            Skills 做的事，就是把"每次重写 prompt"这件事，变成一份「可复用的说明书」。
          </Pull>

          <H3>核心在做什么</H3>
          <P>
            你可以把一个 Skill 想成一份<Mark>工作说明书</Mark>。上面写清楚这类任务要怎么做：用什么风格、按什么流程、输出长什么样、哪些规则不能碰。以后再碰到这类任务，就不必从头交代——它照着说明书做就行。
          </P>

          <H3>那为什么不"一次全塞给它"</H3>
          <P>
            很多人听到这里会想：那我把所有规则都一次性塞给它，不就一劳永逸？<strong>通常也不好。</strong>原因也很直接：
          </P>
          <UL>
            <LI>不是每一轮都需要所有规则——写作时用不上审查那一套</LI>
            <LI>塞太多，它反而不容易聚焦当前这件事</LI>
            <LI>你自己也管不过来——规则一多，互相打架你都看不出来</LI>
          </UL>
          <P>更自然的做法是<Mark>按任务取用</Mark>：写作时加载写作那本，审查时加载审查那本。就像一排书架——需要哪一本，取下来翻开；其他先放回去。</P>

          <H3>什么任务值得沉淀成 Skill</H3>
          <P>不是所有事都要做 Skill。判断很朴素，两个条件一起满足就够：</P>
          <UL>
            <LI>这类任务会<strong>反复</strong>出现</LI>
            <LI>每次的要求基本一样——格式、语气、边界</LI>
          </UL>
          <P>
            周报、会议纪要、代码审查、邮件——这类任务非常典型。偶尔才做一次的事，随手写清楚 prompt 就好，不必沉淀。
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  interactive · 对比两种做法
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  切换一下，看临时 prompt 和沉淀成 Skill 的差别。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-full border-2 border-ink bg-paper p-1">
              <button
                onClick={() => setMode('adhoc')}
                className={`rounded-full px-4 py-2 text-center font-mono text-xs tracking-widest uppercase transition ${
                  mode === 'adhoc' ? 'bg-ink text-paper' : 'text-ink/65 hover:text-ink'
                }`}
              >
                临时 prompt
              </button>
              <button
                onClick={() => setMode('skills')}
                className={`rounded-full px-4 py-2 text-center font-mono text-xs tracking-widest uppercase transition ${
                  mode === 'skills' ? 'bg-ink text-paper' : 'text-ink/65 hover:text-ink'
                }`}
              >
                Skill · 说明书
              </button>
            </div>

            {mode === 'adhoc' ? (
              <div className="rounded-3xl border-2 border-ink bg-paper p-5 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-display text-base font-bold">每次都得重写</div>
                  <button
                    onClick={runOne}
                    className="rounded-full border-2 border-ink bg-cream px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition hover:-translate-y-0.5"
                  >
                    再来一次 ↻
                  </button>
                </div>
                <div className="space-y-2">
                  {adhocVariants.slice(0, runs).map((v, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-ink/20 bg-cream/50 px-3 py-2 text-sm"
                    >
                      <span className="font-mono text-[10px] tracking-widest text-ink/50 uppercase">
                        #{i + 1}
                      </span>
                      <span className="flex-1">{v}</span>
                    </div>
                  ))}
                </div>
                {runs >= 2 && (
                  <div className="mt-3 rounded-xl border border-ember bg-ember/10 px-3 py-2 text-xs text-ink/75">
                    ⚠ 留意一下：每次说法都稍有差别。漏一条、换一种说法，输出就跟着不稳。
                  </div>
                )}
                {runs < adhocVariants.length && (
                  <div className="mt-2 font-mono text-[10px] tracking-widest text-ink/45 uppercase">
                    点"再来一次"继续看
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-3xl border-2 border-ink bg-cream p-5 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-display text-base font-bold">书架 · 按任务取一本</div>
                  <span className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                    skill library
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {books.map((b) => {
                    const on = b.id === active
                    return (
                      <button
                        key={b.id}
                        onClick={() => setActive(b.id)}
                        className={`relative flex h-28 w-[72px] shrink-0 flex-col items-center justify-between rounded-xl border-2 border-ink py-2 text-center transition-all ${
                          on ? '-translate-y-1.5 shadow-card' : 'hover:-translate-y-1'
                        }`}
                        style={{ background: b.color }}
                      >
                        <span className="text-xl">{b.icon}</span>
                        <span className="px-1 text-[10px] leading-tight font-semibold text-paper">
                          {b.title}
                        </span>
                        <span className="font-mono text-[8px] tracking-widest text-paper/80 uppercase">
                          SKILL
                        </span>
                        {on && (
                          <span className="absolute -top-2 right-0.5 rounded-full border-2 border-ink bg-paper px-1.5 py-0.5 font-mono text-[8px] tracking-widest uppercase">
                            IN USE
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>

                <div
                  className="mt-4 rounded-2xl border-2 border-ink p-3"
                  style={{ background: `${book.color}22` }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink text-lg"
                      style={{ background: book.color }}
                    >
                      {book.icon}
                    </span>
                    <div>
                      <div className="font-display text-base font-bold">{book.title}</div>
                      <div className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                        当前加载中 · {book.rules.length} 条规则
                      </div>
                    </div>
                  </div>
                  <ul className="mt-2.5 space-y-1.5">
                    {book.rules.map((r, i) => (
                      <li
                        key={r}
                        className="flex items-start gap-2 rounded-xl border border-ink/20 bg-paper/80 px-2.5 py-1.5 text-[12.5px]"
                      >
                        <span
                          className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-ink font-mono text-[9px] font-bold"
                          style={{ background: book.color, color: '#fdf9f1' }}
                        >
                          {i + 1}
                        </span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-2.5 text-xs text-ink/65">
                  其他说明书先放回架子。做到对应任务时再取下来，不会互相干扰。
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <KeyLine>
        反复发生的任务，别再每次从头交代一次。把该做的事写成一份说明书，用到哪本取哪本——输出会立刻稳一大截。
      </KeyLine>
    </Section>
  )
}

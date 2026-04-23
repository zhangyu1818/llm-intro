import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

interface Slot {
  id: 'context' | 'tone' | 'limit' | 'shape'
  label: string
  hint: string
  color: string
}

const slots: Slot[] = [
  { id: 'context', label: '① 背景',      hint: '它是谁、对方是谁、为什么做',             color: '#ffb020' },
  { id: 'tone',    label: '② 口吻/示例', hint: '想要什么风格，最好给一段像的例子',       color: '#ff7a9a' },
  { id: 'limit',   label: '③ 边界',      hint: '不要说什么、哪些字眼不能用',             color: '#8a5cff' },
  { id: 'shape',   label: '④ 输出形式',  hint: '长度、结构、格式——越具体越好',          color: '#3ea16d' },
]

const answers = [
  {
    delta: '只有半句话——对方是谁、要多正式、要多长，它全得猜',
    text: '您好，关于合同评审，想问下大概什么时候能安排上，谢谢。',
  },
  {
    delta: '加了背景 · 它知道你是产品，对方是法务，首次合作',
    text: '您好，我是 ×× 产品负责人，首次和您合作。想了解一下合同评审大概什么时候能启动？辛苦啦！',
  },
  {
    delta: '加了口吻示例 · 随意用词没了，正式但不官腔',
    text: '张律师您好。我是 ×× 团队的产品负责人。上周已整理好合作范围与主要条款，想请您过目，希望本周内进入评审流程。',
  },
  {
    delta: '加了边界 · 去掉了感叹号、"辛苦"这类套话',
    text: '张律师您好。我是 ×× 团队的产品负责人，已将合作范围与主要条款整理完毕，随邮件附上合同初稿，供您先期过目。希望能在本周内启动评审流程。如需调整，请告诉我。',
  },
  {
    delta: '加了输出形式 · 主题行 + 三段结构',
    text: `主题：劳务合作合同评审 · 期望本周内启动

张律师您好。

我是 ×× 团队的产品负责人，已将合作范围与主要条款整理完毕，随邮件附上合同初稿，供您先期过目。

希望能在本周内启动评审流程。如需调整，请告诉我。

感谢～`,
  },
]

export function Chapter07() {
  const [step, setStep] = useState(0)

  const reset = () => setStep(0)
  const answer = answers[step]
  const done = step === answers.length - 1

  return (
    <Section
      id="ch-7"
      index="10"
      eyebrow="递材料的艺术"
      title={
        <>
          <span className="block">一次，</span>
          <span className="block">
            把问题<span className="text-ember">说清楚</span>。
          </span>
        </>
      }
      caption="你递得越清楚，它答得越稳——这就是所谓「提示词」的核心"
      accent="--color-sky"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            回到第一章那个画面：它是「盯着眼前材料当场作答的人」。所以它答得稳不稳，很大程度上不看"模型有多聪明"——看<Mark>你递过去的那叠材料有多清楚</Mark>。
          </P>
          <P>
            新人一开始通常只会递半张纸：<em>"帮我写封邮件"</em>。它拿到这么点信息，就只能瞎猜：发给谁？什么场景？要多正式？要多长？——猜错了，就出现那个经典体验："嗯……这不是我想要的。"
          </P>

          <Pull>
            它不是不愿意好好答，是你没递足够的材料让它好好答。
          </Pull>

          <H3>一份「齐全的材料」通常包含四块</H3>
          <P>不用记死——写 prompt 前心里过一遍这四个抽屉，就能避开大多数不靠谱的回答。</P>
          <UL>
            <LI><strong>背景</strong>：你是谁、对方是谁、为什么做这件事</LI>
            <LI><strong>口吻 / 示例</strong>：要什么风格，最好直接给一段像的样子</LI>
            <LI><strong>边界</strong>：不要说什么、不能越界到哪里</LI>
            <LI><strong>输出形式</strong>：长度、结构、格式——越具体越好</LI>
          </UL>

          <H3>特别提一下：例子 &gt; 形容词</H3>
          <P>
            "口吻随和一点"、"语气专业一点"这种形容词，每个人心里的标准都不一样——它也猜不准。比一句形容词更管用的，是<Mark>直接甩一段像的例子过去</Mark>。它一看样本，风格就能对得上。
          </P>

          <H3>一个很实用的自检</H3>
          <P>写完 prompt 发出去之前，停一秒问自己：</P>
          <UL>
            <LI>如果我把这段话给一个完全不了解项目的同事，他能直接上手吗？</LI>
            <LI>他会不会还要追问我好几句才敢动？</LI>
          </UL>
          <P>
            如果答案是"他一定会再来问我"，那它也会。只不过——它不会问，而是会自己编。这就回到上一章说的那件事了。
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  interactive · 依次把四张卡片递上去
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  按顺序点，看它的回答一档一档变齐全。
                </p>
              </div>
              <button
                onClick={reset}
                disabled={step === 0}
                className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
              >
                重置
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {slots.map((s, i) => {
                const filled = i < step
                const isNext = i === step
                const locked = i > step
                return (
                  <button
                    key={s.id}
                    onClick={() => isNext && setStep(step + 1)}
                    disabled={!isNext}
                    className={`relative rounded-xl border-2 border-ink px-2.5 py-2 text-left transition-all ${
                      filled ? 'shadow-card' : ''
                    } ${
                      isNext ? 'animate-pulse hover:-translate-y-0.5 cursor-pointer' : ''
                    } ${
                      locked ? 'cursor-not-allowed opacity-30 saturate-0' : ''
                    }`}
                    style={{ background: filled ? s.color : isNext ? '#fdf9f1' : '#eeeae1' }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold">{s.label}</span>
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border border-ink font-mono text-[10px] ${
                          filled ? 'bg-paper' : ''
                        }`}
                      >
                        {filled ? '✓' : isNext ? '→' : ''}
                      </span>
                    </div>
                    <div className={`mt-0.5 text-[10.5px] leading-snug ${filled ? 'text-ink/80' : 'text-ink/55'}`}>
                      {s.hint}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="rounded-2xl border border-ink/20 bg-cream/60 px-3 py-2 text-xs text-ink/70">
              <span className="font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                step {step}/4 ·
              </span>{' '}
              {answer.delta}
            </div>

            <div
              className={`rounded-3xl border-2 border-ink p-5 shadow-card transition-all ${
                done ? 'bg-sky/20' : 'bg-ember/10'
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                  它这一版的回答
                </div>
                <span
                  className={`rounded-full border-2 border-ink px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase ${
                    done ? 'bg-paper' : 'bg-ember text-paper'
                  }`}
                >
                  {done ? '稳' : step === 0 ? '瞎答' : '更齐了'}
                </span>
              </div>
              <pre className="font-display max-h-[220px] overflow-auto text-[13px] leading-relaxed whitespace-pre-wrap text-ink/90">
                {answer.text}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        很多时候它答得不好，不是它不会做——是你只递了半张纸。把背景、口吻、边界、输出形式一次交代清楚，结果立刻就稳了。
      </KeyLine>
    </Section>
  )
}

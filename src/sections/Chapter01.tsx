import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

type Turn = { role: 'user' | 'assistant'; text: string }

const turns: Turn[] = [
  { role: 'user', text: '帮我写一段请假消息。' },
  { role: 'assistant', text: '好的，这是一段请假消息：「主管您好，因家中有事，明日需请一天事假……」' },
  { role: 'user', text: '语气随和一点。' },
  { role: 'assistant', text: '「头儿，明天家里有点事，想请一天假哈，手头的东西今天都整好～」' },
  { role: 'user', text: '再短一点。' },
  { role: 'assistant', text: '「头儿，明天请个假，今天把活儿收尾好～」' },
]

export function Chapter01() {
  const [step, setStep] = useState(1)

  const visibleChat = turns.slice(0, step)
  const userTurnCount = Math.ceil(step / 2)

  const reset = () => {
    setStep(1)
  }
  const next = () => {
    setStep((s) => Math.min(s + 1, turns.length))
  }

  return (
    <Section
      id="ch-1"
      index="02"
      eyebrow="多轮对话 · 到底发生了什么"
      title={
        <>
          <span className="block">它怎么能</span>
          <span className="block">
            一直<span className="text-ember">接得上话</span>
          </span>
        </>
      }
      caption={'不是「记住了」——是每一轮把前文又看了一遍'}
      accent="--color-rose"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <Pull>
            它之所以「看起来记得你刚说了什么」，通常并不是把这些内容永久存在了脑子里。更真实的情况是：你每发一条新消息，系统会把之前的聊天连同这条新的一起，再摊到它面前。
          </Pull>

          <P>
            换个说法就是——它能接着聊下去，靠的往往不是<Mark>「记住了」</Mark>，而是<Mark>「又被摊开看了一遍」</Mark>。
          </P>

          <H3>先分清：单轮和多轮</H3>
          <P>
            <strong>单轮</strong> 很直白：你问一句，它答一句。比如发「帮我写段请假消息」，它看一眼，回答，这一轮就结束了。
          </P>
          <P>
            <strong>多轮</strong> 不是「从第二轮开始重启」。更接近实情的说法是：第 2、3、4 轮，系统通常会把前面的聊天再带上一次，一起交给它。所以你才会觉得它「一直跟得上」。
          </P>

          <H3>看一个例子</H3>
          <P>右边是你在聊天框里看到的样子；旁边那一栏是<Mark>它这一轮真正看到的内容</Mark>。每点一次「下一步」，你就会发现：在它的视角里，前面那几条被重新摊开了一遍。</P>

          <H3>所以——它不是「记住」，是「又看了一遍」</H3>
          <P>刚开始很多人会这样想：</P>
          <UL>
            <LI>它把我说过的话都记下来了</LI>
            <LI>它在脑子里一直想着这些内容</LI>
            <LI>所以才能一路接得上</LI>
          </UL>
          <P>但更贴近真相的版本是：</P>
          <UL>
            <LI>你发来一条新消息</LI>
            <LI>系统把前面的聊天连同这条新消息一并递过去</LI>
            <LI>它重新看过一遍，再生成这一轮的回答</LI>
          </UL>

          <H3>一个小铺垫</H3>
          <P>
            为了先建立直觉，这一章可以按这个近似理解：<em>对话还不太长的时候，每一轮它都会把前面的聊天再看一遍</em>。但这件事不是永远成立——聊得很长以后，它就未必还能全都看到了。下一章就来讲这件事。
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  interactive · 一步一步发消息
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  当前第 {userTurnCount} 轮 · 共 3 轮
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={reset}
                  className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:bg-cream"
                >
                  重置
                </button>
                <button
                  disabled={step >= turns.length}
                  onClick={next}
                  className="rounded-full border-2 border-ink bg-rose px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  下一步 →
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border-2 border-ink bg-paper p-4 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                    你看到的 · chat
                  </div>
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-ember" />
                    <span className="h-2 w-2 rounded-full bg-sun" />
                    <span className="h-2 w-2 rounded-full bg-leaf" />
                  </div>
                </div>
                <div className="flex max-h-[320px] min-h-[260px] flex-col gap-2 overflow-y-auto">
                  {visibleChat.map((t, i) => (
                    <div
                      key={i}
                      className={`max-w-[85%] rounded-2xl border border-ink/10 px-3 py-2 text-sm ${
                        t.role === 'user'
                          ? 'ml-auto bg-sky/20'
                          : 'mr-auto bg-cream'
                      }`}
                    >
                      {t.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rotate-tilt-2 rounded-3xl border-2 border-ink bg-ember/95 p-4 text-paper shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-mono text-[10px] tracking-widest uppercase">
                    模型这一轮实际看到的
                  </div>
                  <div className="font-mono text-[10px] uppercase">raw</div>
                </div>
                <div className="max-h-[320px] min-h-[260px] space-y-1.5 overflow-y-auto font-mono text-[11px] leading-relaxed">
                  {visibleChat.length === 0 && (
                    <div className="opacity-60">（暂无输入）</div>
                  )}
                  {visibleChat.map((t, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="shrink-0 opacity-60">
                        {t.role === 'user' ? '[user]' : '[assistant]'}
                      </span>
                      <span>{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink/15 bg-cream/60 p-4 text-sm text-ink/80">
              <span className="font-semibold">💡 留意一下：</span>{' '}
              你每发一条新消息，它「看到的」不只是这一条——前面几轮，都被又摊在了它面前一次。
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它的运作更像「输入 → 输出」，而不是「记住 → 思考 → 永久保存」。它之所以能接得上话，通常是因为——前面的聊天，每一轮又被重新看了一次。
      </KeyLine>
    </Section>
  )
}

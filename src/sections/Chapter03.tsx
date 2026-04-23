import { useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, UL } from '../components/Prose'
import { Section } from '../components/Section'

type Msg = { id: number; text: string; fromUser: boolean }

const scriptedTurns: { text: string; fromUser: boolean }[] = [
  { text: '帮我写一篇文章：面向第一次接触这个主题的读者', fromUser: true },
  { text: '语气要通俗，不要讲底层原理', fromUser: true },
  { text: '每章末尾都要有一句总结', fromUser: true },
  { text: '好的，收到。我先列一个大纲。', fromUser: false },
  { text: '把第二章再展开一点', fromUser: true },
  { text: '我重新写了一版，请看', fromUser: false },
  { text: '标题再直白一点', fromUser: true },
  { text: '例子换成更生活化的', fromUser: true },
  { text: '排版能不能更松弛点', fromUser: true },
  { text: '这段的「术语」帮我改得更通俗', fromUser: true },
  { text: '第三章开头再加个类比', fromUser: true },
  { text: '这个转折有点硬', fromUser: true },
]

const capacity = 5

export function Chapter03() {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [forgotten, setForgotten] = useState<Msg[]>([])
  const allRef = useRef<Msg[]>([])
  const idRef = useRef(0)
  const stepRef = useRef(0)

  const addTurn = () => {
    const next = scriptedTurns[stepRef.current % scriptedTurns.length]
    stepRef.current += 1
    idRef.current += 1
    const newMsg: Msg = { id: idRef.current, ...next }

    const all = [...allRef.current, newMsg]
    allRef.current = all

    const overflowCount = Math.max(0, all.length - capacity)
    setMsgs(all.slice(overflowCount))
    setForgotten(all.slice(0, overflowCount).slice(-12).reverse())
  }

  const reset = () => {
    allRef.current = []
    setMsgs([])
    setForgotten([])
    idRef.current = 0
    stepRef.current = 0
  }

  const confused = forgotten.length >= 3

  return (
    <Section
      id="ch-3"
      index="04"
      eyebrow={'所谓「失忆」，其实是被挤出去了'}
      title={
        <>
          <span className="block">为什么聊久了</span>
          <span className="block">
            它会<span className="text-ember">"忘"</span>？
          </span>
        </>
      }
      caption="不是它变笨，是那段内容已经不在它眼前了"
      accent="--color-violet"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            几乎每个人都遇到过这一幕：一开始聊得挺顺，越聊越像回事；到后半段，它突然像换了个人——
          </P>
          <UL>
            <LI>忘了你前面提过的要求</LI>
            <LI>语气和风格开始跑偏</LI>
            <LI>把已经讲过的又说一次</LI>
            <LI>对不上你眼下正在做的事</LI>
            <LI>甚至开始答非所问</LI>
          </UL>
          <P>
            第一反应往往是——「它失忆了」「它变笨了」。更接近的解释通常是另一种：
            <Mark>前面那部分内容，它现在已经看不到了。</Mark>
          </P>

          <H3>为什么会看不到</H3>
          <P>聊得越长，前文越多，可它每一轮能看到的总量是有限的。于是早先的内容就可能遇到这三件事：</P>
          <UL>
            <LI>被直接截掉</LI>
            <LI>被压成更短的摘要</LI>
            <LI>被后来的新内容挤出去</LI>
          </UL>
          <P>只要那部分不在这一轮能看到的范围里，它就没法继续靠那部分来答你了。</P>

          <H3>它有时会「假装还记得」</H3>
          <P>这里有一个特别容易把人带偏的点：就算它已经看不到早期内容，它也未必会老老实实说「我不知道了」。它常常会继续答，而且答得挺流畅——这就容易让人误会：「它应该还记得，只是没认真做。」</P>
          <P>更真实的情况常常是：它在拿眼前还剩下的材料努力往下接，可缺失的信息已经让方向偏了。所以，<Mark>「讲得顺」不等于「它还握着完整的背景」。</Mark></P>

          <H3>遇到这种情况，该这么想</H3>
          <P>最有用的心态不是埋怨它「怎么又忘了」，而是先问一句：<em>前面那几条关键要求，还在它眼前吗？</em>一旦有了这个判断，后面的处理就会很自然：</P>
          <UL>
            <LI>把关键要求再贴一遍</LI>
            <LI>用几条笔记把前面已经定下来的结论概括一下</LI>
            <LI>或者换个新对话，把必要背景重新给全</LI>
          </UL>
        </Prose>

        <div className="relative min-w-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  interactive · 一直发下去看看
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  窗口容量 = {capacity}。超出的部分，会从最老那端被挤出去。
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={reset}
                  className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase hover:bg-cream"
                >
                  重置
                </button>
                <button
                  onClick={addTurn}
                  className="rounded-full border-2 border-ink bg-violet px-4 py-1.5 font-mono text-xs tracking-widest text-paper uppercase hover:-translate-y-0.5"
                >
                  下一条 +
                </button>
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl border-2 border-ink bg-violet/10 shadow-card">
              <div className="flex items-center justify-between border-b border-ink/15 bg-violet/15 px-4 py-2 font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                <span>模型眼里的上下文窗口</span>
                <span>
                  {msgs.length} / {capacity}
                </span>
              </div>

              <div className="relative h-[220px] overflow-hidden px-4 pt-6 pb-5">
                <div className="flex h-full w-full items-end gap-3">
                  {msgs.map((m, i) => {
                    const tilt = (i % 2 === 0 ? -1 : 1) * (1 + (i % 3))
                    return (
                      <div
                        key={m.id}
                        className="flex min-w-0 flex-1 flex-col gap-1 rounded-2xl border-2 border-ink p-3 text-sm shadow-paper transition-all duration-500"
                        style={{
                          background: m.fromUser ? '#ffd7de' : '#fdf9f1',
                          transform: `translateY(0) rotate(${tilt}deg)`,
                        }}
                      >
                        <span className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                          {m.fromUser ? 'you' : 'model'}
                        </span>
                        <span className="line-clamp-3 leading-snug">{m.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="border-t-2 border-dashed border-ink/30 bg-ink/5 px-4 py-3">
                <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                  <span>已经看不到了 · forgotten</span>
                  <span>{forgotten.length} 条</span>
                </div>
                <div className="flex min-h-[60px] flex-wrap gap-2">
                  {forgotten.length === 0 ? (
                    <div className="self-center text-sm text-ink/40">（还没有被挤出去的）</div>
                  ) : (
                    forgotten.map((m, i) => (
                      <div
                        key={m.id}
                        className="rounded-xl border border-ink/30 bg-paper/60 px-2.5 py-1 text-xs text-ink/55 line-through opacity-70"
                        style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` }}
                      >
                        {m.text.length > 14 ? `${m.text.slice(0, 14)}…` : m.text}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div
              className={`mt-4 rounded-2xl border-2 p-4 transition-all ${
                confused
                  ? 'border-ember bg-ember/15'
                  : 'border-ink/15 bg-cream/60'
              }`}
            >
              {confused ? (
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">🥲 它开始"飘"了：</span> 最早那几条重要要求——"面向新手"、"不讲原理"、"每章结尾要总结"——已经被挤出了它的视野。它会继续答，而且答得挺顺，但方向可能在慢慢偏掉。
                </p>
              ) : (
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">💡 暂时还稳：</span>{' '}
                  前面那几条关键要求还在它的视野里，所以眼下的回答还踩得上你的节奏。
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它「忘了」，多半不是变笨了，而是那段内容已经不在它这一轮能看到的范围里了。
      </KeyLine>
    </Section>
  )
}

import { useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

interface Twin {
  id: string
  topic: string
  question: string
  plausible: string
  truth: string
  hint: string
}

const twins: Twin[] = [
  {
    id: 'api',
    topic: '软件版本',
    question: 'XX 框架 v18 里怎么开启 concurrent 模式？',
    plausible:
      '只需要在入口文件调用 `ReactDOM.concurrentRoot(container).render(<App />)`，并把 `concurrent: true` 加到 package.json 的 react 字段里即可开启。',
    truth:
      '这段话里「concurrentRoot」这个 API 并不存在；`package.json` 里也没有 concurrent 配置。它把一些看似相近的名字拼成了一个流畅但凭空的答案。',
    hint: '看起来像一段标准教程——但 API 名和配置项都是编的。',
  },
  {
    id: 'book',
    topic: '冷门引用',
    question: '《XX 之书》第 7 章的那句关于「清晨」的名句原文是什么？',
    plausible:
      '原文是："清晨之所以珍贵，是因为它属于那些愿意比世界更早一点醒来的人。"——这句话出自第 7 章第 3 节，已被多次引用。',
    truth:
      '当它对"这本书存不存在"或"第 7 章到底写了什么"都没把握时，它依然可能流畅地"补"出一段像样的原文——连章节与节数都像真的。',
    hint: '越是冷门、越是"具体"的引用，越容易被它凭感觉补齐。',
  },
  {
    id: 'law',
    topic: '数字/规定',
    question: '某某法规定，连续加班超过几小时需要额外补偿？',
    plausible:
      '根据《某某法》第 34 条，连续加班超过 36 小时须按日工资 2 倍进行补偿，并在次月一并发放。',
    truth:
      '条文号、小时数、倍数、发放时间，每一个看起来都"具体且合理"，但都可能是它根据常见模式"顺出来"的。法规类问题最忌默认它知道。',
    hint: '条款号、数字、时间点——越精确的细节，越值得自己再核一遍。',
  },
]

const flags = [
  { label: '语气很笃定', color: '#ff5a3c' },
  { label: '细节出奇精确', color: '#ffb020' },
  { label: '你也不熟悉这个领域', color: '#8a5cff' },
]

export function Chapter06() {
  const [picked, setPicked] = useState(twins[0])
  const [revealed, setRevealed] = useState(false)

  const choose = (t: Twin) => {
    setPicked(t)
    setRevealed(false)
  }

  return (
    <Section
      id="ch-6"
      index="08"
      eyebrow="流畅 ≠ 正确"
      title={
        <>
          <span className="block">它也会</span>
          <span className="block">
            <span className="text-ember">一本正经地</span>说错。
          </span>
        </>
      }
      caption="刚开始最容易踩的坑，不是低估它，而是高估它"
      accent="--color-ember"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            新人最容易踩的坑，不是"它答不上来"——而是它答得<em>太顺了</em>。它的语气稳、结构完整、细节具体，看起来很像权威答案。可是：<Mark>说得像样 ≠ 内容真对。</Mark>
          </P>

          <Pull>
            它并不总会说「我不知道」。它更常做的是：在不知道的地方，照着"像样的样子"把话补齐。
          </Pull>

          <H3>为什么会这样</H3>
          <P>
            这和它的工作方式有关。它擅长把一段话<Mark>组织得像模像样</Mark>——用上合理的词、合理的结构、合理的例子。但「组织得合理」和「内容上准确」是两件事。当它手里的信息不足时，它并不总会停下来承认，而是会用最像那回事的方式继续往下说。
          </P>
          <P>业内给这件事起了个名字：<strong>幻觉（hallucination）</strong>。它指的不是它故意骗你，而是它在没把握的地方，会用很自信的语气"补"出内容。</P>

          <H3>最容易中招的三种问题</H3>
          <P><strong>1. 训练之后才发生的事。</strong> 最新新闻、昨天刚发的版本、今天的价格和政策——训练一结束，它就接不上了。</P>
          <P><strong>2. 你的私有信息。</strong> 公司内部文档、团队刚开完的会、你电脑里的本地文件——你没递给它，它就凭空猜不到。</P>
          <P><strong>3. 冷门、具体、对细节精度要求高的内容。</strong> 冷门引用、具体的条文号、精确的数字、稀有 API 的参数名——一旦它不太熟，很容易"顺"出一段看似合理的错答案。</P>

          <H3>怎么判断一个回答可不可信</H3>
          <P>有三个红灯可以留意：</P>
          <UL>
            <LI>它的语气异常笃定，完全没有「可能 / 大致 / 我记得」这类保留</LI>
            <LI>细节出奇精确——条文号、版本号、年份、章节号都咬得死死的</LI>
            <LI>这个话题你本身不熟，没法一眼看出它在说什么</LI>
          </UL>
          <P>
            这三条同时亮起时，就别默认它是对的。你能做的很简单：<Mark>让它联网查一下、或者自己再核一遍</Mark>。比起"事后发现错"，这几秒钟永远是值得的。
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-5">
            <div>
              <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                interactive · 它在这里"顺"了一段
              </div>
              <p className="mt-1 text-sm text-ink/70">
                看看它写得有多顺——再翻面看看，真相是什么。
              </p>
            </div>

            <div className="grid gap-2">
              {twins.map((t) => (
                <button
                  key={t.id}
                  onClick={() => choose(t)}
                  className={`group flex items-center justify-between gap-3 rounded-xl border-2 border-ink bg-paper px-4 py-3 text-left transition-all hover:-translate-y-0.5 ${
                    picked.id === t.id ? 'shadow-card' : ''
                  }`}
                >
                  <span className="text-sm font-medium">{t.question}</span>
                  <span className="shrink-0 rounded-full border border-ink bg-ember/20 px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                    {t.topic}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-card">
              <div className="flex items-center justify-between border-b-2 border-ink bg-ember/15 px-5 py-3">
                <div className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">
                  它给你的回答
                </div>
                <button
                  onClick={() => setRevealed((v) => !v)}
                  className="rounded-full border-2 border-ink bg-paper px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition hover:bg-ember hover:text-paper"
                >
                  {revealed ? '← 再看一遍回答' : '翻面 · 真相 →'}
                </button>
              </div>

              <div className="relative min-h-[200px] px-5 py-5">
                {!revealed ? (
                  <div>
                    <div className="mb-2 font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                      plausible · 听起来很对
                    </div>
                    <p className="leading-relaxed text-ink">{picked.plausible}</p>
                    <div className="mt-4 rounded-xl border border-ink/20 bg-paper/70 px-3 py-2 text-xs text-ink/65">
                      💡 注意力放在：它的语气 / 细节精度 / 有没有一丝犹豫
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-2 font-mono text-[10px] tracking-widest text-ink/55 uppercase">
                      truth · 实际上
                    </div>
                    <p className="leading-relaxed text-ink">{picked.truth}</p>
                    <div className="mt-4 rounded-xl border-2 border-ember bg-ember/15 px-3 py-2 text-sm">
                      ⚠ {picked.hint}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="mb-3 font-mono text-xs tracking-widest text-ink/55 uppercase">
                三个红灯同时亮，别直接当真
              </div>
              <div className="flex flex-wrap gap-2">
                {flags.map((p) => (
                  <span
                    key={p.label}
                    className="rounded-full border-2 border-ink px-3 py-1.5 text-sm font-medium"
                    style={{ background: p.color, color: '#fdf9f1' }}
                  >
                    ⚠ {p.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它答得顺，不等于答得对。最容易栽的一刻，是你根本没想过「这句话会不会是它顺手编的」。
      </KeyLine>
    </Section>
  )
}

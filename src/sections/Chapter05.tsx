import { useEffect, useRef, useState } from 'react'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, Pull, UL } from '../components/Prose'
import { Section } from '../components/Section'

const topics = [
  { id: 'history', label: '历史', color: '#ffb020' },
  { id: 'code', label: '编程', color: '#4b8bff' },
  { id: 'writing', label: '写作', color: '#ff7a9a' },
  { id: 'travel', label: '旅行', color: '#3ea16d' },
  { id: 'market', label: '营销', color: '#8a5cff' },
  { id: 'life', label: '职场', color: '#ff5a3c' },
]

const sampleWords = [
  '春秋', '函数', '叙事', '机票', '漏斗', '年报',
  '唐诗', '递归', '结构', '攻略', '转化', '沟通',
  '典故', '链表', '伏笔', '签证', '曝光', '分层',
  '事件', '泛型', '节奏', '车站', '投放', '反馈',
  '朝代', '闭包', '意象', '住宿', '复购', '目标',
  '疆域', '并发', '留白', '预算', '裂变', '协作',
]

export function Chapter05() {
  const [topic, setTopic] = useState(topics[0])
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
    }
    resize()

    const particles = Array.from({ length: 70 }).map((_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4 * dpr,
      vy: (Math.random() - 0.5) * 0.4 * dpr,
      word: sampleWords[i % sampleWords.length],
      alpha: 0.2 + Math.random() * 0.5,
    }))

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${12 * dpr}px "JetBrains Mono", monospace`
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.fillStyle = `rgba(26, 22, 20, ${p.alpha})`
        ctx.fillText(p.word, p.x, p.y)
      }

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 180 * dpr)
      grad.addColorStop(0, `${topic.color}ee`)
      grad.addColorStop(1, 'rgba(253, 249, 241, 0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, 180 * dpr, 0, Math.PI * 2)
      ctx.fill()

      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [topic])

  return (
    <Section
      id="ch-5"
      index="06"
      eyebrow="它像一个读过很多材料的人"
      title={
        <>
          <span className="block">它怎么会</span>
          <span className="block">
            <span className="underline-sketch">知道</span>这么多事？
          </span>
        </>
      }
      caption="训练阶段见过一大堆材料——但训练一结束，它就不再更新了"
      accent="--color-sun"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            第一次认真用它的人，常会有一种小震撼：它怎么什么都能聊一点？历史、电影、写作、编程、营销、旅行、职场——你问什么，它都能接得上。于是一个问题自然冒出来：它凭什么知道这么多？
          </P>
          <P>最朴素的回答是：<Mark>因为在训练阶段，它已经接触过大量的文本。</Mark></P>

          <H3>不是现场才学会的</H3>
          <P>
            你今天问它一个知识点，它并不是在这一刻才「学会」这件事。更接近事实的是：它在训练过程中早就接触过一大堆相关资料，于是形成了比较强的表达与组织能力。
          </P>
          <P>
            所以它给你的感觉，更像一个<Mark>「读过很多材料的人」</Mark>，而不是一个「一边搜一边拼答案的搜索框」。
          </P>

          <H3>为什么它回答起来能像模像样</H3>
          <P>因为训练阶段接触的信息范围很广，它慢慢学会了一些事，比如：</P>
          <ul className="mb-5 space-y-2 pl-1">
            <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">常见的概念，通常会被怎么描述</li>
            <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">某一类问题，一般会怎样作答</li>
            <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">什么样的解释，会让人觉得「讲通了」</li>
            <li className="relative pl-7 before:absolute before:top-[0.7em] before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-sun">什么样的结构，读起来更像一篇完整的文章</li>
          </ul>
          <P>
            于是当你提问时，它并不是简单地把一段话背出来，而是在已有能力的基础上，把「见过很多次的表达方式」重新组织成这一次的回答。
          </P>

          <Pull>
            它未必记得每本书每一页的原文，但它对很多主题已经很熟——你一问，它能快速拼出一段像样的话。
          </Pull>

          <H3>但训练有一个明确的「截止日期」</H3>
          <P>
            这里有一件对新人特别关键的事：<Mark>训练不是一件持续发生的事，而是一次性的。</Mark>做一次模型，就对应一份在某个时间点之前收集到的材料。等它训练完、上线、和你对话，它其实已经「停在那个时刻」了——训练之后发生的事，它并不知道。
          </P>
          <P>所以它的「知识」有几个自然边界：</P>
          <UL>
            <LI>只覆盖到某个时间点之前</LI>
            <LI>那之后的新闻、版本、数据，它接不上</LI>
            <LI>它自己未必会提醒你「这我不知道」</LI>
          </UL>

          <H3>但「知道很多」 ≠ 「什么都知道」</H3>
          <P>
            它最容易给人的一个错觉是：既然什么都能聊，是不是就等于什么都懂？并不是。它只是「接触过很多内容，因此在很多主题上能给出像样的回答」而已——这和「全知全能」是两回事。下一章，就专门讲它「不知道什么」、以及它有时会<em>怎么一本正经地说错</em>。
          </P>
        </Prose>

        <div className="relative">
          <div className="sticky top-24 space-y-5">
            <div>
              <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                interactive · 换个主题试试
              </div>
              <p className="mt-1 text-sm text-ink/70">
                在海量训练材料里，每个主题都有它自己的「熟悉区」。
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-card">
              <canvas ref={canvasRef} className="h-[360px] w-full" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-ink bg-paper text-center font-mono text-xs tracking-widest uppercase shadow-card">
                  <span>
                    它对
                    <span className="font-display mx-1 text-xl font-bold" style={{ color: topic.color }}>
                      {topic.label}
                    </span>
                    熟悉
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTopic(t)}
                  className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-medium transition-all ${
                    topic.id === t.id
                      ? 'shadow-card -translate-y-0.5'
                      : 'hover:-translate-y-0.5'
                  }`}
                  style={{ background: topic.id === t.id ? t.color : 'transparent' }}
                >
                  # {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它知道很多，主要是因为训练阶段看过大量资料——不是因为它每次都在现场上网学习。
      </KeyLine>
    </Section>
  )
}

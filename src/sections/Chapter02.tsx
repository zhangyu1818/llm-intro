import { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'

import { KeyLine } from '../components/KeyLine'
import { H3, LI, Mark, P, Prose, UL } from '../components/Prose'
import { Section } from '../components/Section'

type Doc = { id: number; label: string; size: number; color: string }

const library: Omit<Doc, 'id'>[] = [
  { label: '聊天记录', size: 34, color: '#ffb020' },
  { label: '一份 PDF', size: 60, color: '#ff5a3c' },
  { label: '系统说明', size: 18, color: '#4b8bff' },
  { label: '用户偏好', size: 14, color: '#3ea16d' },
  { label: '新闻摘要', size: 26, color: '#ff7a9a' },
  { label: '长文档', size: 80, color: '#8a5cff' },
]

const sizePresets = [
  { id: 'small', label: '小桌面', value: 100, hint: '较短上下文' },
  { id: 'medium', label: '中桌面', value: 180, hint: '常见上下文' },
  { id: 'big', label: '大桌面', value: 320, hint: '更长上下文' },
]

export function Chapter02() {
  const [desk, setDesk] = useState(sizePresets[1])
  const [docs, setDocs] = useState<Doc[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<HTMLDivElement | null>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const renderRef = useRef<Matter.Render | null>(null)
  const runnerRef = useRef<Matter.Runner | null>(null)
  const deskBodiesRef = useRef<Matter.Body[]>([])
  const floorRef = useRef<Matter.Body | null>(null)

  const totalSize = docs.reduce((s, d) => s + d.size, 0)
  const overflow = Math.max(0, totalSize - desk.value)
  const fillPct = Math.min(100, (totalSize / desk.value) * 100)

  const deskWidthRatio =
    desk.id === 'small' ? 0.32 : desk.id === 'medium' ? 0.6 : 0.88

  useEffect(() => {
    const scene = sceneRef.current
    const container = containerRef.current
    if (!scene || !container) return

    const width = scene.clientWidth
    const height = scene.clientHeight

    const engine = Matter.Engine.create({ gravity: { x: 0, y: 1.1 } })
    const render = Matter.Render.create({
      element: scene,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio,
      },
    })
    const runner = Matter.Runner.create()

    const floor = Matter.Bodies.rectangle(width / 2, height - 4, width, 8, {
      isStatic: true,
      render: { fillStyle: '#1a1614' },
    })
    Matter.World.add(engine.world, floor)

    Matter.Render.run(render)
    Matter.Runner.run(runner, engine)

    engineRef.current = engine
    renderRef.current = render
    runnerRef.current = runner
    floorRef.current = floor

    return () => {
      Matter.Render.stop(render)
      Matter.Runner.stop(runner)
      Matter.World.clear(engine.world, false)
      Matter.Engine.clear(engine)
      render.canvas.remove()
    }
  }, [])

  useEffect(() => {
    const engine = engineRef.current
    const render = renderRef.current
    if (!engine || !render) return

    const sceneWidth = render.canvas.width / window.devicePixelRatio
    const sceneHeight = render.canvas.height / window.devicePixelRatio
    const deskW = sceneWidth * deskWidthRatio
    const deskLeft = (sceneWidth - deskW) / 2
    const deskTopY = sceneHeight - 80

    if (deskBodiesRef.current.length) {
      Matter.World.remove(engine.world, deskBodiesRef.current)
    }
    const top = Matter.Bodies.rectangle(sceneWidth / 2, deskTopY, deskW, 12, {
      isStatic: true,
      render: { fillStyle: '#1a1614' },
      chamfer: { radius: 4 },
    })
    const leftLeg = Matter.Bodies.rectangle(deskLeft + 12, sceneHeight - 40, 10, 70, {
      isStatic: true,
      render: { fillStyle: '#1a1614' },
    })
    const rightLeg = Matter.Bodies.rectangle(deskLeft + deskW - 12, sceneHeight - 40, 10, 70, {
      isStatic: true,
      render: { fillStyle: '#1a1614' },
    })
    Matter.World.add(engine.world, [top, leftLeg, rightLeg])
    deskBodiesRef.current = [top, leftLeg, rightLeg]
  }, [deskWidthRatio])

  useEffect(() => {
    const engine = engineRef.current
    const render = renderRef.current
    if (!engine || !render) return

    const sceneWidth = render.canvas.width / window.devicePixelRatio
    const sceneHeight = render.canvas.height / window.devicePixelRatio
    const deskW = sceneWidth * deskWidthRatio
    const deskLeft = (sceneWidth - deskW) / 2
    const deskTopY = sceneHeight - 80

    const keepStatic = new Set<Matter.Body>([...deskBodiesRef.current])
    if (floorRef.current) keepStatic.add(floorRef.current)
    const nonStatic = engine.world.bodies.filter((b) => !keepStatic.has(b))
    Matter.World.remove(engine.world, nonStatic)

    let x = deskLeft + 16
    let cumulative = 0

    docs.forEach((doc) => {
      const w = Math.max(40, doc.size * 1.2)
      const h = 22
      x += w / 2
      const startX = x
      x += w / 2 + 4
      cumulative += doc.size

      const willFall = cumulative > desk.value
      const yStart = willFall ? deskTopY - 220 : deskTopY - h / 2 - 2 - Math.random() * 2
      const initialX = willFall ? sceneWidth - 30 - Math.random() * 20 : startX

      const box = Matter.Bodies.rectangle(initialX, yStart, w, h, {
        restitution: 0.25,
        friction: 0.7,
        frictionAir: 0.02,
        chamfer: { radius: 4 },
        render: {
          fillStyle: doc.color,
          strokeStyle: '#1a1614',
          lineWidth: 2,
        },
      })

      if (willFall) {
        Matter.Body.setVelocity(box, { x: -4 - Math.random() * 2, y: -1 })
        Matter.Body.setAngularVelocity(box, (Math.random() - 0.5) * 0.2)
      }

      Matter.World.add(engine.world, box)
    })
  }, [docs, desk.value, deskWidthRatio])

  const addDoc = (preset: Omit<Doc, 'id'>) => {
    setDocs((prev) => [...prev, { ...preset, id: Date.now() + Math.random() }])
  }
  const clearDocs = () => {
    setDocs([])
  }

  return (
    <Section
      id="ch-2"
      index="03"
      eyebrow="它的桌面有多大"
      title={
        <>
          <span className="block">聊天记录</span>
          <span className="block">
            不是<span className="stroke-sketch">无限</span>往上叠的
          </span>
        </>
      }
      caption="它这一轮看得到的，只有眼前桌子上摊开的那一叠"
      accent="--color-sky"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>
          <P>
            聊天软件的记录能一直往上翻，于是很多人会下意识以为：它也能从头看到尾。实际上通常并不行。
            <Mark>它这一轮能看到的总量是有上限的——这个上限就叫「上下文长度」。</Mark>
          </P>

          <H3>上下文长度到底在说什么</H3>
          <P>最朴素的理解是：这一轮要答你时，它最多能「摊开」多少东西。这个「东西」远不止你刚发的那一句，还包括：</P>
          <UL>
            <LI>之前几轮的聊天记录</LI>
            <LI>你这次附上的文档</LI>
            <LI>系统在背后给它的额外说明</LI>
            <LI>它自己正要写、还没写完的那部分</LI>
          </UL>
          <P>所以「上下文长度」其实不是「能聊多久」，而是「它这一轮眼前能摆开多少」。</P>

          <H3>桌面装不下的时候</H3>
          <P>它并不是守着一个无限长的聊天窗口。更接近的画面是：每次回答，系统会把这一轮相关的内容拿出来，摊到它面前。内容越多，就会撞上一个很现实的问题——桌面不够用了。这时候通常就得做取舍：</P>
          <UL>
            <LI>优先保留最近发生的</LI>
            <LI>优先保留更关键的</LI>
            <LI>把一部分旧内容压成更短的摘要</LI>
            <LI>或者干脆让最早的那部分不再进入这一轮</LI>
          </UL>
          <P>所以：你在聊天界面里能翻到很久以前，不等于它每一轮还都能看到全部历史。</P>

          <H3>不同模型，桌子大小也不一样</H3>
          <UL>
            <LI>小一点的模型，通常只能处理较短的内容</LI>
            <LI>大一点的模型，通常能撑住更长的内容</LI>
            <LI>不同产品、不同版本，差别可能会很大</LI>
          </UL>
          <P>但无论差多少，有一条是共通的：<Mark>再长，也不是无限长。</Mark></P>
        </Prose>

        <div className="relative" ref={containerRef}>
          <div className="sticky top-24">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  interactive · 往桌面上堆点东西
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  装得下的留在桌上，装不下的会真的掉下去。切一下桌子大小试试。
                </p>
              </div>
              <button
                onClick={clearDocs}
                className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase hover:bg-cream"
              >
                清空
              </button>
            </div>

            <div className="mt-5 flex gap-2">
              {sizePresets.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setDesk(p)}
                  className={`flex-1 rounded-xl border-2 border-ink px-3 py-2 text-left transition-all ${
                    desk.id === p.id ? 'bg-sky text-paper shadow-card' : 'bg-paper hover:-translate-y-0.5'
                  }`}
                >
                  <div className="text-sm font-semibold">{p.label}</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase opacity-70">
                    {p.hint}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-full border-2 border-ink bg-paper">
              <div
                className={`h-3 transition-all duration-300 ${overflow > 0 ? 'bg-ember' : 'bg-leaf'}`}
                style={{ width: `${fillPct}%` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[10px] tracking-widest text-ink/60 uppercase">
              <span>已占 {totalSize}</span>
              <span>上限 {desk.value}</span>
            </div>
            {overflow > 0 && (
              <div className="mt-2 rounded-xl border-2 border-ember bg-ember/15 px-3 py-2 text-sm">
                超出 {overflow} · 放不下的已经掉到桌外了
              </div>
            )}

            <div
              ref={sceneRef}
              className="mt-5 h-[340px] w-full overflow-hidden rounded-3xl border-2 border-ink bg-sky/20 shadow-card"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(75,139,255,0.15), rgba(75,139,255,0.05) 60%, rgba(26,22,20,0.04))',
              }}
            />

            <div className="mt-5">
              <div className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                抽屉 · 点一下，放到桌上
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {library.map((doc, i) => (
                  <button
                    key={i}
                    onClick={() => addDoc(doc)}
                    className="rounded-full border-2 border-ink px-3 py-1.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-card"
                    style={{ background: doc.color }}
                  >
                    + {doc.label}
                    <span className="ml-1 font-mono text-[10px] opacity-70">{doc.size}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyLine>
        它不是一直盯着完整的聊天记录，而是每一轮只看「当下能摆上桌的那一摞」。
      </KeyLine>
    </Section>
  )
}

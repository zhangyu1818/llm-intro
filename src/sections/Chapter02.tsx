import { useEffect, useRef, useState } from 'react'

import Matter from 'matter-js'

import { KeyLine } from '../components/KeyLine'
import { Prose } from '../components/Prose'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { cn } from '../utils/cn'
import content from './Chapter02.i18n'

interface Doc { color: string; id: number; label: string; size: number; }

export function Chapter02() {
  const t = content[useLocale()]
  const [desk, setDesk] = useState(t.sizePresets[1])
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
    if (!scene || !container) {return}

    const width = scene.clientWidth
    const height = scene.clientHeight

    const engine = Matter.Engine.create({ gravity: { x: 0, y: 1.1 } })
    const render = Matter.Render.create({
      element: scene,
      engine,
      options: {
        background: 'transparent',
        height,
        pixelRatio: window.devicePixelRatio,
        width,
        wireframes: false,
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
    if (!engine || !render) {return}

    const sceneWidth = render.canvas.width / window.devicePixelRatio
    const sceneHeight = render.canvas.height / window.devicePixelRatio
    const deskW = sceneWidth * deskWidthRatio
    const deskLeft = (sceneWidth - deskW) / 2
    const deskTopY = sceneHeight - 80

    if (deskBodiesRef.current.length !== 0) {
      Matter.World.remove(engine.world, deskBodiesRef.current)
    }
    const top = Matter.Bodies.rectangle(sceneWidth / 2, deskTopY, deskW, 12, {
      chamfer: { radius: 4 },
      isStatic: true,
      render: { fillStyle: '#1a1614' },
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
    if (!engine || !render) {return}

    const sceneWidth = render.canvas.width / window.devicePixelRatio
    const sceneHeight = render.canvas.height / window.devicePixelRatio
    const deskW = sceneWidth * deskWidthRatio
    const deskLeft = (sceneWidth - deskW) / 2
    const deskTopY = sceneHeight - 80

    const keepStatic = new Set<Matter.Body>(deskBodiesRef.current)
    if (floorRef.current) {keepStatic.add(floorRef.current)}
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
        chamfer: { radius: 4 },
        friction: 0.7,
        frictionAir: 0.02,
        restitution: 0.25,
        render: {
          fillStyle: doc.color,
          lineWidth: 2,
          strokeStyle: '#1a1614',
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
      accent="--color-sky"
      caption={t.caption}
      eyebrow={t.eyebrow}
      id="ch-2"
      index="03"
      title={t.title}
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Prose>{t.prose}</Prose>

        <div ref={containerRef} className="relative">
          <div className="sticky top-24">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs tracking-widest text-ink/55 uppercase">
                  {t.interactive.eyebrow}
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  {t.interactive.hint}
                </p>
              </div>
              <button
                className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-xs tracking-widest uppercase hover:bg-cream"
                onClick={clearDocs}
              >
                {t.interactive.clearBtn}
              </button>
            </div>

            <div className="mt-5 flex gap-2">
              {t.sizePresets.map((p) => (
                <button
                  key={p.id}
                  className={cn(
                    'flex-1 rounded-xl border-2 border-ink px-3 py-2 text-left transition-all',
                    desk.id === p.id ? 'bg-sky text-paper shadow-card' : 'bg-paper hover:-translate-y-0.5',
                  )}
                  onClick={() => setDesk(p)}
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
                className={cn('h-3 transition-all duration-300', overflow > 0 ? 'bg-ember' : 'bg-leaf')}
                style={{ width: `${fillPct}%` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[10px] tracking-widest text-ink/60 uppercase">
              <span>{t.interactive.usedLabel(totalSize)}</span>
              <span>{t.interactive.limitLabel(desk.value)}</span>
            </div>
            {overflow > 0 && (
              <div className="mt-2 rounded-xl border-2 border-ember bg-ember/15 px-3 py-2 text-sm">
                {t.interactive.overflowMsg(overflow)}
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
                {t.interactive.drawerLabel}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {t.library.map((doc, i) => (
                  <button
                    key={i}
                    className="rounded-full border-2 border-ink px-3 py-1.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-card"
                    style={{ background: doc.color }}
                    onClick={() => addDoc(doc)}
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

      <KeyLine>{t.keyLine}</KeyLine>
    </Section>
  )
}

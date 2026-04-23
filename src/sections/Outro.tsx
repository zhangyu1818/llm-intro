import { chapters } from '../data/chapters'

const lines = [
  '它像当场答题的人',
  '每一轮又把前文看了一遍',
  '桌面有限，不是无限',
  '聊久了，早的就被挤出去',
  '整理 > 硬聊',
  '训练让它见得多，但学完就停了',
  '大小号 + 多想一会儿',
  '流畅 ≠ 正确',
  '答两次不一样是正常的',
  '递得越清楚，答得越稳',
  '工具让它够到外部世界',
  'Skills · 按任务取用',
  '它开始自己动手',
  '想 → 做 → 看 · 一直在循环',
  '自由，但别脱缰',
  '忙不过来就叫帮手',
  '产品会变，心智不变',
]

export function Outro() {
  return (
    <section className="relative overflow-hidden border-t-2 border-ink bg-ink text-paper">
      <div className="overflow-hidden border-b border-paper/15 py-4">
        <div className="animate-marquee flex gap-10 font-display text-2xl whitespace-nowrap">
          {[...Array.from({ length: 2 })].map((_, dup) => (
            <div key={dup} className="flex shrink-0 gap-10">
              {lines.map((t, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-10">
                  <span>{t}</span>
                  <span className="text-ember">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <div className="font-mono text-xs tracking-[0.3em] text-paper/60 uppercase">
          The End · But just the beginning
        </div>
        <h2 className="font-display mt-6 text-5xl leading-tight font-extrabold md:text-7xl">
          把它<span className="text-sun">看对了，</span>
          <span className="block">用起来自然就稳了。</span>
        </h2>
        <p className="font-display mt-8 max-w-2xl text-xl text-paper/75 italic md:text-2xl">
          你不需要搞懂它内部是怎么运作的——只要知道它看得见什么、看不见什么，其他都会慢慢落在手里。
        </p>

        <div className="mt-12 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {chapters.slice(1).map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group flex items-baseline justify-between gap-3 rounded-xl border border-paper/15 bg-paper/5 px-4 py-3 transition hover:bg-paper/10"
            >
              <div>
                <div className="font-mono text-[10px] tracking-widest text-paper/55 uppercase">
                  Ch {c.index}
                </div>
                <div className="text-balance">{c.title}</div>
              </div>
              <span className="text-paper/40 transition group-hover:text-sun">↑</span>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6 font-mono text-xs tracking-widest text-paper/55 uppercase">
          <span>A vivid guide to LLMs · 2026</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/zhangyu1818/llm-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 transition hover:text-sun"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current transition group-hover:scale-110"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.486 2 12.02c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.606-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.622.069-.61.069-.61 1.003.071 1.531 1.033 1.531 1.033.892 1.532 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.341-2.221-.254-4.555-1.114-4.555-4.958 0-1.095.39-1.99 1.029-2.692-.103-.253-.446-1.273.098-2.654 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.297 2.748-1.027 2.748-1.027.545 1.381.203 2.401.1 2.654.64.702 1.028 1.597 1.028 2.692 0 3.854-2.338 4.701-4.566 4.95.359.31.678.92.678 1.855 0 1.338-.012 2.418-.012 2.747 0 .268.18.578.688.48A10.021 10.021 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z"
                />
              </svg>
              源码 · GitHub
            </a>
            <a href="#hero" className="transition hover:text-sun">
              回到开头 ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

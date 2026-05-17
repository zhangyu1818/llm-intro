import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '主干活的喊专精的——各管一摊',
  eyebrow: '一个人忙不过来，就喊帮手',
  keyLine: '一个人忙不过来就喊帮手——agent 也一样。把复杂任务拆给几个小帮手各管一摊，比让它独自硬扛更稳。',
  finalReport: `🏢  3 家竞品速查表

· A 公司
  规模 500 人，估值 10 亿
  主打 企业 SaaS
  近况 刚发新版

· B 公司
  规模 200 人
  主打 社交工具
  近况 完成 B 轮融资

· C 公司
  规模 80 人
  主打 开源平台
  近况 开源新模块

— 按字母排序 · 来源已脚注 —`,
  helpers: [
    {
      id: 'data',
      duration: 2200,
      duty: '查规模 / 估值',
      icon: '📊',
      label: '收集数据',
      summary: 'A · 500 人，估值 10 亿\nB · 200 人\nC · 80 人',
      tone: 'bg-sun/30 border-sun',
    },
    {
      id: 'product',
      duration: 4000,
      duty: '看各家主打方向',
      icon: '💼',
      label: '总结产品',
      summary: 'A · 企业 SaaS\nB · 社交工具\nC · 开源平台',
      tone: 'bg-rose/25 border-rose',
    },
    {
      id: 'news',
      duration: 3100,
      duty: '过去一周动向',
      icon: '📰',
      label: '扫近期新闻',
      summary: 'A · 刚发新版\nB · 完成 B 轮\nC · 开源新模块',
      tone: 'bg-leaf/25 border-leaf',
    },
    {
      id: 'edit',
      duration: 1300,
      duty: '统一样式',
      icon: '✍️',
      label: '格式润色',
      summary: '按字母排序\n加来源脚注\n统一标题字号',
      tone: 'bg-violet/25 border-violet',
    },
  ],
  interactive: {
    footNote: '💡 每个帮手只管自己那一摊 · 做完带一段摘要回来 · 主 agent 只管拼出最终产物。',
    helperIdle: '待命',
    helperRunning: '· · ·',
    mergingLabel: '合并中…',
    phaseDispatching: '主 agent · 正在拆任务，准备派帮手……',
    phaseDone: '主 agent · 合并完成，速查表在下方',
    phaseIdle: '主 agent · 待命。点「派出帮手」开始',
    phaseMerging: '主 agent · 4 份摘要都到齐了，正在合并……',
    reportLabel: '📋 主 agent · 把摘要合成最终产物',
    reportPlaceholder: '（等 4 份摘要都回来，这里会拼出一份完整速查表）',
    resetBtn: '重置 ↺',
    task: '给这 3 家竞品做一份速查表',
    taskLabel: '🎯 主 agent 接到的任务',
    phaseRunning: (remaining: number): string => `主 agent · 等 ${remaining} 位帮手做完……`,
    startBtn: (isBusy: boolean, isDone: boolean): string =>
      isDone ? '再跑一次 →' : isBusy ? '正在跑……' : '派出帮手 →',
  },
  prose: (
    <>
      <P>
        前面讲的都是<strong>一个</strong> agent 自己做事。遇到复杂任务，它还可以
        <Mark>叫帮手</Mark>——业内叫「子 agent」（subagent），本质就是
        <strong>派一个专做一件事的小帮手</strong>。
      </P>

      <H3>最好的比喻</H3>
      <P>想象一个项目经理接到任务："做一份竞品速查表。"</P>
      <P>
        他能一个人做吗？能，但慢，而且容易漏。更自然的做法是——
        <Mark>自己管大局，叫几个同事各管一摊</Mark>：
      </P>
      <UL>
        <LI>一个去收集各家规模数据</LI>
        <LI>一个去总结主打产品</LI>
        <LI>一个去扫近期新闻</LI>
        <LI>一个统一格式和排版</LI>
      </UL>
      <P>帮手各自做完，把结果摘要交回来；项目经理收齐 → 合并成一份完整报告。</P>

      <Pull>Agent 现在也这样干：主的拆任务，派一堆小帮手各做一件事，再汇总。</Pull>

      <H3>为什么要这样</H3>
      <UL>
        <LI>
          <strong>分工</strong>：每个帮手只盯一件事，不容易跑题
        </LI>
        <LI>
          <strong>省时</strong>：几件事能<strong>同时做</strong>
        </LI>
        <LI>
          <strong>不塞爆桌子</strong>：主 agent 不用把所有细节都摊在自己面前（想想第 3 章说的"桌面有上限"——子 agent 做完把<strong>摘要</strong>带回来就行）
        </LI>
      </UL>

      <H3>对你的意义</H3>
      <UL>
        <LI>高级 agent 工具里经常弹"正在派子 agent 做 XX"——就是在叫帮手</LI>
        <LI>
          你<strong>自己也可以提出</strong>："这件事分成几小块派出去做"——往往比让它一个人闷头做稳
        </LI>
      </UL>
    </>
  ),
  title: (
    <>
      <span className="block">一个 agent</span>
      <span className="block">
        还能叫<span className="text-ember">帮手</span>。
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: 'The lead hands work to specialists — everyone owns a slice',
  eyebrow: "When one isn't enough, call for backup",
  keyLine: "When one person can't keep up, you call for backup — agents work the same way. Splitting a complex task among a few specialists is much steadier than having one agent grind through it alone.",
  finalReport: `🏢  Competitor Snapshot — 3 Companies

· Company A
  Size 500 people, valued at $1B
  Focus Enterprise SaaS
  Latest Just shipped a new release

· Company B
  Size 200 people
  Focus Social tools
  Latest Closed Series B

· Company C
  Size 80 people
  Focus Open-source platform
  Latest Open-sourced a new module

— Sorted alphabetically · Sources footnoted —`,
  helpers: [
    {
      id: 'data',
      duration: 2200,
      duty: 'Size / valuation',
      icon: '📊',
      label: 'Collect data',
      summary: 'A · 500 people, $1B val.\nB · 200 people\nC · 80 people',
      tone: 'bg-sun/30 border-sun',
    },
    {
      id: 'product',
      duration: 4000,
      duty: "Each company's angle",
      icon: '💼',
      label: 'Summarize products',
      summary: 'A · Enterprise SaaS\nB · Social tools\nC · Open-source platform',
      tone: 'bg-rose/25 border-rose',
    },
    {
      id: 'news',
      duration: 3100,
      duty: 'Last week activity',
      icon: '📰',
      label: 'Scan recent news',
      summary: 'A · Just shipped v2\nB · Closed Series B\nC · Open-sourced new module',
      tone: 'bg-leaf/25 border-leaf',
    },
    {
      id: 'edit',
      duration: 1300,
      duty: 'Unify style',
      icon: '✍️',
      label: 'Format & polish',
      summary: 'Sort alphabetically\nAdd source footnotes\nUnify heading sizes',
      tone: 'bg-violet/25 border-violet',
    },
  ],
  interactive: {
    footNote: '💡 Each helper owns one slice · hands back a short summary when done · the main agent only worries about stitching the final output together.',
    helperIdle: 'Standing by',
    helperRunning: '· · ·',
    mergingLabel: 'Merging…',
    phaseDispatching: 'Main agent · Splitting the task, dispatching helpers…',
    phaseDone: 'Main agent · Merge complete. Snapshot below.',
    phaseIdle: 'Main agent · Standing by. Click "Dispatch helpers" to start.',
    phaseMerging: 'Main agent · All 4 summaries are back — merging now…',
    reportLabel: '📋 Main agent · Stitching the summaries into a final output',
    reportPlaceholder: '(Once all 4 summaries are back, the full snapshot gets assembled here)',
    resetBtn: 'Reset ↺',
    task: 'Put together a snapshot for these 3 competitors',
    taskLabel: '🎯 Task handed to the main agent',
    phaseRunning: (remaining: number): string => `Main agent · Waiting on ${remaining} helper${remaining === 1 ? '' : 's'} to finish…`,
    startBtn: (isBusy: boolean, isDone: boolean): string =>
      isDone ? 'Run again →' : isBusy ? 'Running…' : 'Dispatch helpers →',
  },
  prose: (
    <>
      <P>
        Everything so far has been <strong>one</strong> agent doing its own thing. For more complex tasks, it can also
        <Mark> call in backup</Mark> — the field calls them "subagents", but really they're just
        <strong> small specialists dispatched to handle one thing each</strong>.
      </P>

      <H3>The best analogy</H3>
      <P>Picture a project manager who lands this task: "Put together a competitor snapshot."</P>
      <P>
        Could they do it alone? Sure — slowly, and they'll miss things. The natural move is to
        <Mark> keep the big picture yourself and split the work between a few colleagues</Mark>:
      </P>
      <UL>
        <LI>One to gather company size and valuation data</LI>
        <LI>One to summarize each product's main angle</LI>
        <LI>One to scan the last week's news</LI>
        <LI>One to unify formatting and layout</LI>
      </UL>
      <P>Each helper finishes and hands a summary back; the PM collects all of them → merges them into one report.</P>

      <Pull>Agents work the same way now: a lead splits the task, dispatches little helpers to each piece, and stitches it all together.</Pull>

      <H3>Why this works</H3>
      <UL>
        <LI>
          <strong>Specialization</strong>: each helper focuses on one thing and doesn't drift
        </LI>
        <LI>
          <strong>Speed</strong>: multiple pieces can happen <strong>in parallel</strong>
        </LI>
        <LI>
          <strong>Less crowded desk</strong>: the main agent doesn't need every detail spread out in front of it (remember chapter 3's "the desk has limits" — subagents just hand back a <strong>summary</strong>)
        </LI>
      </UL>

      <H3>What this means for you</H3>
      <UL>
        <LI>In serious agent tools you'll often see "dispatching subagent for X" — that's calling in backup</LI>
        <LI>
          You can <strong>ask for it yourself</strong>: "split this into a few pieces and farm them out" — usually steadier than letting it grind through everything alone
        </LI>
      </UL>
    </>
  ),
  title: (
    <>
      <span className="block">One agent</span>
      <span className="block">
        can call in <span className="text-ember">backup</span>.
      </span>
    </>
  ),
}

export default { en, zh }

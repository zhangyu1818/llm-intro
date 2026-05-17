import { H3, LI, Mark, P, UL } from '../components/Prose'

const zh = {
  caption: '让它跑得动，但别让它跑飞',
  eyebrow: '它开始做事，你要做什么',
  keyLine: '它越能动手，你就越得给它立规矩。让它做事，但别让它替你按那些按不回来的按钮。',
  interactive: {
    doneLooseBody: '.env 丢了。线上被改了。回不来了。',
    doneLooseTitle: '💥 后果',
    doneStrictBody: '该干的干了，不该碰的一样没少。',
    doneStrictTitle: '✅ 结果',
    footNote: '💡 "立规矩" = 审批 + 权限分级 + 家规文件。这几件事加起来，就是给 agent 立的一根缰绳。',
    looseBadge: '放任',
    looseSubtitle: '放它自由',
    looseTitle: '没立规矩',
    resetBtn: '重置 ↺',
    strictBadge: '审批',
    strictSubtitle: '关键节点等你点头',
    strictTitle: '立了规矩',
    task: '帮我清理一下这个项目里的临时文件',
    taskLabel: '🎯 同一个任务，两种处理方式',
    startBtn: (running: boolean, isDone: boolean): string =>
      running ? '跑中……' : isDone ? '再跑一次 →' : '让它们俩同时跑 →',
  },
  looseSteps: [
    { icon: '🔎', label: '扫描目录……', tone: 'normal' as const },
    { icon: '🗑️', label: '删除 temp/*.log', tone: 'normal' as const },
    { icon: '🗑️', label: '删除 .DS_Store', tone: 'normal' as const },
    { icon: '🗑️', label: '删除 .env  ← 其实是配置文件', tone: 'danger' as const },
    { icon: '✏️', label: '顺手改了 config.json', tone: 'danger' as const },
    { icon: '📤', label: '推送到线上', tone: 'danger' as const },
    { icon: '💥', label: '.env 丢了 · 线上被动 · 出事了', tone: 'danger' as const },
  ],
  prose: (
    <>
      <P>
        它能一路循环做完任务——但每一步都可能走偏。既然它开始动手，你就不再是"提问的人"——你是
        <Mark>那个盯着它做事的人</Mark>。
      </P>

      <H3>做四件事就够了</H3>
      <UL>
        <LI>让它<strong>先说计划</strong></LI>
        <LI><strong>分级授权</strong>给它</LI>
        <LI>关键节点让它<strong>停下来等你</strong></LI>
        <LI>不可逆的事<strong>你自己按</strong></LI>
      </UL>

      <H3>一 · 先说计划</H3>
      <P>
        很多 agent 产品都有这个模式（比如 Claude Code 的 Plan Mode）：它先列一个清单"我打算做这几步"——等你批准了再开工。
      </P>
      <P>
        这一步能提前摘掉 <Mark>80% 的"它做错了"</Mark>。很多翻车，其实看计划的那一刻你就能拦下来。
      </P>

      <H3>二 · 分级授权</H3>
      <P>
        它手里能做什么，是<Mark>你</Mark>决定的。常见分法：<strong>允许 / 询问 / 禁止</strong>。比如：读文件 = 允许；改文件 = 询问；删文件 = 禁止。不熟的操作一律选"询问"——它动手前敲敲门，你再决定。
      </P>

      <H3>三 · 不可逆的事别交出去</H3>
      <P>能回滚的（改文件、跑测试、查资料）放心让它做。不能回滚的事，它可以<strong>规划</strong>，但<strong>你自己按那一下</strong>：</P>
      <UL>
        <LI>删文件 / 清空数据库</LI>
        <LI>发邮件 / 发消息</LI>
        <LI>付钱 / 下单</LI>
        <LI>推送到线上 / 强制 push</LI>
      </UL>

      <H3>四 · 项目级家规</H3>
      <P>
        不想每次都重复交代？可以放一份"家规文件"——比如 Claude Code 的 <code>CLAUDE.md</code>、OpenAI 生态的 <code>AGENTS.md</code>。写清项目风格、别碰哪些目录、什么绝对禁止……它开工会先读家规。
      </P>
      <P>
        和 Skills 的区别：<Mark>Skills 是"某类任务的说明书"，家规是"整个项目的规矩"。</Mark>
      </P>
    </>
  ),
  strictSteps: [
    { icon: '🔎', label: '扫描目录……', tone: 'normal' as const },
    { icon: '🗑️', label: '删除 temp/*.log', tone: 'normal' as const },
    { icon: '🗑️', label: '删除 .DS_Store', tone: 'normal' as const },
    { icon: '🛑', label: '要删 .env？停下等你 → 你说"别动" → 跳过', tone: 'blocked' as const },
    { icon: '🛑', label: '要改 config.json？停下等你 → 你说"别动" → 跳过', tone: 'blocked' as const },
    { icon: '🛑', label: '要推到线上？停下等你 → 你说"别动" → 跳过', tone: 'blocked' as const },
    { icon: '✅', label: '清理完成 · 没碰该碰的', tone: 'ok' as const },
  ],
  title: (
    <>
      <span className="block">自由，</span>
      <span className="block">
        但别让它<span className="text-ember">脱缰</span>。
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: "Let it run — but don't let it run off",
  eyebrow: "It's doing things now — what's your job?",
  keyLine: "The more it can do, the more rules you have to set. Let it work — just don't let it push the buttons you can't unpush.",
  interactive: {
    doneLooseBody: '.env gone. Production touched. No way back.',
    doneLooseTitle: '💥 Aftermath',
    doneStrictBody: 'The work got done. Nothing off-limits got touched.',
    doneStrictTitle: '✅ Result',
    footNote: "💡 'Setting rules' = approvals + tiered permissions + a house-rules file. Put them together and you've got a leash on the agent.",
    looseBadge: 'Free rein',
    looseSubtitle: 'Full freedom',
    looseTitle: 'No rules set',
    resetBtn: 'Reset ↺',
    strictBadge: 'Approval',
    strictSubtitle: 'Pauses at key moments',
    strictTitle: 'Rules in place',
    task: 'Clean up the temp files in this project',
    taskLabel: '🎯 Same task, two approaches',
    startBtn: (running: boolean, isDone: boolean) =>
      running ? 'Running…' : isDone ? 'Run again →' : 'Run them both →',
  },
  looseSteps: [
    { icon: '🔎', label: 'Scanning the directory…', tone: 'normal' as const },
    { icon: '🗑️', label: 'Delete temp/*.log', tone: 'normal' as const },
    { icon: '🗑️', label: 'Delete .DS_Store', tone: 'normal' as const },
    { icon: '🗑️', label: 'Delete .env  ← that\'s actually a config file', tone: 'danger' as const },
    { icon: '✏️', label: 'Also edits config.json', tone: 'danger' as const },
    { icon: '📤', label: 'Pushes to production', tone: 'danger' as const },
    { icon: '💥', label: '.env gone · prod broken · damage done', tone: 'danger' as const },
  ],
  prose: (
    <>
      <P>
        It can loop through a task all the way to "done" — but every step can go sideways. Now that it's acting, you're no longer just "the one asking questions" — you're
        <Mark> the one watching it work</Mark>.
      </P>

      <H3>Four things are enough</H3>
      <UL>
        <LI>Have it <strong>say the plan first</strong></LI>
        <LI>Give it <strong>tiered permissions</strong></LI>
        <LI>At key moments, have it <strong>pause and wait for you</strong></LI>
        <LI>The irreversible stuff — <strong>you push that button yourself</strong></LI>
      </UL>

      <H3>One · Say the plan first</H3>
      <P>
        Plenty of agent products already have this (Claude Code's Plan Mode, for example): it lists "here are the steps I'm about to take" — and waits for your sign-off before starting.
      </P>
      <P>
        This one step heads off <Mark>80% of "it did the wrong thing"</Mark> moments. Most blowups were already visible right there in the plan, if you'd been looking.
      </P>

      <H3>Two · Tiered permissions</H3>
      <P>
        What it's allowed to do is <Mark>your</Mark> call. A common split: <strong>allow / ask / forbid</strong>. For example: read files = allow; edit files = ask; delete files = forbid. For anything you're not sure about, default to "ask" — it knocks before doing, and you decide.
      </P>

      <H3>Three · Don't hand it the irreversible stuff</H3>
      <P>Reversible things (edit a file, run a test, look something up) — let it do them. Irreversible things — it can <strong>plan</strong> them, but <strong>you push the button yourself</strong>:</P>
      <UL>
        <LI>Deleting files / wiping a database</LI>
        <LI>Sending emails or messages</LI>
        <LI>Paying for things / placing orders</LI>
        <LI>Deploying to prod / force-pushing</LI>
      </UL>

      <H3>Four · Project-level house rules</H3>
      <P>
        Don't want to repeat yourself every time? Drop a "house rules" file in the project — like Claude Code's <code>CLAUDE.md</code> or the <code>AGENTS.md</code> some tools look for. Spell out the project style, which directories not to touch, what's absolutely off-limits… it reads the house rules before starting.
      </P>
      <P>
        How is this different from Skills? <Mark>Skills are "a handbook for one kind of task"; house rules are "the rules of the whole project."</Mark>
      </P>
    </>
  ),
  strictSteps: [
    { icon: '🔎', label: 'Scanning the directory…', tone: 'normal' as const },
    { icon: '🗑️', label: 'Delete temp/*.log', tone: 'normal' as const },
    { icon: '🗑️', label: 'Delete .DS_Store', tone: 'normal' as const },
    { icon: '🛑', label: "Delete .env? Pauses → you say 'leave it' → skipped", tone: 'blocked' as const },
    { icon: '🛑', label: "Edit config.json? Pauses → you say 'leave it' → skipped", tone: 'blocked' as const },
    { icon: '🛑', label: "Push to prod? Pauses → you say 'leave it' → skipped", tone: 'blocked' as const },
    { icon: '✅', label: "Clean-up done · none of the off-limits stuff got touched", tone: 'ok' as const },
  ],
  title: (
    <>
      <span className="block">Give it freedom —</span>
      <span className="block">
        just don't let it <span className="text-ember">run wild</span>.
      </span>
    </>
  ),
}

export default { en, zh }

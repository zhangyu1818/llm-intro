import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '不是一次答完——而是一直在循环',
  eyebrow: '它的工作节奏',
  keyLine: '它一路走得很顺，不等于它走对了——中间任何一步"看岔了"，都可能让它顺顺利利地走到错误的终点。',
  astraySteps: [
    { kind: 'think' as const, label: '先看看这个文件长什么样' },
    { kind: 'act' as const, label: '打开 sales_20260421.csv' },
    { isAlert: true, kind: 'observe' as const, label: '3 列：日期 / 产品 / 数量' },
    { kind: 'think' as const, label: '按产品分组求和"数量"' },
    { kind: 'act' as const, label: '分组汇总数量' },
    { kind: 'observe' as const, label: '合计 3820（它以为是件数）' },
    { kind: 'think' as const, label: '写一份"销量日报"（实际数据是金额）' },
    { kind: 'act' as const, label: '生成 report.md' },
    { kind: 'done' as const, label: '它报告：完成。—— 但内容方向完全错了。' },
  ],
  interactive: {
    astrayAlertSuffix: '⚠️ 其实第 3 列是"金额"，它看岔了',
    doneAstrayBody: '每一步都没停下来质疑——于是最终答案是错的。',
    doneAstrayTitle: '⚠️ 它"顺"着跑完了——但第 3 步看岔了字段。',
    doneNormal: '✓ 想 → 做 → 看 的循环，走到了它认为"完成"的那一刻。',
    idleHint: '点下方「下一步」开始第一步循环，它会\n想 → 做 → 看，一步一步往下走',
    idleMsg: '还没开跑',
    modeAstray: '看它走偏',
    modeNormal: '正常跑',
    nextBtn: '下一步 →',
    resetBtn: '重置 ↺',
    task: '把昨天的销售 CSV 做成一份日报',
    taskLabel: '🎯 任务',
  },
  kindLabel: {
    act: '做',
    done: '完成',
    error: '出错',
    observe: '看',
    think: '想',
  },
  normalSteps: [
    { kind: 'think' as const, label: '先看看这个文件长什么样' },
    { kind: 'act' as const, label: '打开 sales_20260421.csv' },
    { kind: 'observe' as const, label: '3 列：日期 / 产品 / 金额。共 1420 行。' },
    { kind: 'think' as const, label: '要按产品分组求和' },
    { kind: 'act' as const, label: '分组汇总' },
    { kind: 'observe' as const, label: '12 个产品，合计 183 万' },
    { kind: 'think' as const, label: '写一份日报，按金额排序' },
    { kind: 'act' as const, label: '生成 report.md' },
    { kind: 'done' as const, label: '完成：日报已保存' },
  ],
  prose: (
    <>
      <P>上一章我们看到它开始自己动手。那它到底是怎么一步步做完一件事的？</P>

      <H3>节奏就三个动作</H3>
      <P>
        它其实一直在做三个动作，<strong>反复循环</strong>：
      </P>
      <UL>
        <LI>
          <strong>想</strong>（think）：接下来这一步要做什么？
        </LI>
        <LI>
          <strong>做</strong>（act）：真的去做——读个文件、跑个命令、查个资料
        </LI>
        <LI>
          <strong>看</strong>（observe）：拿到结果，再决定下一步
        </LI>
      </UL>
      <P>直到它自己判断"完成了"，才停下来。</P>

      <Pull>它不是一次答完——它是在想 → 做 → 看的循环里走到终点。</Pull>

      <H3>一个完整例子（整理销售表）</H3>
      <P>感受一下这个循环实际的节拍：</P>
      <UL>
        <LI>想 → 做（打开表看结构）→ 看（3 列：日期 / 产品 / 金额）</LI>
        <LI>想 → 做（按产品分组求和）→ 看（12 个产品，合计 183 万）</LI>
        <LI>想 → 做（写成一份日报排好序）→ 看（文件已生成）</LI>
        <LI>✅ 完成</LI>
      </UL>

      <H3>关键认知 · 也是风险</H3>
      <P>
        每一步都可能出错。尤其"看"这一步——<Mark>如果它看岔了</Mark>
        ，后面的每一步都会顺着岔掉的方向走下去。
      </P>
      <P>
        之前讲过的"顺 ≠ 对"，在这里会被<strong>放大</strong>
        。它可能一路很顺地，做到一个错误的终点。
      </P>

      <H3>实用心态</H3>
      <UL>
        <LI>
          让它<strong>边做边报告</strong>（很多 agent 产品已经默认这样）
        </LI>
        <LI>
          发现它走偏，立刻<strong>打断</strong>——别尬等它跑完
        </LI>
        <LI>
          重要任务，让它<strong>先说计划</strong>再开始（下一章细讲）
        </LI>
      </UL>
    </>
  ),
  title: (
    <>
      <span className="block">想 → 做 → 看，</span>
      <span className="block">
        它一直在<span className="text-ember">循环</span>。
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: "Not one-and-done — it keeps looping",
  eyebrow: 'Its working rhythm',
  keyLine: "Running smoothly doesn't mean running correctly. One misread step in the loop can carry it smoothly all the way to the wrong destination.",
  astraySteps: [
    { kind: 'think' as const, label: "Let me see what this file looks like" },
    { kind: 'act' as const, label: 'Open sales_20260421.csv' },
    { isAlert: true, kind: 'observe' as const, label: '3 columns: date / product / quantity' },
    { kind: 'think' as const, label: 'Group by product and sum "quantity"' },
    { kind: 'act' as const, label: 'Group and total the quantity' },
    { kind: 'observe' as const, label: 'Total 3,820 (it thinks these are units)' },
    { kind: 'think' as const, label: 'Write a "sales volume report" (the data is actually revenue)' },
    { kind: 'act' as const, label: 'Generate report.md' },
    { kind: 'done' as const, label: "It reports: done. — But the whole direction was wrong." },
  ],
  interactive: {
    astrayAlertSuffix: '⚠️ Column 3 is actually "amount" — it misread the field',
    doneAstrayBody: 'It never paused to question any step — so the final answer is wrong.',
    doneAstrayTitle: "⚠️ It ran all the way through — but misread the field at step 3.",
    doneNormal: "✓ The Think → Act → Observe loop ran until it called the task 'done'.",
    idleHint: 'Click "Next step" below to start the first loop iteration — it will\nThink → Act → Observe, step by step',
    idleMsg: "Hasn't started yet",
    modeAstray: 'Watch it go astray',
    modeNormal: 'Normal run',
    nextBtn: 'Next step →',
    resetBtn: 'Reset ↺',
    task: "Turn yesterday's sales CSV into a daily report",
    taskLabel: '🎯 Task',
  },
  kindLabel: {
    act: 'Act',
    done: 'Done',
    error: 'Error',
    observe: 'Observe',
    think: 'Think',
  },
  normalSteps: [
    { kind: 'think' as const, label: "Let me see what this file looks like" },
    { kind: 'act' as const, label: 'Open sales_20260421.csv' },
    { kind: 'observe' as const, label: '3 columns: date / product / amount. 1,420 rows.' },
    { kind: 'think' as const, label: 'Group by product and sum' },
    { kind: 'act' as const, label: 'Group and aggregate' },
    { kind: 'observe' as const, label: '12 products, total 1.83M' },
    { kind: 'think' as const, label: 'Write a daily report, sorted by amount' },
    { kind: 'act' as const, label: 'Generate report.md' },
    { kind: 'done' as const, label: 'Done: daily report saved' },
  ],
  prose: (
    <>
      <P>Last chapter, we saw it start doing things itself. So how does it actually work through a task, one step at a time?</P>

      <H3>Three actions — that's the whole rhythm</H3>
      <P>
        It does three things, in a <strong>repeating loop</strong>:
      </P>
      <UL>
        <LI>
          <strong>Think</strong>: what's the next step?
        </LI>
        <LI>
          <strong>Act</strong>: actually do it — read a file, run a command, look something up
        </LI>
        <LI>
          <strong>Observe</strong>: take in the result, then decide what's next
        </LI>
      </UL>
      <P>It keeps going until it decides the task is "done".</P>

      <Pull>It doesn't finish in one shot — it loops through Think → Act → Observe all the way to the end.</Pull>

      <H3>A full example (cleaning up a sales spreadsheet)</H3>
      <P>Feel the rhythm of the loop:</P>
      <UL>
        <LI>Think → Act (open the sheet, look at the structure) → Observe (3 columns: date / product / amount)</LI>
        <LI>Think → Act (group by product and sum) → Observe (12 products, total 1.83M)</LI>
        <LI>Think → Act (write a daily report, sorted by amount) → Observe (file generated)</LI>
        <LI>✅ Done</LI>
      </UL>

      <H3>The key insight — and the risk</H3>
      <P>
        Any step can go wrong. The Observe step especially — <Mark>if it misreads something</Mark>, every step after that follows the misread.
      </P>
      <P>
        "Smooth ≠ right" from earlier gets <strong>amplified</strong> here. It can walk very smoothly all the way to the wrong destination.
      </P>

      <H3>The practical mindset</H3>
      <UL>
        <LI>
          Have it <strong>report as it goes</strong> (most agent products do this by default)
        </LI>
        <LI>
          If you see it drifting off course, <strong>interrupt right away</strong> — don't politely wait for it to finish
        </LI>
        <LI>
          For anything important, have it <strong>say the plan first</strong> before starting (the next chapter goes deeper)
        </LI>
      </UL>
    </>
  ),
  title: (
    <>
      <span className="block">Think → Act → Observe,</span>
      <span className="block">
        it keeps <span className="text-ember">looping</span>.
      </span>
    </>
  ),
}

export default { en, zh }

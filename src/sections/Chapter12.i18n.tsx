import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '给个目标，它自己决定下一步做什么',
  eyebrow: `从"说话"到"做事"`,
  keyLine: '它开始自己做事的那一刻，你的身份也变了——从"提问的人"，变成"看着它做事的人"。',
  panel: {
    bottomNote: '区别不在"聪不聪明"——而在它的身份：\n从"说话的人"，变成了"动手的人"。',
    chatFooter: '然后——',
    chatFooterMark: '你自己去做',
    chatResponse: `它：大致步骤是：\n1. 打开订单表\n2. 找一列叫"创建时间"\n3. 筛选 > 3 天之前\n4. 再看"状态"不等于"已发货"\n你可以用 Excel 的筛选功能试试～`,
    chatSubtitle: '它回你一段话',
    chatTitle: '🗣 一问一答',
    doFooter: '然后——',
    doFooterStrong: '事情已经做完了',
    doSubtitle: '它真的去做',
    doTitle: '🛠 自己动手',
    task: '把昨天超过 3 天没发货的订单找出来',
    taskLabel: '🎯 任务',
    doSteps: [
      { icon: '🔎', text: '先看看这份表的结构……' },
      { icon: '📄', text: '读到字段：订单号 / 创建时间 / 状态' },
      { icon: '⚙️', text: '筛选：创建 > 3 天 AND 状态 ≠ 已发货' },
      { icon: '📊', strong: '7 条', textPrefix: '找到 ', textSuffix: '，已整理成一张小表' },
    ],
  },
  prose: (
    <>
      <P>
        到目前为止，你和它的关系大多是"一问一答"——你问一句，它回一句，这一轮就结束。
      </P>

      <H3>一个日常对比</H3>
      <P>
        <strong>旧</strong>：你说"帮我修这个 bug"，它回你一段修复思路——你还得自己动手去改。
      </P>
      <P>
        <strong>新</strong>：你说"帮我修这个 bug"，它
        <strong>自己打开代码 → 看一眼 → 动手改 → 跑测试 → 告诉你结果</strong>。
      </P>

      <P>
        这就是所谓「它自己动手」的模式。业内叫{' '}
        <Mark>
          <strong>Agent</strong>（智能体）
        </Mark>
        ——名字不重要，重要的是：
        <Mark>它的身份，从"说话的人"变成了"动手的人"</Mark>。
      </P>

      <Pull>"旧的它是电话那头的朋友。新的它，是一位能用你电脑的助理。"</Pull>

      <H3>最好的比喻</H3>
      <P>
        想象你雇了一个助理。你说："看看昨天订单有没有异常。"
        他不会回你"你可以这样查……"——他会<strong>自己</strong>
        决定去打开哪张表、怎么筛选、怎么整理、最后告诉你结果。
      </P>
      <P>新的它，就是这样。你给一个目标，它自己决定接下来做什么。</P>

      <H3>为什么这件事值得知道</H3>
      <UL>
        <LI>你不用再自己"手动转译"一堆步骤</LI>
        <LI>它从"帮我想" 升级到 "帮我完成"</LI>
        <LI>
          更多日常任务可以<Mark>直接交出去</Mark>
        </LI>
      </UL>

      <H3>但——它能动手，也能弄坏东西</H3>
      <P>
        后面几章会讲：它做事的节奏是怎样、该怎么盯着它跑、怎么让它停在该停的地方。先把这件事放在心上：
        <Mark>它开始自己做事了，你的角色也得跟着变。</Mark>
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">它开始</span>
      <span className="block">
        自己<span className="text-ember">动手</span>了。
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: 'Give it a goal, and it decides the next step on its own',
  eyebrow: 'From "talking" to "doing"',
  keyLine: 'The moment it starts doing things on its own, your role shifts too — from "the one asking questions" to "the one watching it work".',
  panel: {
    bottomNote: "The difference isn't about being smarter — it's a change of role:\nfrom \"the one who talks\" to \"the one who does\".",
    chatFooter: 'Then —',
    chatFooterMark: 'you do it yourself',
    chatResponse: `It: Roughly how to do it:\n1. Open the orders spreadsheet\n2. Find the "created date" column\n3. Filter for > 3 days ago\n4. Then check "status" ≠ "shipped"\nTry Excel's filter feature~`,
    chatSubtitle: 'It writes you a reply',
    chatTitle: '🗣 Q&A',
    doFooter: 'Then —',
    doFooterStrong: 'the job is done',
    doSubtitle: 'It actually goes and does it',
    doTitle: '🛠 Does it itself',
    task: "Find any orders from yesterday that have been sitting more than 3 days without shipping",
    taskLabel: '🎯 Task',
    doSteps: [
      { icon: '🔎', text: 'Let me look at the structure of this spreadsheet…' },
      { icon: '📄', text: 'Fields: order ID / created date / status' },
      { icon: '⚙️', text: 'Filter: created > 3 days ago AND status ≠ shipped' },
      { icon: '📊', strong: '7 orders', textPrefix: 'Found ', textSuffix: ', pulled into a summary table' },
    ],
  },
  prose: (
    <>
      <P>
        Up to this point, your relationship with it has mostly been Q&A — you ask, it replies, the turn ends.
      </P>

      <H3>An everyday contrast</H3>
      <P>
        <strong>Old</strong>: You say "fix this bug" — it gives you a paragraph of ideas for fixing it, and you still go do the work.
      </P>
      <P>
        <strong>New</strong>: You say "fix this bug" — it
        <strong> opens the code itself → reads it → makes the change → runs the tests → tells you what happened</strong>.
      </P>

      <P>
        That's what "doing things itself" means. The field calls this an{' '}
        <Mark>
          <strong>Agent</strong>
        </Mark>
        — but the name doesn't matter. What matters is:
        <Mark> its role has shifted from "the one who talks" to "the one who does"</Mark>.
      </P>

      <Pull>"The old version was a friend on the phone. The new version is an assistant who can use your computer."</Pull>

      <H3>The best analogy</H3>
      <P>
        Imagine you hired an assistant. You say: "Check if there's anything weird in yesterday's orders."
        They don't come back with "here's how you could check…" — they <strong>decide themselves</strong> which sheet to open, how to filter it, how to organize it, then come back with the result.
      </P>
      <P>That's the new version. You give a goal; it figures out what to do next.</P>

      <H3>Why this is worth knowing</H3>
      <UL>
        <LI>You don't have to "manually translate" a list of steps anymore</LI>
        <LI>It graduates from "help me think" to "help me finish"</LI>
        <LI>
          A lot more everyday work can be <Mark>handed over directly</Mark>
        </LI>
      </UL>

      <H3>But — if it can do things, it can also break things</H3>
      <P>
        The next few chapters cover: what its working rhythm actually looks like, how to keep an eye on it, and how to keep it stopping where it should. For now, hold onto this:
        <Mark> once it starts doing things on its own, your role has to change with it.</Mark>
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">It has started</span>
      <span className="block">
        doing things <span className="text-ember">on its own</span>.
      </span>
    </>
  ),
}

export default { en, zh }

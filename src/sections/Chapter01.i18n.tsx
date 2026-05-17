import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '不是「记住了」——是每一轮把前文又看了一遍',
  eyebrow: '多轮对话 · 到底发生了什么',
  keyLine: '它的运作更像「输入 → 输出」，而不是「记住 → 思考 → 永久保存」。它之所以能接得上话，通常是因为——前面的聊天，每一轮又被重新看了一次。',
  interactive: {
    chatLabel: '你看到的 · chat',
    eyebrow: 'interactive · 一步一步发消息',
    nextBtn: '下一步 →',
    noInput: '（暂无输入）',
    rawLabel: '模型这一轮实际看到的',
    rawTag: 'raw',
    resetBtn: '重置',
    tip: '你每发一条新消息，它「看到的」不只是这一条——前面几轮，都被又摊在了它面前一次。',
    tipPrefix: '💡 留意一下：',
    turnLabel: (n: number) => `当前第 ${n} 轮 · 共 3 轮`,
  },
  prose: (
    <>
      <Pull>
        它之所以「看起来记得你刚说了什么」，通常并不是把这些内容永久存在了脑子里。更真实的情况是：你每发一条新消息，系统会把之前的聊天连同这条新的一起，再摊到它面前。
      </Pull>

      <P>
        换个说法就是——它能接着聊下去，靠的往往不是<Mark>「记住了」</Mark>，而是<Mark>「又被摊开看了一遍」</Mark>。
      </P>

      <H3>先分清：单轮和多轮</H3>
      <P>
        <strong>单轮</strong> 很直白：你问一句，它答一句。比如发「帮我写段请假消息」，它看一眼，回答，这一轮就结束了。
      </P>
      <P>
        <strong>多轮</strong> 不是「从第二轮开始重启」。更接近实情的说法是：第 2、3、4 轮，系统通常会把前面的聊天再带上一次，一起交给它。所以你才会觉得它「一直跟得上」。
      </P>

      <H3>看一个例子</H3>
      <P>右边是你在聊天框里看到的样子；旁边那一栏是<Mark>它这一轮真正看到的内容</Mark>。每点一次「下一步」，你就会发现：在它的视角里，前面那几条被重新摊开了一遍。</P>

      <H3>所以——它不是「记住」，是「又看了一遍」</H3>
      <P>刚开始很多人会这样想：</P>
      <UL>
        <LI>它把我说过的话都记下来了</LI>
        <LI>它在脑子里一直想着这些内容</LI>
        <LI>所以才能一路接得上</LI>
      </UL>
      <P>但更贴近真相的版本是：</P>
      <UL>
        <LI>你发来一条新消息</LI>
        <LI>系统把前面的聊天连同这条新消息一并递过去</LI>
        <LI>它重新看过一遍，再生成这一轮的回答</LI>
      </UL>

      <H3>一个小铺垫</H3>
      <P>
        为了先建立直觉，这一章可以按这个近似理解：<em>对话还不太长的时候，每一轮它都会把前面的聊天再看一遍</em>。但这件事不是永远成立——聊得很长以后，它就未必还能全都看到了。下一章就来讲这件事。
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">它怎么能</span>
      <span className="block">
        一直<span className="text-ember">接得上话</span>
      </span>
    </>
  ),
  turns: [
    { role: 'user' as const, text: '帮我写一段请假消息。' },
    { role: 'assistant' as const, text: '好的，这是一段请假消息：「主管您好，因家中有事，明日需请一天事假……」' },
    { role: 'user' as const, text: '语气随和一点。' },
    { role: 'assistant' as const, text: '「头儿，明天家里有点事，想请一天假哈，手头的东西今天都整好～」' },
    { role: 'user' as const, text: '再短一点。' },
    { role: 'assistant' as const, text: '「头儿，明天请个假，今天把活儿收尾好～」' },
  ],
}

const en: typeof zh = {
  caption: "Not 'remembered' — the whole thread gets re-read on every turn",
  eyebrow: 'Multi-turn chat · what is actually happening',
  keyLine: 'It works more like "input → output" than "remember → think → store forever." It keeps up because the prior conversation gets re-read, fresh, every turn.',
  interactive: {
    chatLabel: 'what you see · chat',
    eyebrow: 'interactive · send messages one at a time',
    nextBtn: 'Next →',
    noInput: '(nothing sent yet)',
    rawLabel: 'what the model actually sees this turn',
    rawTag: 'raw',
    resetBtn: 'Reset',
    tip: "Every time you send something, the model doesn't just see that one line — every earlier turn gets laid out in front of it again.",
    tipPrefix: '💡 Notice:',
    turnLabel: (n: number) => `Turn ${n} of 3`,
  },
  prose: (
    <>
      <Pull>
        When it "seems to remember what you just said", it usually didn't store a thing. What actually happens: every time you send a new message, the system lays the whole conversation — old turns and the new one — back in front of it.
      </Pull>

      <P>
        Put another way — the reason it can keep going usually isn't that it <Mark>"remembered"</Mark> anything. It's that the thread got <Mark>spread out in front of it again</Mark>.
      </P>

      <H3>Single-turn vs. multi-turn</H3>
      <P>
        <strong>Single-turn</strong> is simple: you ask one thing, it answers, done.
      </P>
      <P>
        <strong>Multi-turn</strong> doesn't mean "each turn starts from scratch." Closer to the truth: on turns 2, 3, 4, the system usually re-sends all the earlier turns along with the new one. That's why it feels like it "always keeps up."
      </P>

      <H3>See it in action</H3>
      <P>On the right you see the chat UI; the column next to it shows <Mark>what the model actually receives this turn</Mark>. Hit "Next" and watch — from its angle, the earlier messages get spread back out every time.</P>

      <H3>So — it doesn't "remember", it "re-reads"</H3>
      <P>The instinct most people start with:</P>
      <UL>
        <LI>It stored everything I said</LI>
        <LI>It's holding all that in its "mind"</LI>
        <LI>That's how it keeps up</LI>
      </UL>
      <P>Closer to the truth:</P>
      <UL>
        <LI>You send a new message</LI>
        <LI>The system bundles all the prior turns with the new one and hands it over</LI>
        <LI>It reads through everything again, then writes this turn's reply</LI>
      </UL>

      <H3>One small caveat for later</H3>
      <P>
        For now, picture it like this: <em>while the conversation is still short, every turn re-reads everything before it</em>. But that won't always hold — once things get long enough, it may not be able to see all of it. That's exactly what the next chapter is about.
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">How does it</span>
      <span className="block">
        keep <span className="text-ember">following along</span>?
      </span>
    </>
  ),
  turns: [
    { role: 'user' as const, text: 'Write me a time-off message.' },
    { role: 'assistant' as const, text: 'Sure, here you go: "Hi — something came up at home, so I\'d like to take a personal day tomorrow…"' },
    { role: 'user' as const, text: 'Make the tone more casual.' },
    { role: 'assistant' as const, text: '"Hey — family thing tomorrow, gonna take the day off. I\'ll wrap everything up today~"' },
    { role: 'user' as const, text: 'Even shorter.' },
    { role: 'assistant' as const, text: '"Hey — taking tomorrow off, wrapping up today~"' },
  ],
}

export default { en, zh }

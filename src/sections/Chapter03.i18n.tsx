import { H3, LI, Mark, P, UL } from '../components/Prose'

const zh = {
  caption: '不是它变笨，是那段内容已经不在它眼前了',
  eyebrow: '所谓「失忆」，其实是被挤出去了',
  keyLine: '它「忘了」，多半不是变笨了，而是那段内容已经不在它这一轮能看到的范围里了。',
  interactive: {
    confusedBody: '最早那几条重要要求——"面向新手"、"不讲原理"、"每章结尾要总结"——已经被挤出了它的视野。它会继续答，而且答得挺顺，但方向可能在慢慢偏掉。',
    confusedPrefix: '🥲 它开始"飘"了：',
    eyebrow: 'interactive · 一直发下去看看',
    forgottenEmpty: '（还没有被挤出去的）',
    forgottenLabel: '已经看不到了 · forgotten',
    nextBtn: '下一条 +',
    resetBtn: '重置',
    stableBody: '前面那几条关键要求还在它的视野里，所以眼下的回答还踩得上你的节奏。',
    stablePrefix: '💡 暂时还稳：',
    windowLabel: '模型眼里的上下文窗口',
    forgottenCount: (n: number) => `${n} 条`,
    hint: (capacity: number) => `窗口容量 = ${capacity}。超出的部分，会从最老那端被挤出去。`,
  },
  prose: (
    <>
      <P>
        几乎每个人都遇到过这一幕：一开始聊得挺顺，越聊越像回事；到后半段，它突然像换了个人——
      </P>
      <UL>
        <LI>忘了你前面提过的要求</LI>
        <LI>语气和风格开始跑偏</LI>
        <LI>把已经讲过的又说一次</LI>
        <LI>对不上你眼下正在做的事</LI>
        <LI>甚至开始答非所问</LI>
      </UL>
      <P>
        第一反应往往是——「它失忆了」「它变笨了」。更接近的解释通常是另一种：
        <Mark>前面那部分内容，它现在已经看不到了。</Mark>
      </P>

      <H3>为什么会看不到</H3>
      <P>聊得越长，前文越多，可它每一轮能看到的总量是有限的。于是早先的内容就可能遇到这三件事：</P>
      <UL>
        <LI>被直接截掉</LI>
        <LI>被压成更短的摘要</LI>
        <LI>被后来的新内容挤出去</LI>
      </UL>
      <P>只要那部分不在这一轮能看到的范围里，它就没法继续靠那部分来答你了。</P>

      <H3>它有时会「假装还记得」</H3>
      <P>这里有一个特别容易把人带偏的点：就算它已经看不到早期内容，它也未必会老老实实说「我不知道了」。它常常会继续答，而且答得挺流畅——这就容易让人误会：「它应该还记得，只是没认真做。」</P>
      <P>更真实的情况常常是：它在拿眼前还剩下的材料努力往下接，可缺失的信息已经让方向偏了。所以，<Mark>「讲得顺」不等于「它还握着完整的背景」。</Mark></P>

      <H3>遇到这种情况，该这么想</H3>
      <P>最有用的心态不是埋怨它「怎么又忘了」，而是先问一句：<em>前面那几条关键要求，还在它眼前吗？</em>一旦有了这个判断，后面的处理就会很自然：</P>
      <UL>
        <LI>把关键要求再贴一遍</LI>
        <LI>用几条笔记把前面已经定下来的结论概括一下</LI>
        <LI>或者换个新对话，把必要背景重新给全</LI>
      </UL>
    </>
  ),
  scriptedTurns: [
    { fromUser: true, text: '帮我写一篇文章：面向第一次接触这个主题的读者' },
    { fromUser: true, text: '语气要通俗，不要讲底层原理' },
    { fromUser: true, text: '每章末尾都要有一句总结' },
    { fromUser: false, text: '好的，收到。我先列一个大纲。' },
    { fromUser: true, text: '把第二章再展开一点' },
    { fromUser: false, text: '我重新写了一版，请看' },
    { fromUser: true, text: '标题再直白一点' },
    { fromUser: true, text: '例子换成更生活化的' },
    { fromUser: true, text: '排版能不能更松弛点' },
    { fromUser: true, text: '这段的「术语」帮我改得更通俗' },
    { fromUser: true, text: '第三章开头再加个类比' },
    { fromUser: true, text: '这个转折有点硬' },
  ],
  title: (
    <>
      <span className="block">为什么聊久了</span>
      <span className="block">
        它会<span className="text-ember">"忘"</span>？
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: "It didn't get dumber — that part just isn't in front of it anymore",
  eyebrow: 'What "forgetting" really is: getting pushed out',
  keyLine: 'When it "forgets", it usually didn\'t get dumber. That content just isn\'t inside what it can see this turn.',
  interactive: {
    confusedBody: 'The early critical instructions — "write for first-timers", "skip the mechanics", "wrap each chapter with a summary" — have been shoved out of its view. It\'ll keep answering, and answering smoothly, but the direction is slipping.',
    confusedPrefix: "🥲 It's starting to drift:",
    eyebrow: 'interactive · keep sending and see what happens',
    forgottenEmpty: '(nothing pushed out yet)',
    forgottenLabel: 'no longer visible · forgotten',
    nextBtn: 'Next +',
    resetBtn: 'Reset',
    stableBody: 'The key early requirements are still in view, so the current answers are tracking your intent.',
    stablePrefix: '💡 Still holding:',
    windowLabel: 'context window, as the model sees it',
    forgottenCount: (n: number) => `${n} items`,
    hint: (capacity: number) => `Window capacity = ${capacity}. Anything past the limit gets shoved out from the oldest end.`,
  },
  prose: (
    <>
      <P>
        Almost everyone hits this at some point. The chat starts great, finds a rhythm — then somewhere in the second half, it's suddenly like a different model:
      </P>
      <UL>
        <LI>Forgets things you said earlier</LI>
        <LI>Tone and style start drifting</LI>
        <LI>Repeats stuff it already covered</LI>
        <LI>Loses track of what you're actually working on</LI>
        <LI>Starts answering the wrong question entirely</LI>
      </UL>
      <P>
        Your first instinct is usually — "it forgot" or "it got dumber". The more accurate read is usually this:
        <Mark>that earlier content simply isn't visible to it anymore.</Mark>
      </P>

      <H3>Why it can't see it anymore</H3>
      <P>The longer the chat, the more prior context there is — but what it can see per turn is capped. So the early stuff tends to meet one of three fates:</P>
      <UL>
        <LI>Cut off outright</LI>
        <LI>Compressed into a shorter summary</LI>
        <LI>Pushed out by newer content</LI>
      </UL>
      <P>Once that section is outside what it can see this turn, it can't lean on it to answer you anymore.</P>

      <H3>Sometimes it "pretends it still remembers"</H3>
      <P>Here's the part that trips people up: even when the early context is gone from view, it won't necessarily say "I don't know anymore". It often keeps going, smoothly — which makes you think: "it must still remember, it's just not trying."</P>
      <P>More often, what's really happening: it's doing its best with the material still in front of it, but the missing piece has already nudged the direction off. So — <Mark>sounding smooth doesn't mean it still has the full picture.</Mark></P>

      <H3>How to think about this when it happens</H3>
      <P>The most useful move isn't frustration — it's a quick check: <em>are those key requirements still in its view right now?</em> Once you've answered that, the next step is obvious:</P>
      <UL>
        <LI>Paste the key requirements again</LI>
        <LI>Summarize what you've already settled on in a few bullets</LI>
        <LI>Or start a fresh chat with the essential context spelled out from the top</LI>
      </UL>
    </>
  ),
  scriptedTurns: [
    { fromUser: true, text: 'Write an article for readers meeting this topic for the first time' },
    { fromUser: true, text: 'Keep the tone accessible, skip the underlying mechanics' },
    { fromUser: true, text: 'End each chapter with a one-sentence summary' },
    { fromUser: false, text: 'Got it. Let me draft an outline first.' },
    { fromUser: true, text: 'Expand chapter two a bit more' },
    { fromUser: false, text: 'I rewrote a version — take a look' },
    { fromUser: true, text: 'Make the titles more direct' },
    { fromUser: true, text: 'Swap the examples for more everyday ones' },
    { fromUser: true, text: 'Can the layout breathe a bit more?' },
    { fromUser: true, text: 'Make the jargon in this section more plainspoken' },
    { fromUser: true, text: 'Add an analogy at the start of chapter three' },
    { fromUser: true, text: 'This transition feels a bit abrupt' },
  ],
  title: (
    <>
      <span className="block">Why does it</span>
      <span className="block">
        seem to <span className="text-ember">"forget"</span>?
      </span>
    </>
  ),
}

export default { en, zh }

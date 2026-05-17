import { H3, LI, Mark, P, Pull, UL } from '../components/Prose'

const zh = {
  caption: '像问同一个人两次——意思一致，措辞不同',
  eyebrow: '一点点随机，是默认的',
  keyLine: '答两次不一样，不是它"今天不灵"——是它本来就有一点点随机，这让它更像人，不那么像机器。',
  answers: [
    '清晨第一缕阳光落在吧台，第一壶豆子的香气正好。',
    '早安——咖啡豆磨好了，牛奶刚热到位，今天也准时开门。',
    '又一个晨光微亮的早上，咖啡机"咻"的一声，一天就这样开始了。',
    '今天又是一个被咖啡香气唤醒的早晨，欢迎光临。',
    '门帘刚拉开，第一壶手冲也刚好——愿你今天的第一口，也这么轻。',
  ],
  interactive: {
    emptyLabel: '点"再跑一次"开始',
    eyebrow: 'interactive · 同一问题跑 5 次',
    footNote: '每次都一字不差，反而像机器——一点随机是它故意设计的。',
    hint: '每次点按钮，看答案怎么变',
    observation: '✓ 观察：内容骨架都一样——"咖啡 + 清晨 + 欢迎"。变化的只是：用词、顺序、长度。',
    phraseDiffTag: '措辞不同',
    question: '"给咖啡店早晨开门写一句开场白"',
    questionLabel: '你的问题',
    resetBtn: '重置 ↺',
    runBtn: '再跑一次 ↻',
    skeletonTag: '骨架：咖啡 · 清晨 · 欢迎',
  },
  prose: (
    <>
      <P>
        刚开始用大模型，很多人都会遇到这个困惑：「我上次问过一模一样的问题，今天再问，怎么答得不太一样？是不是哪里出错了？」
      </P>

      <Pull>
        它不是从答案库里挑一个——它是一边写一边挑词，挑的时候带一点随机。
      </Pull>

      <H3>为什么这么设计</H3>
      <P>
        如果每次都一字不差地输出同样的内容，聊起来就像在读剧本。语言本身就有很多种表达方式，让它的表达有一点变化，看起来更自然，用着也更舒服。
      </P>

      <H3>最好的比喻</H3>
      <P>
        像问同一个人两次——他知道答案，但每次表达不同。有时更短，有时更文艺，有时铺垫多一点。<Mark>内容骨架一样，措辞会变。</Mark>
      </P>

      <H3>实用推论</H3>
      <UL>
        <LI><strong>别把一次的好/坏当终审</strong>——重要任务多问一次看看</LI>
        <LI>同一问题得到「骨架一致但措辞不同」的答案，是<strong>正常的</strong></LI>
        <LI>要稳定输出，靠<strong>把话说得特别明确</strong>来收敛（这就是下一章主题）</LI>
      </UL>

      <H3>顺便一提：温度（temperature）</H3>
      <P>
        模型内部有个"创造性旋钮"叫<Mark>温度</Mark>——调高像发散，调低像更稳。普通聊天你用不着调这个，<strong>知道它存在就够了</strong>。
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">同一个问题，</span>
      <span className="block">
        答两次也会<span className="text-ember">不一样</span>。
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: 'Like asking the same person twice — same meaning, different words',
  eyebrow: 'A little randomness is the default',
  keyLine: "Getting two different answers isn't the model 'having an off day' — there's a bit of randomness baked in by design. It makes it feel more like a person and less like a machine.",
  answers: [
    "The first light of morning catches the counter. First batch of beans, just right.",
    "Good morning — beans ground, milk warmed, doors open on time today.",
    "Another softly lit morning. The machine hisses. The day begins.",
    "Another morning that starts with the smell of coffee. Come on in.",
    "Curtain just up, first pour already done — may your first sip feel as light as this.",
  ],
  interactive: {
    emptyLabel: 'Click "Run again" to start',
    eyebrow: 'interactive · run the same question 5 times',
    footNote: "Word-for-word identical every time would feel like a machine — the little randomness is a deliberate choice.",
    hint: 'Click the button each time and watch how the answer shifts',
    observation: '✓ Notice: the skeleton stays the same — "coffee + morning + welcome". What changes: word choice, order, length.',
    phraseDiffTag: 'Phrasing varies',
    question: '"Write an opening line for a coffee shop opening up in the morning"',
    questionLabel: 'Your question',
    resetBtn: 'Reset ↺',
    runBtn: 'Run again ↻',
    skeletonTag: 'Skeleton: coffee · morning · welcome',
  },
  prose: (
    <>
      <P>
        New users hit this puzzle pretty quickly: "I asked the exact same thing last time and the answer today is different — did something go wrong?"
      </P>

      <Pull>
        It's not picking from a shelf of pre-written answers — it's choosing words as it writes, and there's a bit of randomness in that choosing.
      </Pull>

      <H3>Why is it designed this way?</H3>
      <P>
        If it spat out exactly the same text word-for-word every time, talking to it would feel like listening to a script. Language has many ways of saying the same thing — a little variation makes the replies feel more natural and easier to live with.
      </P>

      <H3>The best analogy</H3>
      <P>
        Like asking the same person twice — they know the answer, but they phrase it differently each time. A little shorter, a little more poetic, a little more setup. <Mark>The skeleton of the content stays the same; the words change.</Mark>
      </P>

      <H3>Practical takeaways</H3>
      <UL>
        <LI><strong>Don't treat one run as the final verdict</strong> — for anything that matters, ask again</LI>
        <LI>"Same skeleton, different words" between two runs is <strong>normal</strong></LI>
        <LI>For more stable output, lean on <strong>being very specific in what you ask</strong> to narrow the variance — that's the next chapter</LI>
      </UL>

      <H3>A quick side note: temperature</H3>
      <P>
        There's a "creativity dial" inside the model called <Mark>temperature</Mark> — higher is more varied, lower is steadier. For everyday use you don't need to touch it; <strong>just knowing it's there is enough</strong>.
      </P>
    </>
  ),
  title: (
    <>
      <span className="block">Same question,</span>
      <span className="block">
        ask twice and the answers <span className="text-ember">won't quite match</span>.
      </span>
    </>
  ),
}

export default { en, zh }

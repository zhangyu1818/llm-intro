import { H3, LI, Mark, P, UL } from '../components/Prose'

const zh = {
  caption: '它这一轮看得到的，只有眼前桌子上摊开的那一叠',
  eyebrow: '它的桌面有多大',
  keyLine: '它不是一直盯着完整的聊天记录，而是每一轮只看「当下能摆上桌的那一摞」。',
  interactive: {
    clearBtn: '清空',
    drawerLabel: '抽屉 · 点一下，放到桌上',
    eyebrow: 'interactive · 往桌面上堆点东西',
    hint: '装得下的留在桌上，装不下的会真的掉下去。切一下桌子大小试试。',
    limitLabel: (n: number) => `上限 ${n}`,
    overflowMsg: (n: number) => `超出 ${n} · 放不下的已经掉到桌外了`,
    usedLabel: (n: number) => `已占 ${n}`,
  },
  library: [
    { color: '#ffb020', label: '聊天记录', size: 34 },
    { color: '#ff5a3c', label: '一份 PDF', size: 60 },
    { color: '#4b8bff', label: '系统说明', size: 18 },
    { color: '#3ea16d', label: '用户偏好', size: 14 },
    { color: '#ff7a9a', label: '新闻摘要', size: 26 },
    { color: '#8a5cff', label: '长文档', size: 80 },
  ],
  prose: (
    <>
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
    </>
  ),
  sizePresets: [
    { id: 'small', hint: '较短上下文', label: '小桌面', value: 100 },
    { id: 'medium', hint: '常见上下文', label: '中桌面', value: 180 },
    { id: 'big', hint: '更长上下文', label: '大桌面', value: 320 },
  ],
  title: (
    <>
      <span className="block">聊天记录</span>
      <span className="block">
        不是<span className="stroke-sketch">无限</span>往上叠的
      </span>
    </>
  ),
}

const en: typeof zh = {
  caption: "This turn, it only sees what's currently spread out on the desk",
  eyebrow: 'How big is its desk?',
  keyLine: "It isn't staring at the full chat history. Every turn, it only sees the stack that fits on the desk right now.",
  interactive: {
    clearBtn: 'Clear',
    drawerLabel: 'drawer · click to place on desk',
    eyebrow: 'interactive · pile things onto the desk',
    hint: "What fits stays on the desk; what doesn't actually falls off. Try a different desk size.",
    limitLabel: (n: number) => `Limit ${n}`,
    overflowMsg: (n: number) => `Over by ${n} · the excess has fallen off the desk`,
    usedLabel: (n: number) => `Used ${n}`,
  },
  library: [
    { color: '#ffb020', label: 'Chat history', size: 34 },
    { color: '#ff5a3c', label: 'A PDF', size: 60 },
    { color: '#4b8bff', label: 'System prompt', size: 18 },
    { color: '#3ea16d', label: 'User prefs', size: 14 },
    { color: '#ff7a9a', label: 'News digest', size: 26 },
    { color: '#8a5cff', label: 'Long doc', size: 80 },
  ],
  prose: (
    <>
      <P>
        You can scroll back through a chat app forever, so it's tempting to assume the model can read all of it too. Usually it can't.
        <Mark>There's a cap on how much it can see in any single turn — that cap is called the context length.</Mark>
      </P>

      <H3>What "context length" actually means</H3>
      <P>The simplest way to think about it: when it answers you this turn, how much can it "spread out" at once? That's a lot more than the line you just sent:</P>
      <UL>
        <LI>The previous turns in this conversation</LI>
        <LI>Any documents you attached</LI>
        <LI>The system instructions running in the background</LI>
        <LI>The reply it's currently writing, still in progress</LI>
      </UL>
      <P>So "context length" isn't really "how long we can chat" — it's "how much it can spread out at one time."</P>

      <H3>When the desk runs out of room</H3>
      <P>It isn't sitting in front of an infinitely long chat window. The closer picture: each turn, the system pulls the relevant content and lays it in front of it. The more there is, the sooner it hits a very real problem — the desk is full. At that point, something has to give:</P>
      <UL>
        <LI>Keep the most recent content first</LI>
        <LI>Keep the most important content first</LI>
        <LI>Compress older stuff into a shorter summary</LI>
        <LI>Or just stop including the oldest bits in this turn at all</LI>
      </UL>
      <P>So: being able to scroll back in the chat UI doesn't mean the model still sees that content every turn.</P>

      <H3>Different models, different desks</H3>
      <UL>
        <LI>Smaller models typically handle shorter content</LI>
        <LI>Larger models can usually handle longer content</LI>
        <LI>Between products and versions, the gap can be big</LI>
      </UL>
      <P>But whatever the size, one thing holds: <Mark>however long it is, it's not infinite.</Mark></P>
    </>
  ),
  sizePresets: [
    { id: 'small', hint: 'short context', label: 'Small desk', value: 100 },
    { id: 'medium', hint: 'typical context', label: 'Medium desk', value: 180 },
    { id: 'big', hint: 'longer context', label: 'Large desk', value: 320 },
  ],
  title: (
    <>
      <span className="block">The chat history</span>
      <span className="block">
        doesn't stack up <span className="stroke-sketch">forever</span>
      </span>
    </>
  ),
}

export default { en, zh }

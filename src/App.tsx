import { Navigator } from './components/Navigator'
import { Chapter00 } from './sections/Chapter00'
import { Chapter01 } from './sections/Chapter01'
import { Chapter02 } from './sections/Chapter02'
import { Chapter03 } from './sections/Chapter03'
import { Chapter04 } from './sections/Chapter04'
import { Chapter05 } from './sections/Chapter05'
import { Chapter06 } from './sections/Chapter06'
import { Chapter07 } from './sections/Chapter07'
import { Chapter08 } from './sections/Chapter08'
import { Chapter09 } from './sections/Chapter09'
import { Chapter10 } from './sections/Chapter10'
import { Chapter11 } from './sections/Chapter11'
import { Chapter12 } from './sections/Chapter12'
import { Chapter13 } from './sections/Chapter13'
import { Chapter14 } from './sections/Chapter14'
import { Chapter15 } from './sections/Chapter15'
import { Chapter16 } from './sections/Chapter16'
import { Hero } from './sections/Hero'
import { Outro } from './sections/Outro'

function App() {
  return (
    <div className="relative">
      <Navigator />
      <main>
        <Hero />
        <Chapter00 />
        <Chapter01 />
        <Chapter02 />
        <Chapter03 />
        <Chapter04 />
        <Chapter05 />
        <Chapter10 />
        <Chapter06 />
        <Chapter11 />
        <Chapter07 />
        <Chapter08 />
        <Chapter09 />
        <Chapter12 />
        <Chapter13 />
        <Chapter14 />
        <Chapter15 />
        <Chapter16 />
        <Outro />
      </main>
    </div>
  )
}

export default App

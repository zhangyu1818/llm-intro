import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { LocaleProvider } from './i18n/LocaleContext.tsx'

import './index.css'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <LocaleProvider value="zh">
      <App />
    </LocaleProvider>
  </StrictMode>,
)

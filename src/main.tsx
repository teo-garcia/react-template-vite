import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { deferRender } from 'lib/misc/deferRender'

import { App } from './App'

deferRender().then(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
})

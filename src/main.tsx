import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { deferRender } from 'lib/misc/deferRender'

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})

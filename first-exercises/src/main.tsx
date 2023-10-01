import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App, { App2 } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './styles/fonts.css'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('appMouDiv')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

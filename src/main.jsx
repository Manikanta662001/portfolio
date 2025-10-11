import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ModeContextWrapper from '@/context/ModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ModeContextWrapper>
    <App />
  </ModeContextWrapper>,
)

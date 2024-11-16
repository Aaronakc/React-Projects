import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Context from './StoreContext/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context />
  </StrictMode>,
)

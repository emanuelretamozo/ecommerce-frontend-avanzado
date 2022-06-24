import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Paths from './routes'

import { AuthProvider } from './context/AuthContext'

import { store } from './app/store'
import { Provider } from 'react-redux'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Paths />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>
)

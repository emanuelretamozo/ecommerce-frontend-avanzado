import { Navigate, useRoutes } from 'react-router-dom'

import App from './pages/App'
import Login from './pages/Login'

import Productos from './components/Productos'
import Producto from './components/Producto'
import Search from './components/Search'

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/login' replace />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/productos',
      element: <App />,
      children: [
        {
          element: <Productos />,
          index: true
        },
        {
          path: 'producto/:name/:_id',
          element: <Producto />
        },
        {
          path: 'search',
          element: <Search />
        }
      ]
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return element
}

export default Paths

import { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [filterProductos, setFilterProductos] = useState([])
  const [sms, setSms] = useState({ type: '' })

  const handleFilterProductos = (value) => {
    const filtered = productos.filter(producto => {
      return producto.product_name.toLowerCase().match(value.toLowerCase())
    })

    if (filtered.length === 0) {
      setFilterProductos([])
      setSms({
        type: 'error',
        message: 'search not found'
      })
    } else {
      setFilterProductos(filtered)
      setSms({
        type: 'success',
        message: 'Productos found'
      })
    }
  }

  const initialValue = {
    setProductos,
    handleFilterProductos,
    filterProductos,
    sms
  }

  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }

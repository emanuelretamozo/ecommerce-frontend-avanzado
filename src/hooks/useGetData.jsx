import { useEffect, useState } from 'react'
import { getData } from '../services'
import useAppContext from './useAppContext'

const useGetData = (name = '') => {
  const { setProductos } = useAppContext()
  const { loading, setLoading } = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: productos } = await getData(name)
        setProductos(productos)
      } catch ({ message }) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [name])

  return { loading, error }
}

export default useGetData

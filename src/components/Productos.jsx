import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import useFetcher from '../hooks/useFetcher'

const Productos = () => {
  const { setProductos } = useAppContext()

  const {
    data: productos,
    error
  } = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')

  if (error) return <p>{error.message}</p>

  useEffect(() => {
    setProductos(productos)
  }, [])

  return (
    <section className='row gy-4'>
      {productos.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`producto/${index.product_name}`}>
            <article className='card'>
              <img loading='lazy' className='card-img-top' src={index.image} alt={index.product_name} />
              <div className='card-body'>
                <p className='card-title'>{index.product_name}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Productos

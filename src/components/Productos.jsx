import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import useFetcher from '../hooks/useFetcher'
import Card from '../components/Card'

const Productos = () => {
  const { setProductos } = useAppContext()

  const {
    data: productos,
    error
  } = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')

  if (error) return <p>{error.message}</p>

  useEffect(() => {
    setProductos(productos)
  }, [productos])

  return (
    <section className='row gy-4'>
      {productos?.map((product, index) => (
        <div key={index} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`producto/${product?.product_name}/${product?._id}`}>
            <Card
              name={product?.product_name}
              description={product?.description}
              price={product?.price}
              brand={product?.brand}
              url={product?.image || product?.images}
            />
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Productos

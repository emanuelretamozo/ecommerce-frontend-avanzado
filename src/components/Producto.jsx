import { useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'

const Producto = () => {
  const { _id } = useParams()

  const {
    data: product,
    error
  } = useFetcher(`https://ecomerce-master.herokuapp.com/api/v1/item/${_id}`)

  if (error) return <p>{error}</p>

  return (
    <article>
      <p>{product?.product_name}</p>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <p>{product?.category}</p>
      <p>{product?.brand}</p>
      <img loading='lazy' width={400} height={300} src={product?.image || product?.images} alt='imagen' />
    </article>
  )
}

export default Producto

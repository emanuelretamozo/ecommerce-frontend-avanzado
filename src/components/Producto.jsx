import { useParams } from 'react-router-dom'
import useFetcher from '..hooks/useFetcher'

const Producto = () => {
  const { _id = '' } = useParams()

  const {
    data: producto,
    error
  } = useFetcher(`https://ecomerce-master.herokuapp.com/api/v1/item/${_id}`)

  if (error) return <p>{error}</p>

  return (
    <article>
      <p>{producto[0].product_name}</p>
      <p>{producto[0].description}</p>
      <p>{producto[0].price}</p>
      <p>{producto[0].category}</p>
      <p>{producto[0].brand}</p>
      <img loading='lazy' width={400} height={300} src={producto[0].image} />
    </article>
  )
}

export default Producto

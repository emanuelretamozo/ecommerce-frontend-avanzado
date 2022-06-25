import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

const Search = () => {
  const { filterProductos, sms } = useAppContext()

  if (sms.type === 'error') {
    return (<p className='alert alert-danger' role='alert'>{sms.message}</p>)
  }

  if (sms.type === 'success') {
    return (
      <>
        <p className='alert alert success' role='alert'>
          {sms.message} <span>{filterProductos.length}</span>
        </p>
        <section className='row gy-4'>
          {filterProductos.map((index, key) => (
            <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <Link to={`/productos/producto/${index.product_name}`}>
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
      </>
    )
  }

  return (
    <p className='alert alert-info' role='alert'>Busque un producto</p>
  )
}

export default Search

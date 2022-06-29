import notFoundImg from '../assets/404-error.png'

const Card = ({ name, description, price, category, brand, url }) => {
  return (
    <>
      <h3>{name}</h3>
      <span style={{
        width: '50px',
        height: '50px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
      >{description}
      </span>
      <p>{price}</p>
      <p>{category}</p>
      <p>{brand}</p>
      {url?.includes('http' || 'http')
        ? (<img
            width={300}
            height={300}
            src={url || notFoundImg}
           />)
        : (
          <img
            width={300}
            height={300}
            src={notFoundImg}
          />
          )}
    </>
  )
}

export default Card

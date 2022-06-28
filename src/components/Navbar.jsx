import { useRef } from 'react'
import {
  FaShoppingCart,
  FaProductHunt,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser
} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../auth/authSlice'

const NavBar = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { handleFilterProductos } = useAppContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimValue = searchRef.current.value.trim()
    if (trimValue !== '') {
      handleFilterProductos(trimValue)
      navigate('/productos/search', { replace: true })
      event.target.reset()
    }
  }

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('login')
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <FaShoppingCart />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#mainNavbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='mainNavbar'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/productos'
              >
                <FaProductHunt />
              </Link>
            </li>
          </ul>
          <form className='d-flex' onSubmit={handleSubmit}>
            <input
              ref={searchRef}
              className='form-control me-2'
              type='search'
              placeholder='search product'
              aria-label='search'
            />
            <button className='btn btn-outline-success'>🔎</button>
          </form>
        </div>
        <ul>
          {user
            ? (
              <li>
                <button className='btn' onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
              )
            : (
              <>
                <li>
                  <Link to='/login'>
                    <FaSignInAlt />Login
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <FaUser /> Registrar
                  </Link>
                </li>
              </>
              )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

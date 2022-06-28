import axios from 'axios'

const API_URL = 'https://ecomerce-master.herokuapp.com/api/v1/signup'

const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  if (response.data) {
    // eslint-disable-next-line no-undef
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const login = async (userData) => {
  const response = await axios.post(API_URL + 'logn', userData)
  if (response.data) {
    // eslint-disable-next-line no-undef
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const logout = () => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login
}

export default authService

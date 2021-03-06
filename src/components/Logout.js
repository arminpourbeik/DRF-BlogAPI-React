import { useEffect } from 'react'
import axiosInstance from '../api'
import { useHistory } from 'react-router-dom'

function SignUp() {
  const history = useHistory()

  useEffect(() => {
    const response = axiosInstance.post('/user/logout/blacklist/', {
      refresh_token: localStorage.getItem('refresh_token'),
    })
    console.log(response)

    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    axiosInstance.defaults.headers['Authorization'] = null
    history.push('/login')
  })
  return <div>Logout</div>
}

export default SignUp

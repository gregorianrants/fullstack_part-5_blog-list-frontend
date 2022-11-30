import { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const signedInUser = JSON.parse(localStorage.getItem('signedInUser'))
    console.log(signedInUser)
    if (signedInUser) {
      blogService.setToken(signedInUser.token)
      setUser(signedInUser)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('signedInUser')
    setUser(null)
    console.log(user)
  }

  return user ? (
    <Blogs user={user} handleLogout={handleLogout} />
  ) : (
    <LoginForm setUser={setUser} />
  )
}

export default App

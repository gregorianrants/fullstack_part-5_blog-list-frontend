import { useState } from 'react'
import blogService from '../services/blogs'
import loginService from '../services/login'

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const user = await loginService.login({ username, password })
    blogService.setToken(user.token)
    localStorage.setItem('signedInUser', JSON.stringify(user))
    setUser(user)
  }

  return (
    <div>
      <h2>log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm

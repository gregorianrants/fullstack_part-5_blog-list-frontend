import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  
  const [user,setUser] = useState(null)
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  useEffect(() => {
    if(user){
      blogService.getAll().then(blogs =>
        setBlogs( blogs )
      ) 
    }
  }, [user])

  const handleLogin= async (e)=>{
    e.preventDefault()
    const user = await loginService.login({username,password})
    blogService.setToken(user.token)
    setUser(user)
  }

  console.log('user',user)
  const renderBlogs = ()=>(
    <div>
      <h2>blogs</h2>
     <p>{user.name} logged in</p>
     <div>
     {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
     </div>
    </div>
  )

  const renderForm = ()=>(
    <form onSubmit={handleLogin}>
      <div>
        username
        <input 
        type='text'
        name='Username'
        onChange={({target})=>setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input 
        type='password'
        name='Password'
        onChange={({target})=>setPassword(target.value)}
        />
      </div>
      <button type='submit'>login</button>
    </form>
  )


  return (
    user
    ?
    renderBlogs()
    :
    renderForm()
  )
}

export default App
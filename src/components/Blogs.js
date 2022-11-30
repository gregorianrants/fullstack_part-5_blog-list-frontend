import Blog from './Blog'
import { useEffect, useState } from 'react'
import blogService from '../services/blogs'

const Blogs = ({ user, handleLogout }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  return (
    <div>
      <h2>blogs</h2>
      <p>
        {user.name} logged in <button onClick={handleLogout}>logout</button>
      </p>
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default Blogs

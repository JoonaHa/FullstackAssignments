import React, { useState, useEffect, } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  
  
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])



  const addBlog = (event) => {
    event.preventDefault()
    const newBlog = {
      title: title,
      author: author,
      url: url
    }

    blogService
      .create(newBlog).then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
       setAuthor('')
       setTitle('')
       setUrl('')

      })
  }


  const logout = () => {
      window.localStorage.clear()
      window.location.reload(true)
  }




  const blogForm = () => (
    <form onSubmit={addBlog}>
    <div>
      Title:  
      <input
        value={title}
        name ="Title"
        onChange= {({ target }) => setTitle(target.value)}
      />
    </div>
    <div>
      Author:  
      <input
        value={author}
        name ="Author"
        onChange={({ target }) => setAuthor(target.value)}
      />
    </div>
    <div>
      URL:  
      <input
        value={url}
        name ="URL"
        onChange={({ target }) => setUrl(target.value)}
      />
      </div>
      <button type="submit">create</button>
    </form>  
  )

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        käyttäjätunnus
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        salasana
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">kirjaudu</button>
    </form>      
  )

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      console.log("logged in")
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setTimeout(() => {
      }, 5000)
      console.log('invalid username or password')
    }

  }

    if (user === null) {
      return (
        <div>
          <h2>Log in to application</h2>
          {loginForm()}
        </div>
      )
    } 
    else {
  
    return (
      <div>
        <h2>Blogs</h2>
        <p>logged in as {user.name}</p>

        <button type="submit" onClick={logout}> logout </button>

        <h2>Create New</h2>
        {blogForm()}

        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )
        }
  
}


export default App
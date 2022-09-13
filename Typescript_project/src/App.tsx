import './scss/main.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    axios.get(url).
      then((response) => setBlogs(response.data))
  }, [])

  return (
    <>
      {blogs.map((posts) => {
        return <div key={posts.id}>
          <h3>{posts.title}</h3>
          <h5>{posts.body}</h5>
        </div>
      })}
    </>
  )
}

export default App

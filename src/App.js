import { useEffect, useState } from 'react'
import Posts from './components/Posts'
import PostLoadingComponent from './components/PostLoading'
import axios from './api'

function App() {
  // State
  const [appState, setAppState] = useState({ loading: false, posts: null })
  const PostsOrLoading = PostLoadingComponent(Posts)

  useEffect(() => {
    async function getPosts() {
      setAppState({ loading: true })
      const response = await axios.get('/')
      const posts = response.data

      setAppState({ loading: false, posts: posts })

      console.log(posts)
    }

    // POST request to get posts
    getPosts()

    // Cleanup function
    return () => {}
  }, [setAppState])

  return (
    <div className='App'>
      <h1>Latest Posts</h1>
      <PostsOrLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  )
}

export default App

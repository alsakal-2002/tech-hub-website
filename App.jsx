import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Post from './Post'

function App() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const postsPerPage = 10

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts. Please try again later.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const totalPages = Math.ceil(posts.length / postsPerPage)

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="app">
      <h1>Blog Posts</h1>
      
      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <div className="posts-container">
            {currentPosts.length > 0 ? (
              currentPosts.map(post => (
                <Post key={post.id} post={post} />
              ))
            ) : (
              <p>No posts found.</p>
            )}
          </div>

          <div className="pagination">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            <span>Page {currentPage}</span>
            
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App

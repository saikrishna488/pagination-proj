import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Posts from './components/Posts'
import Pagination from './components/Pagination'

function App() {
  const [getPosts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(8)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let res = await axios.get("https://jsonplaceholder.typicode.com/photos");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts()
  }, []);

  const paginate = (number) =>{
    setCurrentPage(number)
  }
  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getPosts.slice(indexOfFirstPost,indexOfLastPost)

  return (
    <>
    <h1 style={{textAlign:"center"}}>Posts</h1>
    <Posts posts={currentPosts}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={getPosts.length} paginate={paginate} />
    </>
  );
}

export default App;

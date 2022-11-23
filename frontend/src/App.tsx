import { useEffect, useState } from "react";
import { PostCard } from "./components/PostCard";
import { Post } from "./types";
import axios from "axios";
import { Input } from "./components/Input";

function App() {
  const [posts, setPosts] = useState<Post[]>();
  const [filteredPosts, setFilteredPosts]  = useState<Post[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Carregando posts...</h1>;
  } else {
    return (
      <>
        <div className="container-fluid bg">
          <div className="container mt-3">
            <Input posts={posts} setFilteredPosts={setFilteredPosts} />
            {filteredPosts?.map((post, index) => {
              return (
                <PostCard
                  key={index}
                  title={post.title}
                  author={post.author}
                  date={new Date(post.createdAt)}
                  body={post.body}
                  category={post.category}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;

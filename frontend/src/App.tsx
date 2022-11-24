import axios from "axios";
import { useEffect, useState } from "react";

import { PostCard } from "./components/PostCard";
import { Post } from "./types";
import { Input } from "./components/Input";

import "./assets/app.css"
import { NewPostModal } from "./components/NewPostModal";

function App() {
  const [posts, setPosts] = useState<Post[]>();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);

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
  }, [modalShow]);

  if (loading) {
    return <h1>Carregando posts...</h1>;
  } else {
    return (
      <>
        <NewPostModal
          modalShow={modalShow}
          setModalShow={setModalShow}
        />
        <div className="container-fluid bg">
          <div className="container mt-3">
            <div className="title d-flex justify-content-between">
              <h1 className="display-4 mt-4 mb-3">Posts</h1>
              <button className="display-4" onClick={() => setModalShow(true)}>+</button>
            </div>
            <Input
              posts={posts}
              filteredPosts={filteredPosts}
              setFilteredPosts={setFilteredPosts}
            />
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

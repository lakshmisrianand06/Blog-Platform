import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  // Fetch posts from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((res) => setPosts(res.data));
  }, []);

  // Add new post
  const addPost = async () => {
    if (newPost.title && newPost.content) {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      setPosts([res.data, ...posts]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <div className="App">
      <h1>📝 Blogging Platform</h1>

      <div className="create-post">
        <input
          type="text"
          placeholder="Enter title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Write your content..."
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>

      <div className="posts">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

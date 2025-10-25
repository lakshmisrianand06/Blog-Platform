import React, { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { title: "My First Blog", content: "Welcome to my blogging platform!" },
    { title: "Learning React", content: "React makes frontend fun and easy." },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const addPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([newPost, ...posts]);
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
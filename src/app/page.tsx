"use client"; // Required for client-side rendering in Next.js

import { useEffect, useState } from "react";

interface Post {
  _id: string;
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/api/posts") // Update if your port is different
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Blog Posts</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post._id} style={{ marginBottom: "20px" }}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </ul>
    </div>
  );
}

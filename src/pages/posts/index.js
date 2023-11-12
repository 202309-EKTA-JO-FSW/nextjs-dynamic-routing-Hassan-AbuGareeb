import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(ALL_POSTS_URL)
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);

  const postItems = posts.map((post) => {
    return <Post key={post.id} title={post.title} id={post.id} />;
  });
  console.log(postItems);
  return <div>{postItems.length === 0 ? null : postItems}</div>;
};

export default Posts;

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const FullPost = () => {
  const router = useRouter();
  const [postInfo, setPostInfo] = useState({});

  console.log(router.query.id);
  useEffect(() => {
    if (!router.query.id) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`)
      .then((resp) => resp.json())
      .then((data) => setPostInfo({ ...data }));
  }, [router]);
  // console.log(postInfo);
  return (
    <div>
      <h1>{postInfo.title}</h1>
      <h2>posted by : {postInfo.id}</h2>
      <p>{postInfo.body}</p>
    </div>
  );
};

export default FullPost;

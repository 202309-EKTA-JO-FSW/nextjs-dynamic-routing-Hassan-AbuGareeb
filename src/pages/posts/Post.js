import Link from "next/link";
import React from "react";

const Post = ({ title, id }) => {
  return (
    <div>
      <Link href={`/posts/${id}`}>
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default Post;

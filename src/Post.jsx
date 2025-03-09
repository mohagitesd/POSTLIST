import React from "react";

const Post = ({ title, body }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
};

export default Post;

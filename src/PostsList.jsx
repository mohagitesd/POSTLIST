import React from "react";
import Post from "./Post";

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </ul>
  );
};

export default PostsList;

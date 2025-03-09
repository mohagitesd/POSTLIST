import React from "react";
import useFetch from "./useFetch";

const PostDetail = ({ postId }) => {
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="post-detail">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default PostDetail;

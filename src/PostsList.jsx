import React from "react";
import Post from "./Post";

const PostsList = ({ posts, onSelectPost }) => {
  console.log("Posts reçus :", posts); // Vérifier si les posts arrivent bien
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div>
            <Post title={post.title} body={post.body} />
            <button onClick={() => onSelectPost(post.id)}>Voir Détails</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;

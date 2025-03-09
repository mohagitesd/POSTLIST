// src/App.js
import React from "react";
import "./App.css";
import PostsList from "./PostsList";
import useFetch from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(data);

  return (
    <div>
      <h1>Liste des Posts</h1>
      <>{data && <PostsList posts={data} />}</>
    </div>
  );
}

export default App;

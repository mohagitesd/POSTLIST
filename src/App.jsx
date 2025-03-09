import React, { useState } from "react";
import "./App.css";
import PostsList from "./PostsList";
import PostDetail from "./PostDetail";
import useFetch from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const { data, loading, error } = useFetch(url);
  const [selectedPostId, setSelectedPostId] = useState(null);

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Liste des Posts</h1>
      {data && (
        <PostsList posts={data} onSelectPost={(id) => setSelectedPostId(id)} />
      )}
      {selectedPostId && <PostDetail postId={selectedPostId} />}
    </div>
  );
}

export default App;

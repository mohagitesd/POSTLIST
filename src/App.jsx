import React, { useState } from "react";
import "./App.css";
import PostsList from "./PostsList";
import PostDetail from "./PostDetail";
import useFetch from "./useFetch";
//import { useNavigate } from "react-router";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const { data, loading, error } = useFetch(url);
  const [selectedPostId, setSelectedPostId] = useState(null);
  //const navigate = useNavigate();
  /*const handleClick = () => {
    // navigation vers la page de détail avec l’ID du produit
    navigate(`/posts/${id}`);
  };*/

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

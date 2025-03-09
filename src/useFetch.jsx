import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    const controller = new AbortController();
    const { signal } = controller;

    setTimeout(() => {
      fetch(url, { signal })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Erreur HTTP : " + res.status);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setLoading(false);
            setError("An error occurred. Awkward..");
          }
        });
    }, 1000);

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

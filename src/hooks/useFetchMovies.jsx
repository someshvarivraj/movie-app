import { useState, useEffect } from "react";
import { FetchApi } from "../api/omdbApi";

const UseFetchMovies = (searchTerm, year) => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMovies = async () => {
      try {
        if (!searchTerm) {
          setError("Please Input Movie Name");
          setMovies(null);
          console.log("a");
        } else {
          console.log(searchTerm);
          console.log("b");

          const data = await FetchApi(searchTerm, year);

          if (data.Response === "True") {
            setMovies(data.Search);
            setError(null);
          } else {
            setError(data.Error);
            setMovies(null);
          }
        }
      } catch (error) {
        setError("An err occurred while fetching the movies.");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [searchTerm, year]);
  return { movies, error, loading };
};
export default UseFetchMovies;

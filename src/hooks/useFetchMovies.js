import { useState, useEffect } from "react";
import { FetchApi } from "../api/omdbApi";

const UseFetchMovies = (searchTerm, year) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMovies = async () => {
      try {
        if (!searchTerm) {
          setError("Please Input Movie Name");
        } else {
          const data = await FetchApi(searchTerm, year);

          if (data.Response === "True") {
            setMovies(data.Search);
          } else {
            setError(data.Error);
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

import { useState, useEffect } from "react";
import { FetchApi } from "../api/omdbApi";

const useFetchMovies = (searchTerm, year) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMovies = async () => {
      try {
        if (!searchTerm) {
          setError("Please Input Movie Name");
          setMovies([]);
         
        } else {
          //console.log(searchTerm);
          const data = await FetchApi(searchTerm, year);
          if (data.Response === "True") {
            setMovies(data.Search);
            setError(null);
          } else {
            setError(data.Error);
            setMovies([]);
          }
        }
      } catch (error) {
        setError("An err occurred while fetching the movies.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [searchTerm, year]);
  return { movies, error, loading };
};
export default useFetchMovies;

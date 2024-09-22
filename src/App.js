import "./App.css";
import MovieCard from "./components/MovieCard";
import Movie from "./components/MovieCard";
import MoviesTable from "./components/MoviesTable";
import { useState, useEffect } from "react";
import useFetchMovies from "./hooks/useFetchMovies";
import { API_KEY } from "./utils/constants";
import SearchBox from "./components/SearchBox";
import HeadingType from "./components/HeadingType";
import DropDown from "./components/DropDown";
import Alert from "./components/Alert";
import SerachButton from "./components/SearchButton";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [errorState, setErrorState] = useState(null); // New error state for reset
  const [moviess, setMovies] = useState([]);
  const { movies, error, loading } = useFetchMovies(searchTerm);
  useEffect(() => {
    if (movies) {
      setMovies(movies);
      setErrorState(null);
    } else {
      setErrorState(error);
    }
  }, [movies]);
  useEffect(() => {
    if (error) {
      setErrorState(error);
      setMovies([]);
    }
  }, [error]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className=" flex flex-col">
      <div className="fixed top-0 right-0 left-0 z-10 flex justify-between m-2 p-2">
        <div className="flex flex-row justify-between">
          <HeadingType heading="Movies" />
          <HeadingType heading="Favourites" />
        </div>
        <div className="flex flex-row justify-between">
          <DropDown />
          <SearchBox movie={searchValue} setMovie={setSearchValue} />
          <SerachButton a={searchValue} b={setSearchTerm} />
        </div>
      </div>
      {errorState ? (
        <div className="flex  justify-center mt-20">
          <Alert msg={error} />
        </div>
      ) : (
        <div className="mt-20">
          <MoviesTable movies={moviess} />
        </div>
      )}
    </div>
  );
}

export default App;

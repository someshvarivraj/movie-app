import "./App.css";

import MoviesTable from "./components/MoviesTable";
import { useState, useEffect } from "react";
import useFetchMovies from "./hooks/useFetchMovies";
import SearchBox from "./components/SearchBox";
import HeadingType from "./components/HeadingType";
import DropDown from "./components/DropDown";
import Alert from "./components/Alert";
import SerachButton from "./components/SearchButton";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [errorState, setErrorState] = useState(null); 
  const [moviess, setMovies] = useState([]);
  const { movies, error, loading } = useFetchMovies(searchTerm);
  useEffect(() => {
    if (movies) {
      console.log("error null hua");
      setMovies(movies);
      setErrorState(null);
    } else {
      setErrorState(error);
      console.log("movies null hua and error set hua");
    }
  }, [movies]);
  useEffect(() => {
    if (error) {
      console.log(error);
      setErrorState(error);
      setMovies(null);
      console.log(" same in error useEffect movies null hua and error set hua");
    } else {
      console.log("error null he");
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

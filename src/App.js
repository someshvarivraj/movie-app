import "./App.css";

import MoviesTable from "./components/MoviesTable";
import { useState, useEffect } from "react";
import useFetchMovies from "./hooks/useFetchMovies";
import SearchBox from "./components/SearchBox";
import HeadingType from "./components/HeadingType";
import DropDown from "./components/DropDown";
import Alert from "./components/Alert";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { movies, error, loading } = useFetchMovies(searchValue);

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
        </div>
      </div>
      {error ? (
        <div className="flex  justify-center mt-20">
          <Alert msg={error} />
        </div>
      ) : (
        <div className="mt-20">
          <MoviesTable movies={movies} />
        </div>
      )}
    </div>
  );
}

export default App;

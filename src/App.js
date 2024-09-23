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
  const [favourites, setFavourites] = useState(new Map());
  const [showFavourites, setShowFavourites] = useState(false);
  const { movies, error, loading } = useFetchMovies(searchValue);

  // Getting Faav movies from local storage
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-favourite-movies")
    );
    if (movieFavourites) {
      const favMap = new Map(movieFavourites);
      console.log(favMap);
      setFavourites(favMap);
    }
  }, []);

  //Favourite Handler
  const toggleFavourites = () => {
    console.log("clicked");
    setShowFavourites((prev) => !prev);
  };

  if (loading) return <p>Loading...</p>;

  //Displaying Fav or All movies
  const displayedMovies = showFavourites
    ? Array.from(favourites.values())
    : movies;

  console.log(displayedMovies);

  return (
    <div className=" flex flex-col">
      <div className="fixed top-0 right-0 left-0 z-10 flex justify-between m-2 p-2">
        <div className="flex flex-row justify-between">
          <HeadingType heading="Movies" />
          <HeadingType
            heading="Favourites"
            onClick={toggleFavourites}
            bg={showFavourites}
          />
        </div>
        <div className="flex flex-row justify-between">
          <DropDown />
          <SearchBox movie={searchValue} setMovie={setSearchValue} />
        </div>
      </div>
      {showFavourites ? (
        <div className="mt-20">
          <MoviesTable
            movies={displayedMovies}
            favMap={favourites}
            setFavMap={setFavourites}
          />
        </div>
      ) : error ? (
        <div className="flex  justify-center mt-20">
          <Alert msg={error} />
        </div>
      ) : (
        <div className="mt-20">
          <MoviesTable
            movies={displayedMovies}
            favMap={favourites}
            setFavMap={setFavourites}
          />
        </div>
      )}
    </div>
  );
}

export default App;

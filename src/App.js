import "./App.css";
import MovieCard from "./components/MovieCard";
import Movie from "./components/MovieCard";
import MoviesTable from "./components/MoviesTable";
import { useState, UseEffect } from "react";
import UseFetchMovies from "./hooks/useFetchMovies";
import { API_KEY } from "./utils/constants";
import SeachBox from "./components/SeachBox";
import HedingType from "./components/HedingType";
import DropDown from "./components/DropDown";

function App() {
  const { movies, error, loading } = UseFetchMovies("batman", 2017);
  if (loading) return <p>Loading...</p>;
  if (error) return <p> {error} </p>;

  return (
    <div className=" flex flex-col">
      <div className="fixed top-0 right-0 left-0 z-10 flex justify-between m-2 p-2">
        <div className="flex flex-row justify-between">
          <HedingType heading="Movies" />
          <HedingType heading="Favourites" />
        </div>
        <div className="flex flex-row justify-between">
          <DropDown />
          <SeachBox />
        </div>
      </div>
      <div className="mt-20">
        <MoviesTable movies={movies} />
      </div>
    </div>
  );
}

export default App;

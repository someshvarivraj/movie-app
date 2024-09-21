import "./App.css";
import MovieCard from "./components/MovieCard";
import Movie from "./components/MovieCard";
import MoviesTable from "./components/MoviesTable";
import { useState, UseEffect } from "react";
import UseFetchMovies from "./hooks/useFetchMovies";
import { API_KEY } from "./utils/constants";

function App() {
  const { movies, error, loading } = UseFetchMovies("batman", 2017);
  if (loading) return <p>Loading...</p>;
  if (error) return <p> {error} </p>;

  return (
    <div>
      {/* <MoviesTable MovieProp={<MovieCard />} movies={[]} /> */}
      <h1>Redy to go</h1>
    </div>
  );
}

export default App;

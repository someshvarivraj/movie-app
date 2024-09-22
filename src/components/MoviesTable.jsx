import React from "react";
import MovieCard from "./MovieCard";

const MoviesTable = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit gap-4 p-4">
      {props.movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesTable;

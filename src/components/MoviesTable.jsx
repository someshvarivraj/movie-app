import React from "react";
import MovieCard from "./MovieCard";

const MoviesTable = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit gap-8 p-8">
      {props.movies.map((movie,index) => (
        <MovieCard
          key={index}
          movie={movie}
          favMap={props.favMap}
          setFavMap={props.setFavMap}
        />
      ))}
    </div>
  );
};

export default MoviesTable;

import React from "react";

const MovieCard = (props) => {
  return (
    <div className="card lg:card-side bg-gray-900 hover:bg-black shadow-xl w-64 mx-auto rounded">
      <figure className="w-full h-full">
        <img
          src={props.movie.Poster}
          alt="Album"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-2 flex flex-col items-start">
        <h3 className=" font-semibold">{props.movie.Title}</h3>
        <p>{props.movie.Year}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Info</button>
        </div> */}
        <div className="rating gap-1 w-full  flex flex-row justify-end ">
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-lime-400"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

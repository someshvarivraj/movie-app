import React from "react";
import { useState, useEffect } from "react";

import { FetchApiById } from "../api/omdbApi";
import { generateBoxOffice, generateText } from "../hooks/randomGenerators";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieData, setMovieData] = useState({});
  const [generatedBoxOffice, setGeneratedBoxOffice] = useState(null);
  const [generatedText, setGeneratedText] = useState("");
  const getMovieData = async (id) => {
    const data = await FetchApiById(id);
    if (data) {
      setMovieData(data);
    }
    console.log(data);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
    getMovieData(props.movie.imdbID);
    console.log(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (!movieData.BoxOffice || movieData.BoxOffice === "N/A") {
      const boxOfficeValue = generateBoxOffice();
      setGeneratedBoxOffice(boxOfficeValue);
    }

    if (!movieData.Plot || movieData.Plot === "N/A") {
      const text = generateText();
      setGeneratedText(text);
    }
  }, [movieData]);

  return (
    <>
      <div
        className="card lg:card-side bg-gray-900 hover:bg-black shadow-xl w-64 mx-auto rounded-lg"
        onClick={handleOpenModal}
      >
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
      {/* Modal */}
      {isModalOpen && (
        <dialog
          id={`modal_${movieData.imdbID}`}
          className="modal modal-bottom sm:modal-middle rounded-lg"
          open={isModalOpen}
        >
          <div className="modal-box bg-slate-600 rounded-lg">
            <h3
              className="font-semibold
             mb-1"
            >
              {movieData.Title}
            </h3>
            <div className="avatar flex flex-row justify-center">
              <div className="w-24 rounded ">
                <img src={movieData.Poster} />
              </div>
            </div>
            <p className="py-4 flex flex-row">
              <div className="mr-1 font-semibold">Rating:</div>
              <div className="ml-1 font-thin">{movieData.imdbRating}</div>
            </p>
            <p className="py-4 flex flex-row">
              <div className="mr-1 font-semibold">Box Office:</div>
              <div className="ml-1 font-thin">
                {movieData.BoxOffice && movieData.BoxOffice !== "N/A" ? (
                  movieData.BoxOffice
                ) : (
                  <h1 className="text-red-500">
                    <span>${generatedBoxOffice}</span>
                  </h1>
                )}
              </div>
            </p>
            <p className="flex flex-row justify-between">
              <div className="mr-1 font-semibold">Plot:</div>
              <div className="ml-1 font-thin">
                {movieData.Plot && movieData.Plot !== "N/A" ? (
                  movieData.Plot
                ) : (
                  <span className="text-red-400">{generatedText} </span>
                )}
              </div>
            </p>
            <div className="modal-action flex flex-row justify-center ">
              <button
                className="btn bg-white font-semibold text-black rounded-lg  hover:bg-white hover:text-black border-none"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default MovieCard;

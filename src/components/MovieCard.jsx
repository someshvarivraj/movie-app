import React from "react";
import { useState, useEffect } from "react";

import { FetchApiById } from "../api/omdbApi";
import { generateBoxOffice, generateText } from "../utils/randomGenerators";
import Alert from "./Alert";
import defaultPoster from "../assets/popcorn.png";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [generatedBoxOffice, setGeneratedBoxOffice] = useState(null);
  const [generatedText, setGeneratedText] = useState("");
  const [error, setError] = useState(null);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [firstTimeHeart, setFirstTimeHeart] = useState(false);

  //fetch API
  const getMovieData = async (id) => {
    try {
      const data = await FetchApiById(id);

      setMovieData(data);
      setError(null);
      console.log(data);
    } catch (error) {
      setError("An err occurred while fetching the movie.");
    }
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
    getMovieData(props.movie.imdbID);
    console.log(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //mark favmovies
  useEffect(() => {
    const favMap = props.favMap;

    if (favMap && favMap.has(props.movie.imdbID)) {
      setFirstTimeHeart(true);
    } else {
      setFirstTimeHeart(false);
    }
  }, [props.favMap, props.movie.imdbID]);

  // To save fav movie in local storage
  const saveToLocalStorage = (newFavMap) => {
    console.log("saved");
    const favArr = Array.from(newFavMap);
    localStorage.setItem("react-favourite-movies", JSON.stringify(favArr));
  };

  const addFavouriteMovie = (movie) => {
    console.log("addfav");
    const newFavMap = new Map(props.favMap);
    if (!newFavMap.has(movie.imdbID)) {
      newFavMap.set(props.movie.imdbID, movie);
      props.setFavMap(newFavMap);
      saveToLocalStorage(newFavMap);
    }
  };
  const removeFavouriteMovie = (imdbID) => {
    console.log("remove");
    const newFavMap = new Map(props.favMap);
    if (newFavMap.delete(imdbID)) {
      console.log("movie with  ${imdbID} has been removed");
    } else {
      console.log("movieis not found in favourite list");
    }
    props.setFavMap(newFavMap);
    saveToLocalStorage(newFavMap);
  };
  const handleHeartClicked = async (e) => {
    console.log("clicked");
    e.stopPropagation();
    if (isHeartFilled || firstTimeHeart) {
      removeFavouriteMovie(props.movie.imdbID);
      setFirstTimeHeart(false);
    } else {
      addFavouriteMovie(props.movie);
    }
    setIsHeartFilled(!isHeartFilled);
  };

  //load moviedata
  useEffect(() => {
    if (movieData && Object.keys(movieData).length > 0) {
      // Only generate BoxOffice if the real data is missing
      if (!movieData.BoxOffice || movieData.BoxOffice === "N/A") {
        const boxOfficeValue = generateBoxOffice();
        setGeneratedBoxOffice(boxOfficeValue);
      } else {
        setGeneratedBoxOffice(null);
      }

      // Only generate Plot if the real data is missing
      if (!movieData.Plot || movieData.Plot === "N/A") {
        const text = generateText();
        setGeneratedText(text);
      } else {
        setGeneratedText("");
      }
    }
  }, [movieData]);

  return (
    <>
      <div
        className="sm:w-full align-center card lg:card-side bg-gray-900 transition-shadow transition-transform hover:shadow-slate-500 hover:scale-105 shadow-md w-64 mx-auto rounded-lg cursor-pointer"
        onClick={handleOpenModal}
      >
        <figure className="lg:max-h-56">
          <img
            src={
              props.movie.Poster && props.movie.Poster !== "N/A"
                ? props.movie.Poster
                : defaultPoster
            }
            alt="Album"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-6 flex flex-col items-start">
          <h3 className="lg:text-xl font-semibold">{props.movie.Title}</h3>
          <p>{props.movie.Year}</p>
          <p>{props.movie.plot}</p>

          <div className="rating gap-1 w-full  flex flex-row justify-end ">
            <input
              type="radio"
              name="rating-3"
              className={`mask mask-heart ${
                isHeartFilled || firstTimeHeart ? "bg-pink-500" : "bg-white"
              }`}
              onClick={handleHeartClicked}
            />
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <dialog
          id={`modal_${props.movie.imdbID}`}
          className="modal modal-bottom sm:modal-middle rounded-lg"
          open={isModalOpen}
        >
          <div className="modal-box bg-slate-600 rounded-lg">
            <h3
              className="font-semibold
             mb-1"
            >
              {props.movie.Title}
            </h3>
            <div className="avatar flex flex-row justify-center">
              <div className="w-24 rounded ">
                <img
                  src={
                    props.movie.Poster && props.movie.Poster !== "N/A"
                      ? props.movie.Poster
                      : defaultPoster
                  }
                />
              </div>
            </div>
            {error ? (
              <div className="mt-2">
                {" "}
                <Alert msg={error} />
              </div>
            ) : (
              <>
                {" "}
                <p className="py-4 flex flex-row">
                  <div className="mr-1 font-semibold">Box Office:</div>
                  <div className="ml-1 font-thin">
                    {movieData === null ? (
                      <span>Loading...</span>
                    ) : movieData.BoxOffice && movieData.BoxOffice !== "N/A" ? (
                      movieData.BoxOffice
                    ) : (
                      <span className="text-red-500">
                        ${generatedBoxOffice}
                      </span>
                    )}
                  </div>
                </p>
                <p className="flex flex-row ">
                  <div className="mr-1 font-semibold">Plot:</div>
                  <div className="ml-1 font-thin">
                    {movieData === null ? (
                      <span>Loading...</span>
                    ) : movieData.Plot && movieData.Plot !== "N/A" ? (
                      movieData.Plot
                    ) : (
                      <span className="text-red-400">{generatedText}</span>
                    )}
                  </div>
                </p>
              </>
            )}

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

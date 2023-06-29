import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        {movies.length !== 0 && (
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        )}
      </div>
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        {movies.length === 0 ? (
          <>
            <div class="animate-pulse bg-gray-800 rounded w-[250px] h-10 md:w-[400px] md:h-12"></div>
            <div class="animate-pulse bg-gray-800 rounded w-[200px] h-10 md:w-[300px] md:h-12 my-4"></div>
            <div class="animate-pulse bg-gray-800 rounded w-[150px] h-3"></div>
            <div role="status" class="max-w-sm animate-pulse mt-4">
              <div class="h-2 bg-gray-800 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-800 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-800 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-800 rounded-full max-w-[360px]"></div>
              <span class="sr-only">Loading...</span>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 border-gray-300 text-black py-2 px-5">Watch Later</button>
              <button className="border border-gray-300 text-white py-2 px-5 ml-4">Play</button>
            </div>
            <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
            <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
              {truncateString(movie?.overview, 150)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;

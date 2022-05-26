import React, { useState, useEffect } from "react";
import axios from "./../api/axios";
import requests from "./../api/requests";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner text-white object-contain h-96 flex justify-center items-start  flex-col"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-7  pb-1">
        {/* title */}
        <h1 className="text-5xl font-extrabold text-left">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* buttons flex */}
        <div className="flex items-start flex-row">
          <button className="cursor-pointer bg-slate-800 text-white pt-2 mr-4 mt-4 pl-8 pr-8 pb-2 font-bold outline-0 border-0 transition-all duration-200  hover:text-black hover:bg-white hover:ease-out ">
            Play
          </button>
          <button className="cursor-pointer bg-slate-800 text-white pt-2 mr-4 mt-4 pl-8 pr-8 pb-2 font-bold outline-0 border-0 transition-all duration-200  hover:text-black hover:bg-white hover:ease-out mb-2">
            My List
          </button>
        </div>
        <h1 className="leading-5 text-left max-w-sm  text-lg">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {/* text */}
    </header>
  );
}

export default Banner;

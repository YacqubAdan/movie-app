import React, { useState, useEffect } from "react";
import axios from "./../api/axios";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // when row loads on screen run this once since no dependencies:
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      {/* title */}
      <h2 className="text-2xl">{title}</h2>

      <div className="flex overflow-y-hidden overflow-x-scroll p-5 no-scrollbar">
        {/* container -> posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={
              isLargeRow
                ? "w-full max-h-72  mr-2.5 transition duration-350 hover:scale-110"
                : "w-full max-h-40  mr-2.5 transition duration-350 hover:scale-110"
            }
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies)
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

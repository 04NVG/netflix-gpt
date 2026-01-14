import React from "react";
import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies );
  if (!movies) return;

  const mainmovies = movies[0];
  console.log('sdfsf',mainmovies);

  const { original_title, overview,id} = mainmovies;

  return (
    <div>
      <VideoTitle title={original_title} overwiew={overview} />
      <VideoBackground  movieId={id}/>
    </div>
  );
};

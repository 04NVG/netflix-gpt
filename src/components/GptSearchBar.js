import React, { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchhMovieTMD = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie.trim() +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async (e) => {
    e.preventDefault();

    const userText = searchText.current?.value?.trim();
    if (!userText) return;

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      userText +
      ". Only give movie names, comma separated.";

    // ✅ ВЫЗОВ НАШЕГО СЕРВЕРА (где лежит ключ)
    const res = await fetch("http://localhost:5000/api/gpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: gptQuery }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.log("GPT error:", data?.error);
      return;
    }

    const content = data?.text || "";
    console.log(content);

    const gptMovies = content
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);

    const promiseArray = gptMovies.map((movie) => searchhMovieTMD(movie));
    const tmdResutls = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdResutls }));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w h-1/2 bg-black grid grid-cols-12"
        onSubmit={handleGptSearchClick}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button
          type="submit"
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

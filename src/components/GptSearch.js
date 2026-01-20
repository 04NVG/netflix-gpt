import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { logo } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-full">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src={logo}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>

    </div>
  );
};

export default GptSearch;

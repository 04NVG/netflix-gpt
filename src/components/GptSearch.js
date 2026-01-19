import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { logo } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
            <div className="absolute inset-0 -z-10">
                <img
                  src={logo}
                  alt="phot"
                  className="w-full h-full object-cover"
                />
              </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
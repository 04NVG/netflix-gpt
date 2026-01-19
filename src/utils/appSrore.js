import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "../utils/userSlice"
import  moviesreducer from "./moviesSlice"
import gptReducer from "./gptSlice"


const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesreducer,
    gpt: gptReducer
  },
});

export default appStore;
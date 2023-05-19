// importing dependencies
import { configureStore } from "@reduxjs/toolkit";

// Bringing in reducers
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";

// Bringing in actions
import { reset } from "./actions";

// Creating store
const store = configureStore({
  reducer: { // Overall structure of our big state object
      songs: songsReducer,
      movies: moviesReducer
    }
});

// To see all states (the big mega hardcore state) at once
const finalState = store.getState();

// Exporting both store and reducers
export { 
  store,
  addSong, 
  removeSong, 
  addMovie, 
  removeMovie, 
  reset 
};

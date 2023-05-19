// importing dependencies
import { createSlice } from "@reduxjs/toolkit";

// Bringing in actions
import { reset } from "../actions";

// Creating moviesSlice
const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
      addMovie(state, action) {
        state.push(action.payload);
      },
      removeMovie(state, action){
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
      }
    },
    extraReducers(builder){
      builder.addCase(reset, function (state, action){
        return [];
      });
    }
  });
  
// Exporting reducers
export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
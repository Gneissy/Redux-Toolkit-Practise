// importing dependencies
import { createSlice } from "@reduxjs/toolkit";

// Bringing in actions
import { reset } from "../actions";

// This is the slice for song state
const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: { // Those are related setter functions to change "song" state
        // "song/addSong" as a dispatch action type
        //! "state" argument is NOT the big state object in the store.
        //! It is the piece of state managed by the slice.
      addSong(state, action) {
        state.push(action.payload);
      },
      removeSong(state, action) {
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
      }
    },
    //* extraReducer here helps us to watch a different action type.
    //* This songSlice's big combined reducer watches actions like ("song/addSong", "song/removeSong")
    //* Here we can watch the action type "app/reset" thanks to extraReducers
    extraReducers(builder){
      builder.addCase(reset, function(state, action){
        // state.push("atatat");  //Might be sth like this, state here is for "songs"
        return [];
      });
    }
  });

// Exporting reducers
export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
// importing requirements
import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

// This is manually created action, like before.
// app/reset might be everything i want, just needs to be unique. 
export const reset = createAction("app/reset");

// Here we'll use Redux Toolkit to create our state store:

// This is the slice for song state
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: { // Those are related setter functions to change "song" state
    // "song/addSong" as a dispatch action type
      //! "state" argument is NOT the big state object in the store.
      //! It is the piece of state managed by the slice.
      //TODO add song
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder){
    builder.addCase(reset, function(state, action){
      // state.push("atatat");  //Might be sth like this, state here is for "songs"
      return [];
    });
  }
});


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




const store = configureStore({
  reducer: { // Overall structure of our big state object
      songs: songsSlice.reducer,
      movies: moviesSlice.reducer
    }
});

// An old (before slice's action creator) example for using dispatch to add a song:
// store.dispatch({
//   type: "song/addSong",
//   payload: "new song baby!"
// });


// An example how to dispatch for adding a new song:
// store.dispatch( songsSlice.actions.addSong("Yeni bir şarkı") )


// To see all states (the big mega hardcore state) at once
const finalState = store.getState();
// console.log(finalState);

export { store };

// Export action creators automatically created by slice. 
export const { addSong, removeSong, resetSongs } = songsSlice.actions;
export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;
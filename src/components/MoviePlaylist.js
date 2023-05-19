import { createRandomMovie } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store/index";

function MoviePlaylist() {

  // Getting access to use dispatch function
  const dispatch = useDispatch();

  // Getting access to store
  const moviePlaylist = useSelector(function (state){
    return state.movies;
  });

  // Those are functions i dispatch, logic is inside slice's reducer functions.
  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
    // addMovie is an action creator, returning "movie/addMovie" to let reducer know what to do
    // movie is the payload
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;

import * as moviesSelector from "./movies/selectors";

export const getMovieById = (state, movieId) =>
  moviesSelector.getMovieById(state.movies, movieId);

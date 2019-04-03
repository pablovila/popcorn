import * as genresSelector from "./genres/selectors";
import * as moviesSelector from "./movies/selectors";

export const getGenreById = (state, genreId) =>
  genresSelector.getGenreById(state.genres, genreId);

export const getMovieById = (state, movieId) =>
  moviesSelector.getMovieById(state.movies, movieId);

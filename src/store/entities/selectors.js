import * as genresSelector from "./genres/selectors";
import * as moviesSelector from "./movies/selectors";
import * as movieSelector from "./movie/selectors";

export const getGenreById = (state, genreId) =>
  genresSelector.getGenreById(state.genres, genreId);

export const getMovieById = (state, movieId) =>
  moviesSelector.getMovieById(state.movies, movieId);

export const getMovieDetailsById = (state, movieId) =>
  movieSelector.getMovieById(state.movie, movieId);

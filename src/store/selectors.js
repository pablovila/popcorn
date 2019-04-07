import * as entitiesSelector from "./entities/selectors";
import * as genresSelector from "./modules/genres/selectors";
import * as moviesSelector from "./modules/movies/selectors";

export const getGenreById = (state, genreId) =>
  entitiesSelector.getGenreById(state.entities, genreId);

export const getMovieById = (state, movieId) =>
  entitiesSelector.getMovieById(state.entities, movieId);

export const getGenresItems = state => genresSelector.getItems(state.genres);
export const isGenresLoading = state => genresSelector.isLoading(state.genres);

export const getMoviesItems = state => moviesSelector.getItems(state.movies);
export const isMoviesLoading = state => moviesSelector.isLoading(state.movies);

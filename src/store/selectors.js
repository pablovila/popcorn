import * as entitiesSelector from "./entities/selectors";
import * as genreListSelector from "./modules/genreList/selectors";

export const getGenreById = (state, genreId) =>
  entitiesSelector.getGenreById(state.entities, genreId);

export const getMovieById = (state, movieId) =>
  entitiesSelector.getMovieById(state.entities, movieId);

export const getGenreListItems = state =>
  genreListSelector.getItems(state.genreList);
export const isGenreListLoading = state =>
  genreListSelector.isLoading(state.genreList);

import { normalize } from "normalizr";
import { API } from "apis/tmdb";
import * as selectors from "store/selectors";
import * as schema from "store/entities/schema";
import * as actions from "./actions";

export const fetchMovies = genreId => {
  return async (dispatch, getState) => {
    const state = getState();
    const isLoading = selectors.isMoviesLoading(state);

    if (isLoading) {
      return;
    }

    dispatch(actions.fetchMoviesByGenreStart());

    try {
      const movies = await API.getMoviesByGenre(genreId);
      const normalizedMovies = normalize(movies, schema.movies);
      dispatch(actions.fetchMoviesByGenreSuccess(normalizedMovies));
    } catch (e) {
      dispatch(actions.fetchMoviesByGenreFail(e));
    }
  };
};

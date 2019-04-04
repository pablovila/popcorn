import { normalize } from "normalizr";
import { API } from "apis/tmdb";
import * as schema from "store/entities/schema";
import * as actions from "./actions";

export const fetchPopularMovies = () => {
  return async dispatch => {
    dispatch(actions.fetchPopularMoviesStart());

    try {
      const movies = await API.getPopularMovies();
      const normalizedMovies = normalize(movies, schema.movies);
      dispatch(actions.fetchPopularMoviesSuccess(normalizedMovies));
    } catch (e) {
      dispatch(actions.fetchPopularMoviesFail(e));
    }
  };
};

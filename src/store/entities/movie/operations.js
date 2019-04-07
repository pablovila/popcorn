import { normalize } from "normalizr";
import { API } from "apis/tmdb";
import * as selectors from "store/selectors";
import * as schema from "store/entities/schema";
import * as actions from "./actions";

export const fetchMovie = movieId => {
  return async (dispatch, getState) => {
    const state = getState();
    const isLoading = selectors.isMovieLoading(state);

    if (isLoading) {
      return;
    }

    dispatch(actions.fetchMovieStart());

    try {
      const movie = await API.getMovie(movieId);
      const normalizedMovie = normalize(movie, schema.detailedMovie);
      dispatch(actions.fetchMovieSuccess(normalizedMovie));
    } catch (e) {
      dispatch(actions.fetchMovieFail(e));
    }
  };
};

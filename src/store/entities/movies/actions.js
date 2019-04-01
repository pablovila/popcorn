import * as types from "./types";

export const fetchPopularMoviesStart = () => ({
  type: types.FETCH_POPULAR_MOVIES_START
});

export const fetchPopularMoviesSuccess = response => ({
  type: types.FETCH_POPULAR_MOVIES_SUCCESS,
  response
});

export const fetchPopularMoviesFail = error => ({
  type: types.FETCH_POPULAR_MOVIES_FAIL,
  error
});

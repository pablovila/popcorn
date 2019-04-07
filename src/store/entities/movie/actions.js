import * as types from "./types";

export const fetchMovieStart = () => ({
  type: types.FETCH_MOVIE_START
});

export const fetchMovieSuccess = response => ({
  type: types.FETCH_MOVIE_SUCCESS,
  response
});

export const fetchMovieFail = error => ({
  type: types.FETCH_MOVIE_FAIL,
  error
});

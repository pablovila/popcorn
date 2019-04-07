import * as types from "./types";

export const fetchMoviesByGenreStart = () => ({
  type: types.FETCH_MOVIES_BY_GENRE_START
});

export const fetchMoviesByGenreSuccess = response => ({
  type: types.FETCH_MOVIES_BY_GENRE_SUCCESS,
  response
});

export const fetchMoviesByGenreFail = error => ({
  type: types.FETCH_MOVIES_BY_GENRE_FAIL,
  error
});

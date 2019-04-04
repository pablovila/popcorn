import * as types from "./types";

export const fetchGenresStart = () => ({
  type: types.FETCH_GENRES_START
});

export const fetchGenresSuccess = response => ({
  type: types.FETCH_GENRES_SUCCESS,
  response
});

export const fetchGenresFail = error => ({
  type: types.FETCH_GENRES_FAIL,
  error
});

import { normalize } from "normalizr";
import { API } from "apis/tmdb";
import * as selectors from "store/selectors";
import * as schema from "store/entities/schema";
import * as actions from "./actions";

export const fetchGenres = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isLoading = selectors.isGenresLoading(state);

    if (isLoading) {
      return;
    }

    dispatch(actions.fetchGenresStart());

    try {
      const genres = await API.getGenres();
      const normalizedGenres = normalize(genres, schema.genres);
      dispatch(actions.fetchGenresSuccess(normalizedGenres));
    } catch (e) {
      dispatch(actions.fetchGenresFail(e));
    }
  };
};

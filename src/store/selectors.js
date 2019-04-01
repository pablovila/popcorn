import * as entitiesSelector from "./entities/selectors";
import * as feedSelector from "./modules/feed/selectors";

export const getMovieById = (state, movieId) =>
  entitiesSelector.getMovieById(state.entities, movieId);

export const getFeedItems = state => feedSelector.getItems(state.feed);
export const isFeedLoading = state => feedSelector.isLoading(state.feed);

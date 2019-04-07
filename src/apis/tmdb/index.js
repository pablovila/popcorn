import { axiosInstance } from "./axiosConfig";
import { GENRES_ENDPOINT, DISCOVER_MOVIES_ENDPOINT } from "./apiConfig";

export const API = {
  getGenres: () =>
    axiosInstance
      .get(GENRES_ENDPOINT)
      .then(({ data }) => data)
      .then(({ genres }) => genres),

  getMoviesByGenre: genreId =>
    axiosInstance
      .get(DISCOVER_MOVIES_ENDPOINT, {
        params: {
          language: "en-US",
          sort_by: "popularity.desc",
          include_adult: false,
          include_video: false,
          page: 1,
          with_genres: genreId
        }
      })
      .then(({ data }) => data)
      .then(({ results }) => results)
};

import { axiosInstance } from "./axiosConfig";
import {
  GENRES_ENDPOINT,
  DISCOVER_MOVIES_ENDPOINT,
  MOVIE_ENDPOINT,
  MOVIE_CREDITS_ENDPOINT
} from "./apiConfig";

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
      .then(({ results }) => results),

  getMovie: async movieId => {
    const movieRequest = axiosInstance
      .get(MOVIE_ENDPOINT + movieId)
      .then(({ data }) => data);
    const movieCreditsRequest = axiosInstance
      .get(MOVIE_CREDITS_ENDPOINT.replace("{movie_id}", movieId))
      .then(({ data }) => data);

    const responses = await Promise.all([movieRequest, movieCreditsRequest]);
    const movie = responses[0];
    movie.cast = responses[1].cast;
    movie.crew = responses[1].crew;
    return movie;
  }
};

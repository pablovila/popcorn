import { axiosInstance } from "./axiosConfig";

const GENRES_ENDPOINT = "/genre/movie/list";

export const API = {
  getGenres: () =>
    axiosInstance
      .get(GENRES_ENDPOINT)
      .then(({ data }) => data)
      .then(({ genres }) => genres)
};

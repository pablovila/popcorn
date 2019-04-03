import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f93d33acd1f8563eb70647554437cea7";
const GENRES_ENDPOINT = "/genre/movie/list";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

export const API = {
  getGenres: () =>
    instance
      .get(GENRES_ENDPOINT)
      .then(({ data }) => data)
      .then(({ genres }) => genres)
};

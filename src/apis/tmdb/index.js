import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f93d33acd1f8563eb70647554437cea7";
const POPULAR_MOVIES_ENDPOINT = "/movie/popular";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

export const API = {
  getPopularMovies(page) {
    page = page || 1;
    return instance
      .get(POPULAR_MOVIES_ENDPOINT)
      .then(({ data }) => data)
      .then(({ results }) => results);
  }
};

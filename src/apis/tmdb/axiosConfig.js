import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f93d33acd1f8563eb70647554437cea7";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

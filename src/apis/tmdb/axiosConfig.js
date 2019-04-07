import axios from "axios";
import { BASE_URL, API_KEY } from "./apiConfig";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

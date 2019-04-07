import { schema } from "normalizr";

export const genre = new schema.Entity("genres");
export const movie = new schema.Entity("movies");
export const detailedMovie = new schema.Entity("movie");

export const genres = [genre];
export const movies = [movie];

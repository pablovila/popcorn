import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";

import MoviesList from "containers/Lists/MoviesList";
import Breadcrumb from "components/UI/Breadcrumb";

const movies = ({ movies, genre }) => {
  const levels = [
    {
      name: "Genres",
      route: "/",
      href: "/"
    },
    {
      name: genre.name,
      route: "movies",
      href: "/movies/" + genre.id,
      params: { slug: genre.id }
    }
  ];

  return (
    <>
      <Breadcrumb levels={levels} />
      <MoviesList movies={movies} genre={genre} />
    </>
  );
};

movies.getInitialProps = async ({ store, query }) => {
  const genreId = query.slug;
  await store.dispatch(operations.fetchMovies(genreId));

  let state = store.getState();
  const items = selectors.getMoviesItems(state);
  const movies = items.map(item => selectors.getMovieById(state, item));

  let genre = selectors.getGenreById(state, genreId);
  if (!genre) {
    await store.dispatch(operations.fetchGenres());
    state = store.getState();
    genre = selectors.getGenreById(state, genreId);
  }

  return { movies, genre };
};

export default movies;

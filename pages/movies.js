import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";
import MoviesList from "containers/Lists/MoviesList";

const movies = ({ movies }) => {
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

movies.getInitialProps = async ({ store, query }) => {
  const genreId = query.slug;
  await store.dispatch(operations.fetchMovies(genreId));

  const state = store.getState();
  const items = selectors.getMoviesItems(state);
  const movies = items.map(item => selectors.getMovieById(state, item));

  return { movies };
};

export default movies;

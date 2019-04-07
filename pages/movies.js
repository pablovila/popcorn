import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";

const movies = props => {
  return <>{JSON.stringify(props)}</>;
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

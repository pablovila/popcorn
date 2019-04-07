import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";

import MovieInfo from "containers/MovieInfo";

const movie = ({ movie }) => {
  return (
    <>
      <MovieInfo movie={movie} />
    </>
  );
};

movie.getInitialProps = async ({ store, query }) => {
  const movieId = query.slug;
  await store.dispatch(operations.fetchMovie(movieId));

  const state = store.getState();
  const item = selectors.getMovie(state);
  const movie = selectors.getMovieDetailsById(state, item);

  return { movie };
};

export default movie;

import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";

import MovieInfo from "containers/MovieInfo";
import Breadcrumb from "components/UI/Breadcrumb";

const movie = ({ movie, genre }) => {
  const levels = [
    {
      name: "Genres",
      route: "/"
    },
    {
      name: genre.name,
      route: "movies",
      href: "/movies/" + genre.id,
      params: { slug: genre.id }
    },
    {
      name: movie.title,
      route: "movie",
      href: `/movies/${genre.id}/${movie.id}`,
      params: { slug: movie.id, genreId: genre.id }
    }
  ];

  return (
    <>
      <Breadcrumb levels={levels} />
      <MovieInfo movie={movie} />
    </>
  );
};

movie.getInitialProps = async ({ store, query }) => {
  const movieId = query.slug;
  const genreId = query.genreId;
  await store.dispatch(operations.fetchMovie(movieId));

  const state = store.getState();
  const item = selectors.getMovie(state);
  const movie = selectors.getMovieDetailsById(state, item);

  const genre = selectors.getGenreById(state, genreId);

  return { movie, genre };
};

export default movie;

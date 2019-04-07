import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";

const movie = props => {
  return <>{JSON.stringify(props)}</>;
};

movie.getInitialProps = async ({ store, query }) => {
  const movieId = query.slug;

  return { movieId };
};

export default movie;

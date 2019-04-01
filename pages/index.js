import React from "react";
import * as operations from "@/store/operations";
import * as selectors from "@/store/selectors";

const index = props => {
  return (
    <>
      {console.log(props)}
      <h1>Popcorn Movies</h1>
    </>
  );
};

index.getInitialProps = async ({ store }) => {
  await store.dispatch(operations.fetchPopularMovies());

  const state = store.getState();
  const items = selectors.getFeedItems(state);
  const movies = items.map(item => selectors.getMovieById(state, item));

  return { movies };
};

export default index;

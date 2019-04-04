import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";
import List from 'containers/List/List'

const index = ({genres}) => {
  return (
    <>
      <h1>Popcorn Movies</h1>
      <List items={genres} type="genres" />
    </>
  );
};

index.getInitialProps = async ({ store }) => {
  await store.dispatch(operations.fetchGenres());

  const state = store.getState();
  const items = selectors.getGenresItems(state);
  const genres = items.map(item => selectors.getGenreById(state, item));

  return { genres };
};

export default index;

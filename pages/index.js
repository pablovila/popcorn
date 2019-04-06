import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";
import GenreList from "containers/Lists/GenreList";

const index = ({ genres }) => {
  return (
    <>
      <GenreList genres={genres} />
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

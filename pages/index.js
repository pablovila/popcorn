import React from "react";
import * as operations from "store/operations";
import * as selectors from "store/selectors";

const index = props => {
  return (
    <>
      {console.log(props)}
      <h1>Popcorn Movies</h1>
    </>
  );
};

index.getInitialProps = async ({ store }) => {
  await store.dispatch(operations.fetchGenres());

  const state = store.getState();
  const items = selectors.getGenreListItems(state);
  const genres = items.map(item => selectors.getGenreById(state, item));

  return { genres };
};

export default index;

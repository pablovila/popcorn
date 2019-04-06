import React from "react";

const movies = props => {
  return <>{JSON.stringify(props)}</>;
};

movies.getInitialProps = async ({ store, query }) => {
  return { query };
};

export default movies;

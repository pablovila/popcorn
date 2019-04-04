import React from "react";
import PropTypes from 'prop-types';
import GenreCard from "components/Cards/GenreCard";
import MovieCard from "components/Cards/MovieCard"

const list = ({ items, type }) => {
  const genreList = type === "genres";
  const movieList = type === "movies";

  return (
    <>
      {
        items.map(item => {
          if (genreList) return <GenreCard key={item.id} genre={item} />;
          if (movieList) return <MovieCard key={item.id} movie={item} />;
        })
      }
    </>
  );
};

list.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

export default list;

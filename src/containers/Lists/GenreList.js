import React from "react";
import PropTypes from "prop-types";
import GenreCard from "components/Cards/GenreCard";

const genreList = ({ genres }) => {
  return (
    <>
      {genres.map(genre => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </>
  );
};

genreList.propTypes = {
  genres: PropTypes.array.isRequired
};

export default genreList;

import React from "react";
import PropTypes from "prop-types";
import GenreCard from "components/Cards/GenreCard";

const genreList = ({ genres }) => {
  return (
    <div className="columns is-multiline">
      {genres.map(genre => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

genreList.propTypes = {
  genres: PropTypes.array.isRequired
};

export default genreList;

import React from "react";
import PropTypes from "prop-types";

const genreCard = ({ genre }) => {
  return (
    <>
      <h2>{genre.name}</h2>
    </>
  );
};

genreCard.propTypes = {
  genre: PropTypes.object.isRequired
};

export default genreCard;

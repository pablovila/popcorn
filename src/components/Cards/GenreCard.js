import React from "react";
import PropTypes from "prop-types";

import Box from "../UI/Box";

const genreCard = ({ genre }) => {
  return (
    <>
      <Box>{genre.name}</Box>
    </>
  );
};

genreCard.propTypes = {
  genre: PropTypes.object.isRequired
};

export default genreCard;

import React from "react";
import PropTypes from "prop-types";

import CastCard from "components/Cards/CastCard";

const cast = ({ cast }) => {
  return (
    <div className="columns is-multiline">
      {cast.slice(0, 12).map(person => (
        <div className="column is-2" key={person.id}>
          <CastCard person={person} />
        </div>
      ))}
    </div>
  );
};

cast.propTypes = {
  cast: PropTypes.array.isRequired
};

export default cast;

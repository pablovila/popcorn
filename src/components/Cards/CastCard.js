import React from "react";
import PropTypes from "prop-types";

import { IMAGE_BASE_URL } from "apis/tmdb/apiConfig";

const castCard = ({ person }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          {person.profile_path ? (
            <img src={`${IMAGE_BASE_URL}w185${person.profile_path}`} />
          ) : (
            <></>
          )}
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h5 className="title is-5">{person.name}</h5>
          <h6 className="subtitle is-6">{person.character}</h6>{" "}
        </div>
      </div>
    </div>
  );
};

castCard.propTypes = {
  person: PropTypes.object.isRequired
};

export default castCard;

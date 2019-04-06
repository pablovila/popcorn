import React from "react";
import PropTypes from "prop-types";
import { Link } from "server/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

const genreCard = ({ genre }) => {
  return (
    <div className="column is-narrow">
      <Link route="movies" params={{ slug: genre.id }}>
        <div className="box">
          <a className="button is-white">
            <span className="icon">
              <FontAwesomeIcon icon={faTicketAlt} />
            </span>
            <span>{genre.name}</span>
          </a>
        </div>
      </Link>
    </div>
  );
};

genreCard.propTypes = {
  genre: PropTypes.object.isRequired
};

export default genreCard;

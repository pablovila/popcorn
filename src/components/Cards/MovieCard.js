import React from "react";
import PropTypes from "prop-types";
import { Link } from "server/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { IMAGE_BASE_URL } from "apis/tmdb/apiConfig";

const movieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="column is-half">
      <Link route="movie" params={{ slug: movie.id }}>
        <div className="box">
          <article className="media">
            <figure className="media-left">
              <p className="image">
                <img src={`${IMAGE_BASE_URL}/w185/${movie.poster_path}`} />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <h4 className="title is-4">{movie.title}</h4>
                <p className="content is-small">{movie.overview}</p>
              </div>
            </div>
            <div className="media-right">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
            </div>
          </article>
        </div>
      </Link>
    </div>
  );
};

movieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default movieCard;

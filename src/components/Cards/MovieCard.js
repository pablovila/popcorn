import React from "react";
import PropTypes from "prop-types";
import { Link } from "server/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { IMAGE_BASE_URL } from "apis/tmdb/apiConfig";

const movieCard = ({ movie, genre }) => {
  return (
    <div className="column is-half">
      <div className="box movie-card">
        <article className="media">
          <Link route="movie" params={{ slug: movie.id, genreId: genre.id }}>
            <figure className="media-left">
              <p className="image">
                <img src={`${IMAGE_BASE_URL}/w185/${movie.poster_path}`} />
              </p>
            </figure>
          </Link>
          <div className="media-content">
            <div className="content">
              <Link
                route="movie"
                params={{ slug: movie.id, genreId: genre.id }}
              >
                <h4 className="title is-4">{movie.title}</h4>
              </Link>
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
    </div>
  );
};

movieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  genre: PropTypes.object
};

export default movieCard;

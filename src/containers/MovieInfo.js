import React from "react";
import PropTypes from "prop-types";

import { IMAGE_BASE_URL } from "apis/tmdb/apiConfig";
import Hero from "components/UI/Hero";
import Cast from "./Cast";

const movieInfo = ({ movie }) => {
  const date = movie.release_date ? movie.release_date.split("-") : null;
  const releaseYear = date ? date[0] : null;
  return (
    <>
      <Hero>
        <div className="media">
          <figure className="media-left">
            <p className="image">
              <img src={`${IMAGE_BASE_URL}/w300/${movie.poster_path}`} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <h2 className="title is-2">
                {movie.title}{" "}
                <span className="title is-5 has-text-grey">
                  ({releaseYear})
                </span>
              </h2>
              <p>{movie.overview}</p>
              {movie.genres && movie.genres.length && (
                <div className="tags">
                  {movie.genres.map(genre => (
                    <span className="tag is-danger" key={genre.id}>
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Hero>
      {movie.cast && movie.cast.length && (
        <section className="section">
          <div className="container">
            <h4 className="title is-4">Reparto</h4>
            <Cast cast={movie.cast} />
          </div>
        </section>
      )}
    </>
  );
};

movieInfo.propTypes = {
  movie: PropTypes.object.isRequired
};

export default movieInfo;

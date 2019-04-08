import React from "react";
import PropTypes from "prop-types";
import MovieCard from "components/Cards/MovieCard";

const moviesList = ({ movies, genre }) => {
  return (
    <div className="columns is-multiline">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} genre={genre} />
      ))}
    </div>
  );
};

moviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  genre: PropTypes.object
};

export default moviesList;

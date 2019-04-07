import React from "react";
import PropTypes from "prop-types";
import MovieCard from "components/Cards/MovieCard";

const moviesList = ({ movies }) => {
  return (
    <div className="columns is-multiline">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

moviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default moviesList;

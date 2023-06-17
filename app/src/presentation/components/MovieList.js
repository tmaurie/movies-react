import React from "react";
import Movie from "App/src/presentation/components/Movie";

const MovieList = ({ movies, loadMore }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
      <button onClick={loadMore} className="load-more">Load More</button>
    </div>
  );
};

export default MovieList;

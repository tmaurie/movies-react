import React from "react";
import { useNavigate } from "react-router-dom";
import ImageLoader from "App/src/presentation/components/Image";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/m/${movie.id}`);
  };

  return (
    <div className="movie" onClick={handleNav}>
      {movie.poster_path ? (
        <ImageLoader image={{ src: `https://image.tmdb.org/t/p/original${movie.poster_path}`, alt: movie.title }} />
      ) : (
        <div className="placeholder">
          <span>No poster available</span>
        </div>
      )}
      <span>{movie.title}</span>
    </div>
  );
};

export default Movie;

import React from 'react';
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {


  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <Link to={`/m/${movie.id}`}>See details</Link>
    </div>
  );
};

export default Movie;

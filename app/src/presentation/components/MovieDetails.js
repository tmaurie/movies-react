import React from "react";


const MovieDetails = (props) => {
  return (

    <div className="movie-details-container center">
      <div className="poster-container">
        <img src={`https://image.tmdb.org/t/p/w400${props.movieDetails.poster_path}`}
             alt={props.movieDetails.title} />
      </div>
      <div className="content-container">

        <h1>{props.movieDetails.title}</h1>
        <p> {new Date(props.movieDetails.release_date).toLocaleDateString()} ({props.movieDetails.status})</p>
        <p>Overview: {props.movieDetails.overview}</p>
      </div>
    </div>);
};

export default MovieDetails;

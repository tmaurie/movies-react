import React from "react";
import MovieCreditsContainer from "App/src/presentation/containers/MovieCreditsContainer";
import * as PropTypes from "prop-types";


function Genre(props) {
  return <span className="genre">{props.genre.name} </span>;
}

Genre.propTypes = { genre: PropTypes.any };
const MovieDetails = (props) => {

  function getRuntime(time) {

    let hours = Math.floor(time / 60);
    let minutes = time % 60 < 10 ? ("0" + time % 60) : time % 60;
    return hours + " h " + minutes;
  }

  return (<div>
    <div className="movie-details-container center">
      <div className="poster-container">
        <img src={`https://image.tmdb.org/t/p/original${props.movieDetails.poster_path}`}
             alt={props.movieDetails.title} />
      </div>
      <div className="content-container content-card">

        <h1>{props.movieDetails.title}</h1>
        <p> {new Date(props.movieDetails.release_date).toLocaleDateString("en-US", {
          year: "numeric", month: "long", day: "numeric"
        })} ({props.movieDetails.status})</p>
        <p> {props.movieDetails.genres.map((genre) => (<Genre key={genre.id} genre={genre} />))}</p>

        <p> {props.movieDetails.overview}</p>
        <p>Duration: {getRuntime(props.movieDetails.runtime)}</p>
      </div>
    </div>
    <MovieCreditsContainer />
  </div>);
};

export default MovieDetails;

import React from "react";

const MovieCredits = (props) => {
  return (<div className="movie-credits content-card">
    <h3>Directed by</h3>
    <div className="crew">
      {props.movieCredits.crew.filter((crew) => crew.job === "Director").map((director) => (
        <div className="director" key={director.id}>
          <span>{director.name}</span>
        </div>))}

    </div>
    <h3>Cast</h3>
    <div className="cast">
      {props.movieCredits.cast.slice(0, 8).map((actor) => (<div className="actor" key={actor.id}>
        <span>{actor.name}</span> <span>as {actor.character}</span>
      </div>))}
    </div>


  </div>);
};

export default MovieCredits;

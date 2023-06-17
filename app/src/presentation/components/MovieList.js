import React from "react";
import Movie from "App/src/presentation/components/Movie";
import * as PropTypes from "prop-types";

function Button(props) {
  return <div className="button load-more" onClick={props.onClick}>Load More</div>;
}

Button.propTypes = { onClick: PropTypes.any };
const MovieList = ({ movies, loadMore, showButton }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
      {showButton && (<Button onClick={loadMore} />)}
    </div>);
};


export default MovieList;

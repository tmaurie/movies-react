import React from "react";
import MovieCredits from "App/src/presentation/components/MovieCredits";

const MovieCreditsContainer = ({ credits }) => {

  if (!credits) {
    return <div>Loading movie credits...</div>;
  }
  console.log(credits);

  return (
    <MovieCredits movieCredits={credits} />
  );
};

export default MovieCreditsContainer;

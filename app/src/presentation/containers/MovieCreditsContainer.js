import React, { useEffect, useState } from "react";
import fetchMovieCredits from "App/src/core/usecases/movieCredits";
import { useParams } from "react-router-dom";
import MovieCredits from "App/src/presentation/components/MovieCredits";

const MovieCreditsContainer = () => {
  const { id } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const credits = await fetchMovieCredits(id);
        setMovieCredits(credits);
      } catch (error) {
        console.log("Failed to fetch movie credits:", error);
      }
    };

    fetchCredits();
  }, []);

  if (!movieCredits) {
    return <div>Loading movie credits...</div>;
  }

  return (
    <MovieCredits movieCredits={movieCredits} />
  );
};

export default MovieCreditsContainer;

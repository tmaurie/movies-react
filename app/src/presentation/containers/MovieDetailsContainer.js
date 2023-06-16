import React, { useEffect, useState } from "react";
import fetchMovieDetails from "App/src/core/usecases/movieDetails";
import { useParams } from "react-router-dom";
import MovieDetails from "App/src/presentation/components/MovieDetails";


const MovieDetailsContainer = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        console.log("Failed to fetch movie details:", error);
      }
    };

    fetchDetails();
  }, []);

  if (!movieDetails) {
    return <div>Loading movie details...</div>;
  }

  return (
    <MovieDetails movieDetails={movieDetails} />
  );
};

export default MovieDetailsContainer;

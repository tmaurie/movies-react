import React, { useContext, useEffect, useState } from "react";
import fetchMovieDetails from "App/src/core/usecases/movieDetails";
import { useParams } from "react-router-dom";
import MovieDetails from "App/src/presentation/components/MovieDetails";
import { LanguageContext } from "App/src/presentation/context/LanguageContext";
import dictionary from "App/src/languages/dictionary";


const MovieDetailsContainer = () => {
  const { language } = useContext(LanguageContext);
  const translations = dictionary[language];
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(id, translations.lang_param);
        setMovieDetails(details);
      } catch (error) {
        console.log("Failed to fetch movie details:", error);
      }
    };

    fetchDetails();
  }, [ id, language]);

  if (!movieDetails) {
    return <div>Loading movie details...</div>;
  }


  return (
    <MovieDetails movieDetails={movieDetails} />
  );
};

export default MovieDetailsContainer;

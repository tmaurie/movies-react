import React, { useContext, useEffect, useState } from "react";
import fetchMoviesByType from "App/src/core/usecases/moviesByType";
import MovieList from "../components/MovieList";
import Movie from "App/src/presentation/components/Movie";
import dictionary from "App/src/languages/dictionary";
import { LanguageContext } from "App/src/presentation/context/LanguageContext";

const MovieTypeContainer = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [movieListType, setMovieListType] = useState("popular");
  const { language } = useContext(LanguageContext);
  const translations = dictionary[language];

  const movieListTypes = [
    { type: "popular", label: translations.popular },
    { type: "top_rated", label: translations.top_rated },
    { type: "upcoming", label: translations.upcoming },
    { type: "now_playing", label: translations.now_playing }
  ];
  const fetchData = async () => {
    try {
      const fetchedMovies = await fetchMoviesByType(page, movieListType, translations.lang_param);
      setMovies((prevMovies) => {
        const uniqueMovieIds = new Set(prevMovies.map((movie) => movie.id));
        const filteredMovies = fetchedMovies.filter((movie) => !uniqueMovieIds.has(movie.id));
        return [...prevMovies, ...filteredMovies];
      });
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };



  useEffect(() => {
    setMovies([]);
    setPage(1);
    fetchData();
  }, [movieListType, language]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setShowLoadMore(false);
  };

  useEffect(() => {
    if (showLoadMore) return;
    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        loadMore();
      }
    };
  }, [showLoadMore]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (<>
    <div className="movie-list-type">
      {movieListTypes.map((listType) => (
        <div key={listType.type}
             className={`movie-list-type__item ${movieListType === listType.type ? "selected" : ""}`}
             onClick={() => setMovieListType(listType.type)}
        >
          {listType.label}
        </div>
      ))}
    </div>
    <div className="movie-container popular">

      {movies.slice(0, 5).map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
    <MovieList movies={movies.slice(5)} loadMore={loadMore} showButton={showLoadMore} />

  </>);
};

export default MovieTypeContainer;

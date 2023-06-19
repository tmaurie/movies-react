import React, { useEffect, useState } from "react";
import fetchMoviesByType from "App/src/core/usecases/moviesByType";
import MovieList from "../components/MovieList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Movie from "App/src/presentation/components/Movie";

const MovieTypeContainer = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [movieListType, setMovieListType] = useState("popular");

  const movieListTypes = [
    { type: "popular", label: "popular" },
    { type: "top_rated", label: "top rated" },
    { type: "upcoming", label: "upcoming" },
    { type: "now_playing", label: "now playing" }
  ];
  const fetchData = async () => {
    try {
      const fetchedMovies = await fetchMoviesByType(page, movieListType);
      setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
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
  }, [movieListType]);

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

import React, { useEffect, useState } from 'react';
import fetchPopularMovies from "App/src/core/usecases/popularMovies";
import MovieList from '../components/MovieList';

const PopularMoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <MovieList movies={movies} />;
};

export default PopularMoviesContainer;

import React, { useEffect, useState } from "react";
import fetchPopularMovies from "App/src/core/usecases/popularMovies";
import MovieList from "../components/MovieList";

const PopularMoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const fetchedMovies = await fetchPopularMovies(page);
      setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (<>
    <MovieList movies={movies} loadMore={loadMore} />

  </>);
};

export default PopularMoviesContainer;

import React, { useEffect, useState } from "react";
import fetchPopularMovies from "App/src/core/usecases/popularMovies";
import MovieList from "../components/MovieList";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Movie from "App/src/presentation/components/Movie";

const PopularMoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(true);

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
    <Carousel className="carousel" showThumbs={false} autoPlay={true} interval={5000} showArrows={true} infiniteLoop={true} showStatus={false}>
      {movies.slice(0, 5).map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
    <MovieList movies={movies.slice(5)} loadMore={loadMore} showButton={showLoadMore} />

  </>);
};

export default PopularMoviesContainer;

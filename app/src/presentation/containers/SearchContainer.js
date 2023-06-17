import React, { useEffect, useState } from "react";
import searchMovies from "App/src/core/usecases/searchMovies";
import MovieList from "App/src/presentation/components/MovieList";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovies = await searchMovies(searchQuery);
        setMovies(fetchedMovies);
      } catch (error) {
        console.log("Failed to fetch search results:", error);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [searchQuery]);

  return (
    <div>
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
        />
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchContainer;

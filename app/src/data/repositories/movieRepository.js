import tmdbService from "App/src/infra/services/tmdbService";

const fetchPopularMovies = async (page) => {
  try {
    const response = await tmdbService.fetchPopularMovies(page);
    return response.results;
  } catch (error) {
    throw new Error("Failed to fetch popular movies from the TMDB API.");
  }
};

const fetchMovieDetails = async (movieId) => {
  try {
    return await tmdbService.fetchMovieDetails(movieId);
  } catch (error) {
    throw new Error("Failed to fetch movie details from the TMDB API.");
  }
};

const fetchMovieCredits = async (movieId) => {
  try {
    return await tmdbService.fetchMovieCredits(movieId);
  } catch (error) {
    throw new Error("Failed to fetch movie credits from the TMDB API.");
  }
};

const searchMovies = async (query) => {
  try {
    const response = await tmdbService.searchMovies(query);
    return response.results;
  } catch (error) {
    throw new Error("Failed to fetch movie credits from the TMDB API.");
  }
};

export default { fetchPopularMovies, fetchMovieDetails, fetchMovieCredits, searchMovies };

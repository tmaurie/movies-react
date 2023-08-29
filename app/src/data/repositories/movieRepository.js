import tmdbService from "App/src/infra/services/tmdbService";

const fetchMoviesByType = async (page, type, lang) => {
  try {
    const response = await tmdbService.fetchMoviesByType(page, type, lang);
    return response.results;
  } catch (error) {
    throw new Error("Failed to fetch popular movies from the TMDB API.");
  }
};

const fetchMovieDetails = async (movieId, lang) => {
  try {
    return await tmdbService.fetchMovieDetails(movieId, lang);
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

export default { fetchMoviesByType, fetchMovieDetails, fetchMovieCredits, searchMovies };

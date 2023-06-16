import tmdbService from 'App/src/infra/services/tmdbService';

const fetchPopularMovies = async () => {
  try {
    const response = await tmdbService.fetchPopularMovies();
    console.log('response', response);
    return response.results;
  } catch (error) {
    throw new Error('Failed to fetch popular movies from the TMDB API.');
  }
};

const fetchMovieDetails = async (movieId) => {
  try {
    return await tmdbService.fetchMovieDetails(movieId);
  } catch (error) {
    throw new Error('Failed to fetch movie details from the TMDB API.');
  }
}

export default { fetchPopularMovies, fetchMovieDetails };

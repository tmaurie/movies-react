import movieRepository from "App/src/data/repositories/movieRepository";

const fetchMovieDetails = async (movieId) => {
  try {
    return await movieRepository.fetchMovieDetails(movieId);
  } catch (error) {
    throw new Error("Failed to fetch movie details from the TMDB API.");
  }
};

export default fetchMovieDetails;

import movieRepository from "App/src/data/repositories/movieRepository";

const fetchMovieCredits = async (movieId) => {
  try {
    return await movieRepository.fetchMovieCredits(movieId);
  } catch (error) {
    throw new Error("Failed to fetch movie credits from the TMDB API.");
  }
};

export default fetchMovieCredits;

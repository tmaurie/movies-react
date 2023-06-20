import movieRepository from "App/src/data/repositories/movieRepository";

const searchMovies = async (query) => {
  try {
    return await movieRepository.searchMovies(query);
  } catch (error) {
    throw new Error("Failed to retrieve movies from the TMDB API.");
  }
};

export default searchMovies;

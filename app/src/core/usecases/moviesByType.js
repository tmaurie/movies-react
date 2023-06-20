import movieRepository from "App/src/data/repositories/movieRepository";

const fetchMoviesByType = async (page, type, lang) => {
  try {
    return await movieRepository.fetchMoviesByType(page, type, lang);
  } catch (error) {
    throw new Error("Failed to fetch movies by type from the TMDB API.");
  }
};

export default fetchMoviesByType;

import movieRepository from "App/src/data/repositories/movieRepository";

const fetchMoviesByType = async (page, type) => {
  try {
    return await movieRepository.fetchMoviesByType(page, type);
  } catch (error) {
    throw new Error("Failed to fetch popular movies.");
  }
};

export default fetchMoviesByType;

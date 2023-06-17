import movieRepository from 'App/src/data/repositories/movieRepository';

const fetchPopularMovies = async (page) => {
  try {
    return await movieRepository.fetchPopularMovies(page);
  } catch (error) {
    throw new Error('Failed to fetch popular movies.');
  }
};

export default fetchPopularMovies;

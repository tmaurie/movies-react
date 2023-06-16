import movieRepository from 'App/src/data/repositories/movieRepository';

const fetchPopularMovies = async () => {
  try {
    return await movieRepository.fetchPopularMovies();
  } catch (error) {
    throw new Error('Failed to fetch popular movies.');
  }
};

export default fetchPopularMovies;

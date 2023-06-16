import axios from 'axios';
import { API_KEY } from 'App/constants';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const tmdbService = {
  fetchPopularMovies: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch popular movies from the TMDB API.');
    }
  },
};

export default tmdbService;

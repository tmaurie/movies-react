import movieRepository from "App/src/data/repositories/movieRepository";
import fetchMoviesByType from "App/src/core/usecases/moviesByType";

jest.mock("App/src/data/repositories/movieRepository", () => ({
  fetchMoviesByType: jest.fn()
}));

describe("moviesByType", () => {
  it("fetches movies by type successfully", async () => {
    const page = 1;
    const movieListType = "popular";
    const lang = "en-US";
    const mockedMovies = [
      {
        id: 1,
        title: "Test Movie 1",
        overview: "This is a test movie 1"
      },
      {
        id: 2,
        title: "Test Movie 2",
        overview: "This is a test movie 2"
      }
    ];
    movieRepository.fetchMoviesByType.mockResolvedValue(mockedMovies);

    const result = await fetchMoviesByType(page, movieListType, lang);

    expect(result).toEqual(mockedMovies);
    expect(movieRepository.fetchMoviesByType).toHaveBeenCalledWith(page, movieListType, "en-US");
  });

  it("throws an error when failed to fetch movies by type", async () => {
    const page = 1;
    const movieListType = "popular";
    const lang = "en-US";
    const errorMessage = "Failed to fetch movies by type";
    movieRepository.fetchMoviesByType.mockRejectedValue(new Error(errorMessage));

    await expect(fetchMoviesByType(page, movieListType, lang)).rejects.toThrow("Failed to fetch movies by type from the TMDB API.");
    expect(movieRepository.fetchMoviesByType).toHaveBeenCalledWith(page, movieListType, "en-US");
  });
});

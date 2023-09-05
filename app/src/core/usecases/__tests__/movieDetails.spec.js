import movieRepository from "App/src/data/repositories/movieRepository";
import fetchMovieDetails from "App/src/core/usecases/movieDetails";


jest.mock("App/src/data/repositories/movieRepository", () => ({
  fetchMovieDetails: jest.fn()
}));
describe("fetchMovieDetails", () => {
  it("fetches movie details successfully", async () => {
    const movieId = 123;
    const mockedMovieDetails = {
      id: 123,
      title: "Test Movie",
      overview: "This is a test movie"
    };
    movieRepository.fetchMovieDetails.mockResolvedValue(mockedMovieDetails);

    const result = await fetchMovieDetails(movieId);

    expect(result).toEqual(mockedMovieDetails);
    expect(movieRepository.fetchMovieDetails).toHaveBeenCalledWith(movieId, "en-US");
  });

  it("throws an error when failed to fetch movie details", async () => {
    const movieId = 123;
    const errorMessage = "Failed to fetch movie details";
    movieRepository.fetchMovieDetails.mockRejectedValue(new Error(errorMessage));

    await expect(fetchMovieDetails(movieId)).rejects.toThrow("Failed to fetch movie details from the TMDB API.");
    expect(movieRepository.fetchMovieDetails).toHaveBeenCalledWith(movieId, "en-US");
  });
});

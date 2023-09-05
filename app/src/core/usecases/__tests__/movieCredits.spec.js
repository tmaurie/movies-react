import movieRepository from "App/src/data/repositories/movieRepository";
import fetchMovieCredits from "App/src/core/usecases/movieCredits";

jest.mock("App/src/data/repositories/movieRepository", () => ({
  fetchMovieCredits: jest.fn()
}));

describe("movieCredits", () => {
  it("fetches movie credits successfully", async () => {
    const movieId = 123;
    const mockedMovieCredits = {
      id: 123,
      cast: [
        {
          id: 1,
          name: "Test Actor 1",
          character: "Test Character 1"
        },
        {
          id: 2,
          name: "Test Actor 2",
          character: "Test Character 2"
        }
      ]
    };
    movieRepository.fetchMovieCredits.mockResolvedValue(mockedMovieCredits);

    const result = await fetchMovieCredits(movieId);

    expect(result).toEqual(mockedMovieCredits);
    expect(movieRepository.fetchMovieCredits).toHaveBeenCalledWith(movieId);
  });

  it("throws an error when failed to fetch movie credits", async () => {
    const movieId = 123;
    const errorMessage = "Failed to fetch movie credits";
    movieRepository.fetchMovieCredits.mockRejectedValue(new Error(errorMessage));

    await expect(fetchMovieCredits(movieId)).rejects.toThrow("Failed to fetch movie credits from the TMDB API.");
    expect(movieRepository.fetchMovieCredits).toHaveBeenCalledWith(movieId);
  });
});

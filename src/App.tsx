import { useState } from "react";
import { searchMovies, type Movie } from "./api";

function App() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchMovies(searchText)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-4">Movie Search</h1>
      <form className="bg-white p-4 rounded shadow" onSubmit={handleSearch}>
        <label
          htmlFor="movie"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Search for a movie
        </label>
        <input
          type="text"
          id="movie"
          name="movie"
          className="w-full border border-gray-300 rounded px-2 py-1 mb-2"
          placeholder="Enter movie name"
          required
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <div className="bg-white rounded shadow p-4 max-w-xs">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                  : "https://placehold.co/400x600"
              }
              alt="Movie Poster"
              className="w-full rounded mb-2"
            />
            <h2 className="text-lg font-semibold mb-1">{movie.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-4">
              {movie.overview}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

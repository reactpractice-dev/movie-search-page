import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./movie";

const MovieSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  const handleMovieSearch = (e) => {
    e.preventDefault();
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: process.env.THE_MOVIE_DATABASE_API_KEY,
          query: searchQuery,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch(() => {
        setError(
          "There was an error loading the movie search results. Please try again later."
        );
      });
  };

  return (
    <div>
      <h2>Movie search page</h2>
      <form onSubmit={handleMovieSearch} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearchPage;

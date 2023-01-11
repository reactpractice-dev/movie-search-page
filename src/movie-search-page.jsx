import { useState } from "react";
import Movie from "./movie";
import useMovieSearch from "./use-movie-search";

const MovieSearchPage = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const { movies, error, setSearchQuery } = useMovieSearch();

  const handleMovieSearch = (e) => {
    e.preventDefault();
    // Update the movie search query when the user clicks "Search"
    setSearchQuery(searchInputText);
  };

  return (
    <div>
      <h2>Movie search page</h2>
      <form onSubmit={handleMovieSearch} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchInputText}
          onChange={(e) => setSearchInputText(e.target.value)}
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

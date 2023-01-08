import { useState, useEffect } from "react";
import axios from "axios";

const MovieSearchPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: process.env.THE_MOVIE_DATABASE_API_KEY,
          query: "amelie",
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <h2>Movie search page</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearchPage;

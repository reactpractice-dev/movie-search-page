import { useState, useEffect } from "react";
import axios from "axios";

export default function useMovieSearch() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }

    setError(null);
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
  }, [searchQuery]);

  return { movies, error, setSearchQuery };
}

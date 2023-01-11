const Movie = ({ movie }) => {
  return (
    <div
      style={{ border: "1px solid gray", width: "150px", textAlign: "center" }}
    >
      <h3>{movie.original_title}</h3>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          style={{ width: "100px" }}
        />
      )}
    </div>
  );
};

export default Movie;

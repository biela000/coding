import Movie from "./Movie";

const MovieList = (props) => {
  const movieElements = props.movies.map((movie) => {
    return <Movie key={movie.id} {...movie} />;
  });
  return <ul>{movieElements}</ul>;
};

export default MovieList;

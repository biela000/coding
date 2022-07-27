const Movie = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.openingText}</p>
      <h4>{props.releaseDate}</h4>
    </li>
  );
};

export default Movie;

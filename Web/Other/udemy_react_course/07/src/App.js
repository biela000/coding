import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./components/MovieList";

const App = () => {
  const [MOVIE_LIST, setMOVIE_LIST] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (response.status === 404) {
        throw new Error("oopsie doopsie");
      }
      const data = await response.json();
      const transformedMovies = data.results.map((result) => {
        return {
          id: result.episode_id,
          title: result.title,
          openingText: result.opening_crawl,
          releaseDate: result.release_date,
        };
      });
      setMOVIE_LIST(transformedMovies);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError("oopsie ladoopsie!");
    }
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  return (
    <React.Fragment>
      <button onClick={fetchMoviesHandler}>Fetch movies</button>
      <MovieList movies={MOVIE_LIST} />
      {isLoading && <h1>Loading movies</h1>}
      {error && <h1>{error}</h1>}
    </React.Fragment>
  );
};

export default App;

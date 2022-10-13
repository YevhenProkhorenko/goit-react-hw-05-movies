import { useState, useEffect } from 'react';
import { getTrending } from 'Shared/API/FetchMovies';
import MoviesList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

import React from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getTrending();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <main>
      <h2>Trending today</h2>
      {movies && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </main>
  );
}

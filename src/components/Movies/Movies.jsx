import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'Shared/API/FetchMovies';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MovieList/MovieList';
import css from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await getSearchMovies(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [query]);

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase().trim());
    setSearchParams(search);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Enter a search request');
      return;
    }
    try {
      setIsLoading(true);
      const data = await getSearchMovies(search);
      setMovies(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={css.SearchForm}>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" className={css.TextField} />
        <button type="submit" className={css.SearchBtn}>
          Search
        </button>
      </form>
      <ul>
        {isLoading && <Loader />}
        {error && <p>Something went wrong</p>}
        {movies && <MoviesList movies={movies} />}
      </ul>
    </main>
  );
}

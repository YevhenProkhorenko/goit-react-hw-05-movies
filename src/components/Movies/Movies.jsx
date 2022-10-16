import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'Shared/API/FetchMovies';
import Loader from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/MovieList';
import css from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
  }, [query, searchParams]);

  const handleChange = e => {
    // e.preventDefault();
    setSearch(e.target.value.toLowerCase().trim());
    setSearchParams(search);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('No such movie exists');
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
    <main>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="on"
          className={css.TextField}
        />
        <button className={css.SearchBtn}>Search</button>
      </form>
      <ul>
        {isLoading && <Loader />}
        {error && <p>Something went wrong</p>}
        {movies && <MoviesList movies={movies} />}
        {/* {movies && <MoviesList movies={movies} state={{ from: location }} />} */}
      </ul>
    </main>
  );
}

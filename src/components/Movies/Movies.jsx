import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'Shared/API/FetchMovies';
import Loader from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/MovieList';
import css from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [inputUser, setInputUser] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [query, search]);

  const handleChange = e => {
    const value = e.target.value;
    setInputUser(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputUser.trim() === '') {
      alert('No such movie exists');
      return;
    }
    setSearch(inputUser);
    setSearchParams({ query: inputUser });
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="on"
          value={inputUser}
          autoFocus="on"
          className={css.TextField}
        />
        <button className={css.SearchBtn}>Search</button>
      </form>
      <ul>
        {isLoading && <Loader />}
        {error && <p>Something went wrong</p>}
        {movies && <MoviesList movies={movies} state={{ from: location }} />}
        {/* {movies && <MoviesList movies={movies} state={{ from: location }} />} */}
      </ul>
    </main>
  );
}

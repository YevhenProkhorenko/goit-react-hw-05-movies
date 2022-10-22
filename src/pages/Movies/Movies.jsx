import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'Shared/API/FetchMovies';
import Loader from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/MovieList';
import css from './Movies.module.css';
// import debounce from 'lodash/debounce';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [search, setSearch] = useState(query ?? '');
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
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [query, search]);

  const handleChange = e => {
    e.preventDefault();

    const value = e.target.value;
    setSearch(value);
    setSearchParams({ value });
  };

  // const debouncedHandleChange = debounce(e => handleChange(e), 3000);
  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('No such movie exists');
      return;
    }
    setSearch(search);
    setSearchParams({ query: search });
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <input
          // onChange={debouncedHandleChange}
          onChange={handleChange}
          type="text"
          autoComplete="on"
          value={search}
          autoFocus="on"
          placeholder="Enter the name of the movie"
          className={css.TextField}
        />
        <button className={css.SearchBtn}>Search</button>
      </form>
      <>
        {isLoading && <Loader />}
        {movies && <MoviesList movies={movies} state={{ from: location }} />}
      </>
    </main>
  );
}

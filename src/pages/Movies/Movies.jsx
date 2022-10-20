import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'Shared/API/FetchMovies';
import Loader from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/MovieList';
import css from './Movies.module.css';
import debounce from 'lodash/debounce';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  // const [inputUser, setInputUser] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    // const fetchMovie = async () => {
    //   try {
    //     setIsLoading(true);
    //     const data = await getSearchMovies(query);
    //     setMovies(data.results);
    //   } catch (error) {
    //     console.log(error);
    //     // setError(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    debouncedSearch();
  }, [query, search]);

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
  const debouncedSearch = debounce(() => fetchMovie(), 1000);
  // const debouncedSetSearch = debounce(e => setSearch(e), 1000);

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    // debouncedSearch(value);
    setSearch(value);
    setSearchParams({ query: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('No such movie exists');
      return;
    }
    setSearchParams(search);
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <input
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

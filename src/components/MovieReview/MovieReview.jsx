import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getMovieReview } from 'Shared/API/FetchMovies';
import Loader from 'components/Loader/Loader';
import css from '../MovieReview/MovieReview.module.css';

export default function MovieReview() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const IMG_URL = 'https://images.tmdb.org/t/p/w500';

  const { id } = useParams();
  // const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await getMovieReview(id);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <main className={css.Main}>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      <div>
        <button onClick={goBack} type="button" className={css.Btn}>
          <AiOutlineArrowLeft />
          Go back
        </button>
        {movie && (
          <section className={css.Section}>
            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
            <div className={css.infoWrapper}>
              <h2>{movie.title}</h2>
              <p>UserScore: {movie.vote_average.toFixed(1)}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(' / ')}</p>
            </div>
          </section>
        )}
      </div>
      <div className={css.AdditionalWrapper}>
        <p>Additional information</p>
        <NavLink to="cast">Casts</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </main>
  );
}

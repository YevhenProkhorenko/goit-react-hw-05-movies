import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getCasts } from 'Shared/API/FetchMovies';
import { CastItem } from './CastItem';
import css from '../Cast/Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      if (!id) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await getCasts(id);
        setCast(data);
      } catch (error) {
        alert('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <ul className={css.List}>
      {isLoading && <Loader />}
      {cast && <CastItem cast={cast.cast} />}
    </ul>
  );
}

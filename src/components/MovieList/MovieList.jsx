import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './MovieList.module.css';

export const MoviesList = ({ movies, state }) => {
  const IMG_URL = 'https://images.tmdb.org/t/p/w500';

  return (
    <ul className={css.List}>
      {movies.map(({ title, id, poster_path }) => (
        <li key={nanoid()} className={css.List_Item}>
          <NavLink className={css.Link} state={state} to={`/movies/${id}`}>
            <img
              src={`${IMG_URL}${poster_path}`}
              alt={title}
              className={css.Img}
            />
            <h4 className={css.Tittle}>{title}</h4>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

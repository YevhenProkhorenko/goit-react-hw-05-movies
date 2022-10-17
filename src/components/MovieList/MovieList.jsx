import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './MovieList.module.css';

export const MoviesList = ({ movies, state }) => {
  return (
    <ul className={css.list}>
      {movies.map(({ title, id }) => (
        <li key={nanoid()} className={css.item}>
          <NavLink className={css.link} state={state} to={`/movies/${id}`}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

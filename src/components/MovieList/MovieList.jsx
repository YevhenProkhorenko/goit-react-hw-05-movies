import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        {movies.map(({ title, id }) => (
          <li key={nanoid()} className={css.item}>
            <Link className={css.link} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default MoviesList;

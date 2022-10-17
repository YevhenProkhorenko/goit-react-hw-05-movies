import { nanoid } from 'nanoid';
import css from '../Cast/Cast.module.css';

const IMG_URL = 'https://images.tmdb.org/t/p/w500';

export const CastItem = ({ cast }) => {
  return cast.map(({ profile_path, original_name, character }) => {
    return (
      <li key={nanoid()} className={css.List_item}>
        {profile_path ? (
          <img
            src={`${IMG_URL}${profile_path}`}
            alt={original_name}
            className={css.Img}
          />
        ) : (
          <img src="" alt={original_name} />
        )}
        <p>{original_name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });
};

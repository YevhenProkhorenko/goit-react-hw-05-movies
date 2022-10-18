import { nanoid } from 'nanoid';
import css from '../Cast/Cast.module.css';
import PropTypes from 'prop-types';

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
        <h3>{original_name}</h3>
        <p>Character: {character}</p>
      </li>
    );
  });
};

CastItem.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      original_name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

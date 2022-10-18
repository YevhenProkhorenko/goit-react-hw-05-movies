import { nanoid } from 'nanoid';
import css from '../Reviews/Reviews.module.css';
import PropTypes from 'prop-types';
export const ReviewItem = ({ review }) => {
  return review.map(({ author, comment }) => {
    return (
      <li key={nanoid()} className={css.List_item}>
        <h3>Author: {author}</h3>
        <p>{comment}</p>
      </li>
    );
  });
};

ReviewItem.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      comment: PropTypes.string,
    })
  ),
};

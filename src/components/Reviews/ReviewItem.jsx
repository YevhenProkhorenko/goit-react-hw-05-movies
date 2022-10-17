import { nanoid } from 'nanoid';
import css from '../Reviews/Reviews.module.css';
export const ReviewItem = ({ review }) => {
  return review.map(({ author, content }) => {
    return (
      <li key={nanoid()} className={css.List_item}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    );
  });
};

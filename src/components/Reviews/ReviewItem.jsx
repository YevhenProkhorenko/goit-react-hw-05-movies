import { nanoid } from 'nanoid';

export const ReviewItem = ({ review }) => {
  return review.map(({ author, content }) => {
    return (
      <li key={nanoid()}>
        <p>Author: {author}</p>
        <p>{content}</p>
      </li>
    );
  });
};

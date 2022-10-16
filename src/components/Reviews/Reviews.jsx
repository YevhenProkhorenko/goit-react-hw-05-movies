import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getUserReviews } from 'Shared/API/FetchMovies';
import { ReviewItem } from './ReviewItem';

export default function Reviews() {
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      if (!id) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await getUserReviews(id);
        setReview(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <ul>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}

      {review && <ReviewItem review={review.results} />}
      {review && review.results.length === 0 && (
        <p>There are no reviews for this movie</p>
      )}
    </ul>
  );
}

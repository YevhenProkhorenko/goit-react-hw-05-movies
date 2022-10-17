import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';

const Movies = lazy(() => import('components/Movies/Movies'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieReview />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="movies/:id" />} />
      </Routes>
    </div>
  );
};

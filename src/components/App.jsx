import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import Movies from 'components/Movies/Movies';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

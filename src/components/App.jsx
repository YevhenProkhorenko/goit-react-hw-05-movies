import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import Movies from 'components/Movies/Movies';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={HomePage} />
            {/* <Route path="/movies" element={Movies} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../NavBar/NavBar.module.css';
import Loader from 'components/Loader/Loader';

export default function NavBar() {
  return (
    <div className={css.NavbarWrapper}>
      <header>
        <nav className={css.NavList}>
          <NavLink to="/" className={css.NavList_item}>
            Home
          </NavLink>
          {/* <NavLink to="/movies">Movies</NavLink> */}
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

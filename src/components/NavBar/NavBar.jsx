import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from '../NavBar/NavBar.module.css';

export default function NavBar() {
  return (
    <div className={css.NavbarWrapper}>
      <header>
        <nav className={css.NavList}>
          <NavLink to="/" className={css.NavList_item}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.NavList_item}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

import React from 'react';
import css from '../NavBar/NavBar.module.css';

export default function NavBar() {
  return (
    <div className={css.NavbarWrapper}>
      <ul className={css.NavList}>
        <li className={css.NavList_item}>Home</li>
        <li className={css.NavList_item}>Movies</li>
      </ul>
    </div>
  );
}

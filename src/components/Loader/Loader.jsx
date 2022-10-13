import React from 'react';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.Backdrop}>
      <div className={css.Loader}></div>
    </div>
  );
}

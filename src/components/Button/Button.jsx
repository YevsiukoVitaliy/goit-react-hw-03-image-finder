import React from 'react';
import css from './button.module.css';

export default function Button({ handleMore }) {
  return (
    <button onClick={handleMore} className={css.Button} type="button">
      Load more
    </button>
  );
}

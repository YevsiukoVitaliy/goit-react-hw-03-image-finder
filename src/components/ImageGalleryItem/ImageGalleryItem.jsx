import React from 'react';
import css from './imageGalleryItem.module.css';
export default function ImageGalleryItem({ item }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={item.webformatURL}
        alt=""
      />
    </li>
  );
}

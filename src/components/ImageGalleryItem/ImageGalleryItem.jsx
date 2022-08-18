import React from 'react';
import css from './imageGalleryItem.module.css';

export default function ImageGalleryItem({ item, showModal }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={() => {
          showModal(item.id);
        }}
        className={css.ImageGalleryItemImage}
        src={item.webformatURL}
        alt=""
      />
    </li>
  );
}

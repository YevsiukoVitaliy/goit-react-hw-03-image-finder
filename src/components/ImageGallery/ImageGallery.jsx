import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './imageGallery.module.css';

export default function ImageGallery({ gallery, showModal }) {
  return (
    <ul className={css.ImageGallery}>
      {gallery.map(item => (
        <ImageGalleryItem showModal={showModal} key={item.id} item={item} />
      ))}
    </ul>
  );
}

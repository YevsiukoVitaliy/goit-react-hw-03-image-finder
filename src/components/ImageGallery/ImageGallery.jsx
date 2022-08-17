import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './imageGallery.module.css';
export default function ImageGallery({ gallery }) {
  return (
    <ul className={css.ImageGallery}>
      {gallery.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

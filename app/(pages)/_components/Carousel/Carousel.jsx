'use client';
import React, { useState } from 'react';
import styles from './Carousel.module.scss';

const images = [
  '/images/sample1.jpg',
  '/images/sample2.jpg',
  '/images/sample3.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrowLeft} onClick={prevSlide}>‹</button>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
      />

      <button className={styles.arrowRight} onClick={nextSlide}>›</button>
    </div>
  );
}

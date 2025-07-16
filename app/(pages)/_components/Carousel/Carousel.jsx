'use client';
import styles from './Carousel.module.scss';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Carousel({ images}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <Image 
      src = "/task_2/arrow.svg"
      alt="previous"
      className={styles.prevButton}
        width={50}
        height={50}
        onClick={goToPrevious}
        />

    
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        className={styles.image}
        width={640}
        height={480}
      />

     

      <Image 
      src = "/task_2/arrow.svg"
      alt="previous"
      className={styles.nextButton}
        width={50}
        height={50}
        onClick={goToNext}
        />
    </div>
  );
}

'use client';
import styles from './page.module.scss';
import React from 'react';
import Carousel from '../_components/Carousel/Carousel.jsx';
import { useTheme } from '../../_context/ThemeContext';


const images = [
    "/task_2/Jelly1.png",
    "/task_2/Jelly2.png",
    "/task_2/Montery1.png",
    "/task_2/Starfish_Butt.png",
    "/task_2/penguin.png",
    "/task_2/Shark.png",
    "/task_2/egg.png",
];

export default function Task() {
    const{ theme, toggleTheme} = useTheme();
  return (
    <main>
      <div className={styles.page}>
        <div className={styles.header}>
        <h1 className={styles.pageTitle}>Task 2: Image Carousel</h1>
        <button className={styles.themeToggle} onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme</button>
        </div>
        

        <div className={styles.carouselContainer}>
            <div className={styles.textContainer}>
            <h1 className={styles.title}>Monterey Trip!</h1>
            <h2 className={styles.description}>
                Some pictures from my trip to Monterey last year.
            </h2>
            </div>
            <Carousel images={images} interval={3000} />

      </div>
      </div>
    </main>
  );
};
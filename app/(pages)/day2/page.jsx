"use client";
import styles from './page.module.scss';
import React, { useEffect, useState } from 'react';

export default function Home() {

  const day_images = [
    "sunset1.webp",
    "sunset2.webp",
    "sunset3.jpg",
    "sunset4.jpg",
    "sunset5.webp",
  ];

  const night_images = [
    "night1.jpeg",
    "night2.jpg",
    "night3.jpg",
    "night4.jpg",
    "night5.webp",
  ];

  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme');
    return localTheme ? localTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = `${theme}-theme`; // Apply class to body
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [startIndex, setStartIndex] = useState(0);

  const activeImages = theme === 'light' ? night_images : day_images;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % activeImages.length);
  };


  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + activeImages.length) % activeImages.length);
  };

  const visibleImages = Array.from({length:3}, (_, i) => 
    activeImages[(startIndex + i) % activeImages.length]
  );

  return (
    <main>
      <section className={theme === 'light' ? styles.darkBg : styles.lightBg}>
        <button onClick={toggleTheme} className={styles.switchTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <h1 onClick={toggleTheme} className={theme === 'light' ? styles.darkText : styles.lightText}>Carousel</h1>

        
        <div className={styles.carousel}>
          <button onClick={prevSlide} className={styles.arrow}>‹</button>
          <div className={styles.imageContainer}>
            {visibleImages.map((src, index) => (
              <img key={index} src={src} alt={`img-${index}`} className={styles.image} />
            ))}
        </div>
        <button onClick={nextSlide} className={styles.arrow}>›</button>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { useTheme } from "../ThemeSwitcher/ThemeSwitcher"; 
import Card from "../Card/Card";
import Image from "next/image";
import styles from "./Carousel.module.scss";

export default function Carousel() {
  const { theme } = useTheme();

  const lightPictures = [
    { id: 1, imageURL: "/task2/lightdeer.png" },
    { id: 2, imageURL: "/task2/lightbridge.png" },
    { id: 3, imageURL: "/task2/lightpark.png" },
  ];

  const darkPictures = [
    { id: 1, imageURL: "/task2/darkdeer.png" },
    { id: 2, imageURL: "/task2/darkbridge.png" },
    { id: 3, imageURL: "/task2/darkpark.png" },
  ];

  const pictures = theme === "light" ? lightPictures : darkPictures;

  const cards = pictures.map((pic) => ({
    id: pic.id,
    component: <Card imageURL={pic.imageURL} />,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = cards.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <button className={styles.nav} onClick={handlePrev}>
          <Image src="/task2/left.png" width={27} height={25} alt="Left Arrow Button" />
        </button>

        <div className={styles.carouselContent}>{cards[currentIndex].component}</div>

        <button className={styles.nav} onClick={handleNext}>
          <Image src="/task2/right.png" width={27} height={25} alt="Right Arrow Button" />
        </button>
      </div>

      <div className={styles.dots}>
        {cards.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={index === currentIndex ? styles.activeDot : styles.dot}
          />
        ))}
      </div>
    </div>
  );
}

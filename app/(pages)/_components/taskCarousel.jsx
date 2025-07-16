'use client';
import TaskCard from './taskCard';
import styles from './taskCarousel.module.scss';
import { useState, useEffect } from 'react';

export default function TaskCarousel() {
  const data = ["1", "2", "3", "4", "5"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 500); // Timing of animation
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };

  const prevIndex = (currentIndex - 1 + data.length) % data.length;
  const nextIndex = (currentIndex + 1) % data.length;

  const visibleCards = [
    { idx: prevIndex, type: 'small' },
    { idx: currentIndex, type: 'center' },
    { idx: nextIndex, type: 'small' }
  ];

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={handlePrev}>Prev</button>
      <div className={styles.inner}>
        {visibleCards.map(({ idx, type }, index) => (
          <TaskCard
            key={idx}
            props={{
              id: idx,
              title: `Task ${parseInt(data[idx])}`,
              description: `Task ${parseInt(data[idx])} description`,
              url: '/task_example',
              hidden: false,
              small: type === 'small',
              center: type === 'center',
              isAnimating,
              index
            }}
          />
        ))}
      </div>
      <button className={styles.nextButton} onClick={handleNext}>Next</button>
    </div>
  );
}

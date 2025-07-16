'use client';
import { useState, useRef } from 'react';
import React from 'react';
import TaskCard from './taskCard';
import styles from './taskCarousel.module.scss';

export default function TaskCarousel() {
    const data = ["1", "2", "3", "4", "5"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(null); // 'left' or 'right'
    const animationTimeout = useRef(null);
    const dataLength = data.length;

    // Calculate indices for left, center, right
    const leftIndex = (currentIndex - 1 + dataLength) % dataLength;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % dataLength;

    // For animation, always render left, center, right
    const cardOrder = [leftIndex, centerIndex, rightIndex];
    const cardRoles = ['left', 'center', 'right'];

    const handlePrev = () => {
      if (isAnimating) return;
      setDirection('right');
      setIsAnimating(true);
      if (animationTimeout.current) clearTimeout(animationTimeout.current);
      animationTimeout.current = setTimeout(() => {
        setCurrentIndex(leftIndex);
        setIsAnimating(false);
        setDirection(null);
      }, 500);
    };

    const handleNext = () => {
      if (isAnimating) return;
      setDirection('left');
      setIsAnimating(true);
      if (animationTimeout.current) clearTimeout(animationTimeout.current);
      animationTimeout.current = setTimeout(() => {
        setCurrentIndex(rightIndex);
        setIsAnimating(false);
        setDirection(null);
      }, 500);
    };

    React.useEffect(() => {
      return () => {
        if (animationTimeout.current) clearTimeout(animationTimeout.current);
      };
    }, []);

    return (
      <div className={styles.carousel} style={{ width: '600px', margin: '0 auto', position: 'relative', height: '320px' }}>
        <button className={styles.prevButton} onClick={handlePrev} disabled={isAnimating}>{'<'}</button>
        <div className={styles.inner} style={{ position: 'relative', width: '100%', height: '320px' }}>
          {cardOrder.map((idx, i) => (
            <div
              key={idx}
              className={
                styles.cardWrapper + ' ' +
                styles[cardRoles[i]] +
                (isAnimating && direction === 'left' && cardRoles[i] === 'left' ? ' ' + styles.animatingLeft : '') +
                (isAnimating && direction === 'right' && cardRoles[i] === 'right' ? ' ' + styles.animatingRight : '')
              }
            >
              <TaskCard
                props={{
                  id: idx,
                  title: `Task ${parseInt(data[idx])}`,
                  description: `Task ${parseInt(data[idx])} description`,
                  url: '/task_example',
                  hidden: false,
                  small: cardRoles[i] !== 'center',
                  center: cardRoles[i] === 'center'
                }}
              />
            </div>
          ))}
        </div>
        <button className={styles.nextButton} onClick={handleNext} disabled={isAnimating}>{'>'}</button>
      </div>
    );
}

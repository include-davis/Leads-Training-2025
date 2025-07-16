'use client';
import TaskCard from './taskCard';
import styles from './taskCarousel.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TaskCarousel({ }) {

    const data = ["1", "2", "3", "4", "5"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCenter, setIsCenter] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timeout);
    },[currentIndex]);


    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className={`${styles.carousel} ${isAnimating ? styles.animating : ''}`}>
            <button
                className={styles.prevButton}
                onClick={handlePrev}
            >Prev</button>
            {data.map((item, id) => (
                <TaskCard
                    key={id}
                    props={{
                    id,
                    title: `Task ${id + 1}`,
                    description: `Task ${id + 1} description`,
                    url: '/task_example',
                    hidden: false,
                    small: (
                        currentIndex !== id &&
                        (id === (currentIndex + 1) % data.length ||
                        id === (currentIndex - 1 + data.length) % data.length)
                    ),
                    center: currentIndex === id
                    }}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                />
                ))}
            <button
                className={styles.nextButton}
                onClick={handleNext}
            >Next</button>
        </div>
    );
}
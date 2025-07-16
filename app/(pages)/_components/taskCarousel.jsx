'use client';
import TaskCard from './taskCard';
import styles from './taskCarousel.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TaskCarousel({ }) {

    const data = ["1", "2", "3", "4", "5"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCenter, setIsCenter] = useState(false);


    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className={styles.carousel}>
            <button
                className={styles.prevButton}
                onClick={handlePrev}
            >Prev</button>
            <TaskCard 
                props={{ 
                    id: 1, 
                    title: 'Task 1', 
                    description: 'Task 1 description', 
                    url: '/task_example', 
                    hidden: false, 
                    small: currentIndex !== 0, 
                    center: currentIndex === 0 
                }}
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            />
            <TaskCard 
                props={{ 
                    id: 2, 
                    title: 'Task 2', 
                    description: 'Task 2 description', 
                    url: '/task_example', 
                    hidden: false, 
                    small: currentIndex !== 1, 
                    center: currentIndex === 1 
                }}
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            />
            <TaskCard 
                props={{ 
                    id: 3, 
                    title: 'Task 3', 
                    description: 'Task 3 description', 
                    url: '/task_example', 
                    hidden: false, 
                    small: currentIndex !== 2, 
                    center: currentIndex === 2 
                }}
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            />
            <TaskCard 
                props={{ 
                    id: 4, 
                    title: 'Task 4', 
                    description: 'Task 4 description', 
                    url: '/task_example', 
                    hidden: false, 
                    small: currentIndex !== 3, 
                    center: currentIndex === 3 
                }}
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            />
            <TaskCard 
                props={{ 
                    id: 5, 
                    title: 'Task 5', 
                    description: 'Task 5 description', 
                    url: '/task_example', 
                    hidden: false, 
                    small: currentIndex !== 4, 
                    center: currentIndex === 4 
                }}
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            />
            <button
                className={styles.nextButton}
                onClick={handleNext}
            >Next</button>
        </div>
    );
}
"use client";
import styles from "./Carousel.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

export default function Carousel ({images}) {
    const [current, setCurrent] = useState(0)
    const prev = () => 
        setCurrent((current) => (current == 0 ? images.length - 1 : current - 1))
    const next = () => 
        setCurrent((current) => (current == images.length - 1 ? 0 : current + 1))

    return (
        <main>
            <h1 className={styles.title}>Carousel</h1>
            <div className={styles.sliderContainer}>
                <div className={styles.leftArrow} onClick={prev}>
                    <FaAngleLeft size="5rem"/>
                </div>
                <div className={styles.leftPanel}>
                </div>
                <div className={styles.middlePanel}>
                    <div className={styles.imageList} style={{transform: `translateX(-${current * 100}%)`}}>
                        {images.map((image, index) => (
                            <Image key={index} width={512} height={512} src={image} alt="idk"/>
                        ))}
                    </div>
                </div>
                <div className={styles.rightPanel}>
                    bye
                </div>
                <div className={styles.rightArrow} onClick={next}>
                    <FaAngleRight size="5rem"/>
                </div>
            </div>
            <div>. . .</div>
        </main>
    )
}
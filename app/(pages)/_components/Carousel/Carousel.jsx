import styles from "./Carousel.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


export default function Carousel () {
    return (
        <main>
            <h1 className={styles.title}>Carousel</h1>
            <div className={styles.sliderContainer}>
                <div className={styles.leftArrow}>
                    <FaAngleLeft size="5rem"/>
                </div>
                <div className={styles.leftPanel}>
                    hi
                </div>
                <div className={styles.middlePanel}>
                    hello
                </div>
                <div className={styles.rightPanel}>
                    bye
                </div>
                <div className={styles.rightArrow}>
                    <FaAngleRight size="5rem"/>
                </div>
            </div>
            <div>. . .</div>
        </main>
    )
}
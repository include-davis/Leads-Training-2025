"use client";

import styles from "./page.module.scss";
import Carousel from "../_components/Carousel/Carousel";
import ThemeSwitcher, { useTheme } from "../_components/ThemeSwitcher/ThemeSwitcher";

export default function Task2() {
  return (
    <div className={styles.container}>
      <ThemeSwitcher>
        <h1 className={styles.heading}>Japan</h1>
        <Carousel />
      </ThemeSwitcher>
    </div>
  );
}

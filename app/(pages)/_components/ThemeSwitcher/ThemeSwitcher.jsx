"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import Image from "next/image";
import styles from "./ThemeSwitcher.module.scss";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeSwitcher({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <button
        className={styles.toggle}
        onClick={toggleTheme}
      >
        <div
          className={`${styles.half} ${theme === "light" ? styles.active : ""}`}
        >
          <Image
            src="/task2/sun.png"
            alt="Sun Icon"
            width={30}
            height={30}
          />
        </div>

        <div
          className={`${styles.half} ${theme === "dark" ? styles.active : ""}`}
        >
          <Image
            src="/task2/moon.png"
            alt="Moon Icon"
            width={30}
            height={30}
          />
        </div>
      </button>

      {children}
    </ThemeContext.Provider>
  );
}

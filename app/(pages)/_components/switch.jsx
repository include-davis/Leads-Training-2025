import React from 'react';
import styles from './switch.module.scss';

export default function Switch() {
  return (
    <>
      <input
        className={styles['react-switch-checkbox']}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={styles['react-switch-label']}
        htmlFor={`react-switch-new`}
      >
        <span className={styles['react-switch-button']} />
      </label>
    </>
  );
};


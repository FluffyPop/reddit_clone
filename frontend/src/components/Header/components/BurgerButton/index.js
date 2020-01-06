import React from 'react';

import styles from './styles.module.css';

export const BurgerButton = ({ onClick }) => {
  return (
    <button className={styles.burger__button} onClick={onClick}>
      <span className={styles.burger__bun} />
      <span className={styles.burger__bun} />
      <span className={styles.burger__bun} />
    </button>
  );
};

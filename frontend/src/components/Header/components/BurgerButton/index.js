import React from 'react';

import styles from './styles.module.css';

export const BurgerButton = () => {
  return (
    <button className={styles.burger__button}>
      <span className={styles.burger__bun} />
      <span className={styles.burger__bun} />
      <span className={styles.burger__bun} />
    </button>
  );
};

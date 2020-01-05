import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

export const Button = ({ href, to, label, onClick, inversed, filled }) => {
  const buttonClass = `${styles.button} ${inversed &&
    styles.inversed} ${filled && styles.filled}`;
  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {label}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {label}
      </Link>
    );
  }
  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

export const Input = ({ label, type, value, onChange }) => {
  const inputRef = useRef();

  return (
    <div
      className={styles.input__container}
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <input
        ref={inputRef}
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder=' '
        autoComplete='off'
      />
      <label htmlFor={label} className={styles.input__label}>
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

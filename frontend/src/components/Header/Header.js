import React from 'react';
import { Link } from 'react-router-dom';
import { FaRedditSquare } from 'react-icons/fa';

import styles from './Header.module.css';
import { BurgerButton } from './components/BurgerButton';
import Button from '../Button';

export const Header = ({ toggleRegister, toggleLogin, toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.left_header}>
        <BurgerButton onClick={toggleSidebar} />
        <Link to='/' className={styles.header__logo__link}>
          <FaRedditSquare className={styles.header__logo} />
        </Link>
      </div>
      <div className={styles.right_header}>
        <Button label='Register' inversed onClick={toggleRegister} />
        <Button label='Log In' filled onClick={toggleLogin} />
      </div>
    </header>
  );
};

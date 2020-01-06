import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Sidebar.module.css';
import slideTransition from '../../cssTransitions/leftSlide.module.css';
import widthTransition from '../../cssTransitions/width.module.css';

export const Sidebar = ({ show }) => {
  return (
    <CSSTransition
      in={show}
      appear={true}
      timeout={1000}
      classNames={widthTransition}
      unmountOnExit
    >
      <aside className={styles.sidebar}>
        <span>Sidebar</span>
      </aside>
    </CSSTransition>
  );
};

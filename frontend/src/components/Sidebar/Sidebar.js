import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Sidebar.module.css';
import widthTransition from '../../cssTransitions/width.module.css';

export const Sidebar = ({ show, fetchSubreddits, subreddits }) => {
  useEffect(() => {
    fetchSubreddits();
  }, []);

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
        {subreddits.map(sub => (
          <span>{sub}</span>
        ))}
      </aside>
    </CSSTransition>
  );
};

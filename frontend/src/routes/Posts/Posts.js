import React from 'react';
import PropTypes from 'prop-types';

import styles from './Posts.module.css';

export const Posts = () => {
  return (
    <div className={styles.posts}>
      <span>Posts</span>
    </div>
  );
};

Posts.propTypes = {};

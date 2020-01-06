import React from 'react';
import PropTypes from 'prop-types';

import styles from './Posts.module.css';
import PostCard from '../../components/PostCard';

export const Posts = () => {
  return (
    <div className={styles.posts}>
      <span>Posts</span>
      <PostCard />
    </div>
  );
};

Posts.propTypes = {};

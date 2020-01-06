import React from 'react';
import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './PostCard.module.css';

export const PostCard = () => {
  return (
    <div className={styles.post__card}>
      <aside className={styles.post__card__aside}>
        <div className={styles.post__card__arrows}>
          <button className={styles.post__card__arrow__button}>
            <FaArrowUp className={styles.post__card__arrow} />
          </button>
          <span className={styles.post__card__votes}>72k</span>
          <button className={styles.post__card__arrow__button}>
            <FaArrowDown className={styles.post__card__arrow} />
          </button>
        </div>
      </aside>
      <div className={styles.post__card__content}>
        <header className={styles.post__card__header}>
          <Link to='/' className={styles.post__card__subreddit}>
            r/Askreddit
          </Link>
          <span>
            Posted by{' '}
            <Link to='/' className={styles.post__card__user}>
              u/Mango
            </Link>
          </span>
          <Link to='/' className={styles.post__card__date}>
            2 hours ago
          </Link>
        </header>
        <main className={styles.post__card__main}>
          <span className={styles.post__card__title}>Title</span>
          <span className={styles.post__card__text}>Text</span>
        </main>
        <footer className={styles.post__card__footer}>
          <button className={styles.post__card__button}>
            <FaCommentAlt />
            <span className={styles.post__card__comments}>403 comments</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

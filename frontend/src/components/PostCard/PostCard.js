import React from 'react';
import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './PostCard.module.css';

export const PostCard = () => {
  return (
    <Link to='/' className={styles.post__card}>
      <aside className={styles.post__card__aside}>
        <div className={styles.post__card__arrows}>
          <button
            className={`${styles.post__card__arrow__button}  ${styles.up__arrow}`}
          >
            <FaArrowUp className={styles.post__card__arrow} />
          </button>
          <span className={styles.post__card__votes}>72k</span>
          <button
            className={`${styles.post__card__arrow__button}  ${styles.down__arrow}`}
          >
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
          <span className={styles.post__card__title}>
            What is the male equivalent of taking a bra off?
          </span>
          <span className={styles.post__card__text}>
            A song came on the radio talking about how her breaking up with her
            boyfriend was like taking her bra off. My wife mentioned that is one
            of the best feelings. I dont really have any daily things that make
            me feel that way. So what would be the male equivalent?
          </span>
        </main>
        <footer className={styles.post__card__footer}>
          <button className={styles.post__card__button}>
            <FaCommentAlt />
            <span className={styles.post__card__comments}>403 comments</span>
          </button>
        </footer>
      </div>
    </Link>
  );
};

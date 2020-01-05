import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { FaRegWindowClose } from 'react-icons/fa';

import styles from './Modal.module.css';

export const Modal = ({ show, close, children }) =>
  show
    ? createPortal(
        <div className={styles.modal__overlay}>
          <div className={styles.modal}>
            <div className={styles.modal__header}>
              <FaRegWindowClose
                onClick={close}
                className={styles.modal__close}
              />
            </div>
            <div className={styles.modal__content}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

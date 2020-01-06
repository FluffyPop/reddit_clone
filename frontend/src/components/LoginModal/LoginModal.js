import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './LoginModal.module.css';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

export const LoginModal = ({ show, toggleLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const update = fn => event => fn(event.target.value);

  const handleLoginSubmit = event => {
    event.preventDefault();
  };

  return (
    <Modal show={show} close={toggleLogin}>
      <form className={styles.login__form} onSubmit={handleLoginSubmit}>
        <Input
          label='Name'
          type='text'
          value={name}
          onChange={update(setName)}
        />
        <Input
          label='Password'
          type='password'
          value={password}
          onChange={update(setPassword)}
        />
        <Button label='Log In' type='submit' filled={true} />
      </form>
    </Modal>
  );
};

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired
};

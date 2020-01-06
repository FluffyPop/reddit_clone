import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './RegisterModal.module.css';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

export const RegisterModal = ({ show, toggleRegister, register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const update = fn => event => fn(event.target.value);

  const handleRegisterSubmit = event => {
    event.preventDefault();
    register({ name, email, password, confirmPassword });
    console.log(name, email, password, confirmPassword);
  };

  return (
    <Modal show={show} close={toggleRegister}>
      <form className={styles.register__form} onSubmit={handleRegisterSubmit}>
        <Input
          label='Name'
          type='text'
          value={name}
          onChange={update(setName)}
        />
        <Input
          label='E-mail'
          type='text'
          value={email}
          onChange={update(setEmail)}
        />
        <Input
          label='Password'
          type='password'
          value={password}
          onChange={update(setPassword)}
        />
        <Input
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={update(setConfirmPassword)}
        />
        <Button label='Register' type='submit' filled={true} />
      </form>
    </Modal>
  );
};

RegisterModal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleRegister: PropTypes.func.isRequired
};

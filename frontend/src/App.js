import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Posts from './routes/Posts';
import Header from './components/Header';
import { Footer } from './components/Footer';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <RegisterModal />
        <LoginModal />
        <Switch>
          <Route path='/' exact>
            <Posts />
          </Route>
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

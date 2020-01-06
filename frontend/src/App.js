import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Posts from './routes/Posts';
import Header from './components/Header';
import { Footer } from './components/Footer';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';
import Sidebar from './components/Sidebar';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <RegisterModal />
        <LoginModal />
        <Sidebar />
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

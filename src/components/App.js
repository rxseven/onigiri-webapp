// Module dependencies
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import Footer from './core/Footer';
import Header from './core/Header';
import Main from './core/Main';
import Notification from './core/Notification';
import Wrapper from './core/Wrapper';
import Routes from './Routes';

// Component
const App = () => (
  <Router>
    <LastLocationProvider>
      <Wrapper>
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
        <Notification />
      </Wrapper>
    </LastLocationProvider>
  </Router>
);

// Module exports
export default hot(module)(App);

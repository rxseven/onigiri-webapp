// Module dependencies
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import Body from './core/Body';
import Footer from './core/Footer';
import Header from './core/Header';
import Loader from './core/Loader';
import Main from './core/Main';
import Menu from './core/Menu';
import Notification from './core/Notification';
import Wrapper from './core/Wrapper';
import Routes from './Routes';

// Component
const App = () => (
  <Router>
    <LastLocationProvider>
      <Wrapper>
        <Header />
        <Body>
          <Menu />
          <Main>
            <Routes />
          </Main>
          <Footer />
        </Body>
        <Loader />
        <Notification />
      </Wrapper>
    </LastLocationProvider>
  </Router>
);

// Module exports
export default hot(module)(App);

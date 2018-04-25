// Module dependencies
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

import JSXwrapper from '../components/shared/helpers/JSXwrapper';

import Body from './core/Body';
import Footer from './core/Footer';
import Header from './core/Header';
import Lightbox from './core/Lightbox';
import Main from './core/Main';
import Menu from './core/Menu';
import Notification from './core/Notification';
import Wrapper from './core/Wrapper';
import Routes from './Routes';

// Component
const App = () => (
  <Router>
    <JSXwrapper>
      <ScrollMemory />
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
          <Lightbox />
          <Notification />
        </Wrapper>
      </LastLocationProvider>
    </JSXwrapper>
  </Router>
);

// Module exports
export default hot(module)(App);

// Module dependencies
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

// Components and HOCs
import {
  Body,
  Footer,
  Header,
  Lightbox,
  Main,
  Menu,
  Notification,
  Routes,
  Wrapper
} from 'components/core';

// Component
const App = () => (
  <Router>
    <Fragment>
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
    </Fragment>
  </Router>
);

// Module exports
export default hot(module)(App);

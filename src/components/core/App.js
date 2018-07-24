// Module dependencies
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Lightbox from './Lightbox';
import Main from './Main';
import Menu from './Menu';
import Notification from './Notification';
import Wrapper from './Wrapper';
import Routes from './Routes';

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

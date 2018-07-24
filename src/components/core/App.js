// Module dependencies
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

import Body from 'components/core/Body';
import Footer from 'components/core/Footer';
import Header from 'components/core/Header';
import Lightbox from 'components/core/Lightbox';
import Main from 'components/core/Main';
import Menu from 'components/core/Menu';
import Notification from 'components/core/Notification';
import Routes from 'components/core/Routes';
import Wrapper from 'components/core/Wrapper';

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

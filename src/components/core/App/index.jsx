// @flow
// Module dependencies
import * as React from 'react';
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

// Static types
type Return = React.Element<typeof Router>;

// Component
const App = (): Return => (
  <Router>
    <React.Fragment>
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
    </React.Fragment>
  </Router>
);

// Module exports
export default hot(module)(App);

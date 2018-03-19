// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import { Column, Container, Row } from '../../shared/base/Grid';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types
const propTypes = exact({
  children: PropTypes.element.isRequired
});

// Component
const Main = ({ children }) => (
  <main>
    <Container>
      <Row>
        <Column>{children}</Column>
      </Row>
    </Container>
  </main>
);

// Specify prop types
Main.propTypes = propTypes;

// Module exports
export default Main;

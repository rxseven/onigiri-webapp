// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Components and HOCs
import { Column, Container, Row } from 'components/common/Grid';

// Companion files
import './styles.scss';

// Declare prop types
const propTypes = exact({
  children: PropTypes.element.isRequired
});

// Component
const Main = ({ children }) => (
  <main styleName="wrapper">
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

// Module dependencies
import React from 'react';

import { Column, Container, Row } from '../../shared/base/Grid';

// Peer dependencies
import styles from './styles.scss';

// Component
const Footer = () => (
  <footer className={styles.wrapper}>
    <Container>
      <Row>
        <Column>Footer component</Column>
      </Row>
    </Container>
  </footer>
);

// Module exports
export default Footer;

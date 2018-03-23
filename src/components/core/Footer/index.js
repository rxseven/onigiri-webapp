// Module dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Column, Container, Row } from '../../shared/base/Grid';

// Constants
import PATHS from '../../../constants/router/paths';

// Peer dependencies
import styles from './styles.scss';

// Link
const FooterLink = ({ children, to }) => (
  <NavLink activeClassName={styles.active} to={to}>
    {children}
  </NavLink>
);

// Footer
const Footer = () => (
  <footer className={styles.wrapper}>
    <Container>
      <Row>
        <Column>
          <ul className={styles.navigation}>
            <li>
              <FooterLink to={PATHS.root}>Link</FooterLink>
            </li>
          </ul>
          <div className={styles.content}>Content</div>
        </Column>
      </Row>
    </Container>
  </footer>
);

// Module exports
export default Footer;

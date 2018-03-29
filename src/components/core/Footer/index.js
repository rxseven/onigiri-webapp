// Module dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

import ExLink from '../../shared/base/ExLink';
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
              <FooterLink to={PATHS.static.about}>About</FooterLink>
            </li>
            <li>
              <FooterLink to={PATHS.static.me}>Me</FooterLink>
            </li>
            <li>
              <FooterLink to={PATHS.static.terms}>Terms</FooterLink>
            </li>
            <li>
              <FooterLink to={PATHS.static.privacy}>Privacy</FooterLink>
            </li>
          </ul>
          <div className={styles.content}>
            <p>
              Designed &amp; built with all the love in{' '}
              <ExLink to="https://reactjs.org">React</ExLink> &amp;{' '}
              <ExLink to="https://redux.js.org">Redux</ExLink>.
            </p>
            <p>
              Copyright © 2018{' '}
              <ExLink to="https://www.linkedin.com/in/pongsupawat/">Theerawat Pongsupawat</ExLink>.
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  </footer>
);

// Module exports
export default Footer;

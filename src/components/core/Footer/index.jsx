// Module dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Components and HOCs
import ExLink from 'components/common/ExLink';
import { Column, Container, Row } from 'components/common/Grid';

// Constants
import PATHS from 'constants/router/paths';

// Companion files
import styles from './styles.scss';

// Link
const FooterLink = ({ children, to }) => (
  <NavLink activeClassName={styles.active} to={to}>
    {children}
  </NavLink>
);

// Footer
const Footer = () => (
  <footer styleName="wrapper">
    <Container>
      <Row>
        <Column>
          <ul styleName="navigation">
            <li>
              <FooterLink to={PATHS.static.about}>About</FooterLink>
            </li>
            <li>
              <ExLink to="http://www.rxseven.com">Me</ExLink>
            </li>
            <li>
              <FooterLink to={PATHS.static.terms}>Terms</FooterLink>
            </li>
            <li>
              <FooterLink to={PATHS.static.privacy}>Privacy</FooterLink>
            </li>
            <li>
              <ExLink to="https://github.com/rxseven/onigiri-webapp">View on GitHub</ExLink>
            </li>
          </ul>
          <div styleName="content">
            <p>
              Designed &amp; built with all the love in{' '}
              <ExLink to="https://reactjs.org">React</ExLink> &amp;{' '}
              <ExLink to="https://redux.js.org">Redux</ExLink>.
            </p>
            <p>
              <ExLink to="https://github.com/rxseven/onigiri-webapp/blob/master/LICENSE">
                Copyright © 2018
              </ExLink>{' '}
              <ExLink to="http://www.rxseven.com">Theerawat Pongsupawat</ExLink>.
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  </footer>
);

// Module exports
export default Footer;

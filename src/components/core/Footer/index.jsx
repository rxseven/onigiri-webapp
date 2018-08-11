// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import ExLink from 'components/common/ExLink';
import { Column, Container, Row } from 'components/common/Grid';

// Constants
import PATHS from 'constants/router/paths';

// Companion files
import FooterLink from './FooterLink';
import './styles.scss';

// Static types
type Return = React.Element<'footer'>;

// Footer
const Footer = (): Return => (
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

// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import { Column, Container, Row } from 'components/common/Grid';

// Companion files
import './styles.scss';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'main'>;

// Component
const Main = ({ children }: Props): Return => (
  <main styleName="wrapper">
    <Container>
      <Row>
        <Column>{children}</Column>
      </Row>
    </Container>
  </main>
);

// Module exports
export default Main;

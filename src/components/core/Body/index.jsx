// @flow
// Module dependencies
import * as React from 'react';

// Constants
import HTML from 'constants/elements/html';

// Component types
import Footer from '../Footer';
import Main from '../Main';
import Menu from '../Menu';

// Static types
type Props = {
  children: React.Element<typeof Footer> | React.Element<typeof Main> | React.Element<typeof Menu>
};

type Return = React.Element<'div'>;

// Component
const Body = ({ children }: Props): Return => <div id={HTML.body}>{children}</div>;

// Module exports
export default Body;

// @flow
// Module dependencies
import * as React from 'react';

// Component types
import Row from '../Row';

// Static types
type Props = { children: React.Element<typeof Row> };
type Return = React.Element<'div'>;

// Component
const Container = ({ children }: Props): Return => <div className="container">{children}</div>;

// Module exports
export default Container;

// @flow
// Module dependencies
import * as React from 'react';

// Component types
import ListGroupItem from '../ListGroupItem';

// Static types
type Props = { children: React.Element<typeof ListGroupItem> };
type Return = React.Element<'div'>;

// Component
const ListGroup = ({ children }: Props): Return => <div>{children}</div>;

// Module exports
export default ListGroup;

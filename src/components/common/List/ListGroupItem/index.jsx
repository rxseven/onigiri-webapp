// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Component
const ListGroupItem = ({ children }: Props): Return => <div>{children}</div>;

// Module exports
export default ListGroupItem;

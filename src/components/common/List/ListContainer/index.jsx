// @flow
// Module dependencies
import * as React from 'react';

// Component types
import ListItem from '../ListItem';

// Static types
type Props = { children: React.Element<typeof ListItem> };
type Return = React.Element<'div'>;

// Component
const ListContainer = ({ children }: Props): Return => <div>{children}</div>;

// Module exports
export default ListContainer;

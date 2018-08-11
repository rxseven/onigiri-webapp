// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'p'>;

// Component
const ListGroupText = ({ children }: Props): Return => <p styleName="text">{children}</p>;

// Module exports
export default ListGroupText;

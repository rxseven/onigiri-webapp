// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: string };
type Return = React.Element<'h5'>;

// Component
const ListGroupHL = ({ children }: Props): Return => <h5 styleName="headline">{children}</h5>;

// Module exports
export default ListGroupHL;

// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: string };
type Return = React.Element<'h4'>;

// Component
const ListTitle = ({ children }: Props): Return => <h4 styleName="title">{children}</h4>;

// Module exports
export default ListTitle;

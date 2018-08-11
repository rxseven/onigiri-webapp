// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'h3'>;

// Component
const TipHeader = ({ children }: Props): Return => <h3 styleName="header">{children}</h3>;

// Module exports
export default TipHeader;

// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'h2'>;

// Component
const HL = ({ children }: Props): Return => <h2 styleName="headline">{children}</h2>;

// Module exports
export default HL;

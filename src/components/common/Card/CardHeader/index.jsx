// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Component
const CardHeader = ({ children }: Props): Return => <div className="card-header">{children}</div>;

// Module exports
export default CardHeader;

// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Component
const CardBody = ({ children }: Props): Return => <div className="card-body">{children}</div>;

// Module exports
export default CardBody;

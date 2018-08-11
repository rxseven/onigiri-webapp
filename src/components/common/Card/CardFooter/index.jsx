// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Component
const CardFooter = ({ children }: Props): Return => (
  <div className="card-footer text-muted">{children}</div>
);

// Module exports
export default CardFooter;

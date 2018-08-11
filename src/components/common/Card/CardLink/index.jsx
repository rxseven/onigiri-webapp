// @flow
// Module dependencies
import * as React from 'react';
import { Link } from 'react-router-dom';

// Static types
type Props = {
  children: React.Node,
  link: string
};

type Return = React.Element<typeof Link>;

// Component
const CardLink = ({ children, link }: Props): Return => (
  <Link className="card-link" to={link}>
    {children}
  </Link>
);

// Module exports
export default CardLink;

// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'h1'>;

// Component
const HeroHeader = ({ children }: Props): Return => (
  <h1 className="jumbotron-headline">{children}</h1>
);

// Module exports
export default HeroHeader;

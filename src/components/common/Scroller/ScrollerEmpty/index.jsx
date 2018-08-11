// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Children = React.Node;
type Props = { children: Children };
type Return = Children;

// Component
const ScrollerEmpty = ({ children }: Props): Return => children;

// Module exports
export default ScrollerEmpty;

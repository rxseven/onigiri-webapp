// @flow
// Module dependencies
import * as React from 'react';

// Component types
import Title from '../Title';

// Static types
type Children = React.Element<typeof Title>;
type Props = { children: Children };
type Return = Children;

// Component
export const Head = ({ children }: Props): Return => children;

// Module exports
export default Head;

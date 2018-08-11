// @flow
// Module dependencies
import * as React from 'react';

// Component types
import Body from '../Body';
import Head from '../Head';

// Static types
type Children = React.Element<typeof Body> & React.Element<typeof Head>;
type Props = { children: Children };
type Return = Children;

// Component
export const Document = ({ children }: Props): Return => children;

// Module exports
export default Document;

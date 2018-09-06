// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Fragment = ({ children }: Props): Return => <React.Fragment>{children}</React.Fragment>;

// Module exports
export default Fragment;

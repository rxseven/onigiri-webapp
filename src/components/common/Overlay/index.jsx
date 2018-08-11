// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Component
const Overlay = ({ children }: Props): Return => (
  <div styleName="wrapper">
    <div styleName="content">{children}</div>
  </div>
);

// Module exports
export default Overlay;

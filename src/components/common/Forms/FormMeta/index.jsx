// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Component
const FormMeta = ({ children }: Props): Return => (
  <div styleName="meta">
    <span styleName="context">{children}</span>
  </div>
);

// Module exports
export default FormMeta;

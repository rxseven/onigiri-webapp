// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'h3'>;

// Component
const FormSHL = ({ children }: Props): Return => <h3 styleName="subheadline">{children}</h3>;

// Module exports
export default FormSHL;

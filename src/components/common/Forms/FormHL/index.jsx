// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: string };
type Return = React.Element<'h2'>;

// Component
const FormHL = ({ children }: Props): Return => <h2 styleName="headline">{children}</h2>;

// Module exports
export default FormHL;

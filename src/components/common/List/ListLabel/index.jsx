// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: string };
type Return = React.Element<'div'>;

// Component
const ListLabel = ({ children }: Props): Return => <div styleName="label">{children}</div>;

// Module exports
export default ListLabel;

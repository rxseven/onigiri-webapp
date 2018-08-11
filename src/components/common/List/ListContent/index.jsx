// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Component
const ListContent = ({ children }: Props): Return => <div styleName="content">{children}</div>;

// Module exports
export default ListContent;

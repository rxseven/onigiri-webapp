// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Component
const ModalBody = ({ children }: Props): Return => <div className="modal-body">{children}</div>;

// Module exports
export default ModalBody;

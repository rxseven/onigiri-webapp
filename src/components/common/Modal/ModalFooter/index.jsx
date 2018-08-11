// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = { children: React.Node };
type Return = React.Element<'div'>;

// Modal footer
const ModalFooter = ({ children }: Props): Return => <div className="modal-footer">{children}</div>;

// Module exports
export default ModalFooter;

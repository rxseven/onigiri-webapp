// @flow
// Module dependencies
import * as React from 'react';
import ReactModal from 'react-modal';

// Constants
import HTML from 'constants/elements/html';

// Component types
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';

// Static types
type Props = {
  children: React.Element<typeof ModalBody> | React.Element<typeof ModalFooter>,
  onClose: Function,
  title: string,
  visibility: boolean
};

type Return = React.Element<typeof ReactModal>;

// Hide the application from screenreaders and other assistive technologies
ReactModal.setAppElement(`#${HTML.root}`);

// Component
const ModalContainer = ({
  children, onClose, title, visibility
}: Props): Return => (
  <ReactModal
    bodyOpenClassName="modal-open"
    className="modal-dialog"
    isOpen={visibility}
    onRequestClose={onClose}
    overlayClassName="modal"
  >
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button aria-label="Close" className="close" onClick={() => onClose()} type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {children}
    </div>
  </ReactModal>
);

// Module exports
export default ModalContainer;

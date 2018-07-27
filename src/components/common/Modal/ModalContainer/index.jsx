// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import ReactModal from 'react-modal';

// Constants
import HTML from 'constants/elements/html';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  visibility: PropTypes.bool.isRequired
});

// Hide the application from screenreaders and other assistive technologies
ReactModal.setAppElement(`#${HTML.root}`);

// Component
const ModalContainer = ({
  children, onClose, title, visibility
}) => (
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

// Specify prop types
ModalContainer.propTypes = propTypes;

// Module exports
export default ModalContainer;

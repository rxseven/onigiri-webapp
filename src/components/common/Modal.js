// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import ReactModal from 'react-modal';

import HTML from 'constants/elements/html';

// Declare prop types
const propTypes = exact({
  body: {
    children: PropTypes.node.isRequired
  },
  container: {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired
  },
  footer: {
    children: PropTypes.node.isRequired
  }
});

// Hide the application from screenreaders and other assistive technologies
ReactModal.setAppElement(`#${HTML.root}`);

// Modal container
export const Modal = ({
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

// Modal body
export const ModalBody = ({ children }) => <div className="modal-body">{children}</div>;

// Modal footer
export const ModalFooter = ({ children }) => <div className="modal-footer">{children}</div>;

// Specify prop types
Modal.propTypes = propTypes.container;
ModalBody.propTypes = propTypes.body;
ModalFooter.propTypes = propTypes.footer;

// Module dependencies
import React from 'react';

// Components and HOCs
import Confirm from 'components/composite/Confirm';

// Component
const Modal = ({ actions, state: { ui } }) => (
  <Confirm
    asynchronous={ui.asynchronous}
    buttonCancel="Cancel"
    buttonConfirm="Okay"
    onClose={actions.close}
    onConfirm={actions.confirm}
    title="Delete Survey"
    visibility={ui.visibility}
  >
    <p>This action is permanent. Are you sure you don’t want to reconsider?</p>
  </Confirm>
);

// Module exports
export default Modal;
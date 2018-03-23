// Module dependencies
import React from 'react';

import Confirm from '../../../../../components/shared/extended/Confirm';

// Component
const Modal = ({ actions, state: { ui } }) => (
  <Confirm
    asynchronous={undefined}
    buttonCancel="Cancel"
    buttonConfirm="Okay"
    onClose={actions.close}
    onConfirm={undefined}
    title="Delete Survey"
    visibility={ui.visibility}
  >
    <p>This action is permanent. Are you sure you don&apos;t want to reconsider?</p>
  </Confirm>
);

// Module exports
export default Modal;

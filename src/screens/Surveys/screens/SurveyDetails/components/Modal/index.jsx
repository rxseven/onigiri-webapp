// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import Confirm from 'components/composite/Confirm';

// Types
import type { Asynchronous } from 'types/common/state';

// Static types
type Props = {
  actions: {
    close: Function,
    confirm: Function
  },
  state: {
    ui: {
      asynchronous: Asynchronous,
      visibility: boolean
    }
  }
};

type Return = React.Element<typeof Confirm>;

// Component
const Modal = ({ actions, state: { ui } }: Props): Return => (
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

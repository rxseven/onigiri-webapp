// Module dependencies
import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '../base/Buttons';
import { Modal, ModalBody, ModalFooter } from '../base/Modal';
import Spinner from '../base/Spinner';
import Error from '../extended/Error';

// Constants
import PROP_TYPES from '../../../constants/models/propTypes';
import STATE_MODELS from '../../../constants/models/state';

// Declare prop types and default props
const propTypes = {
  alert: PropTypes.bool,
  asynchronous: PROP_TYPES.model.asynchronous,
  spinner: PropTypes.bool
};

const defaultProps = {
  alert: true,
  asynchronous: { ...STATE_MODELS.model.asynchronous },
  spinner: true
};

// Component
const Confirm = (props) => {
  // Variables
  const {
    alert,
    asynchronous: { error, loading },
    buttonCancel,
    buttonConfirm,
    children,
    onClose,
    onConfirm,
    spinner
  } = props;

  // View
  return (
    <Modal {...props}>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <If condition={spinner && loading}>
          <Spinner />
        </If>
        <If condition={alert && error}>
          <Error alert={error} />
        </If>
        <Button disabled={loading} handler={() => onClose()} styles="secondary">
          {buttonCancel}
        </Button>
        <Button button="danger" disabled={loading} handler={onConfirm}>
          {buttonConfirm}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// Specify prop types and default values for props
Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;

// Module exports
export default Confirm;

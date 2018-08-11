// @flow
// Module dependencies
import * as React from 'react';

// Static types
import { type Asynchronous } from 'types/common/state';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import { Modal, ModalBody, ModalFooter } from 'components/common/Modal';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

// Constants
import STATE_MODELS from 'constants/models/state';

// Static types
type Props = {
  alert: boolean,
  asynchronous: Asynchronous,
  buttonCancel: string,
  buttonConfirm: string,
  children: React.Node,
  onClose: Function,
  onConfirm: Function,
  spinner: boolean,
  title: string,
  visibility: boolean
};

type Return = React.Element<typeof Modal>;

// Default props
const defaultProps = {
  alert: true,
  asynchronous: { ...STATE_MODELS.model.asynchronous },
  spinner: true
};

// Component
const Confirm = ({
  alert,
  asynchronous,
  buttonCancel,
  buttonConfirm,
  children,
  onClose,
  onConfirm,
  spinner,
  title,
  visibility
}: Props): Return => {
  // Variables
  const { error, loading } = asynchronous;

  // View
  return (
    <Modal onClose={onClose} title={title} visibility={visibility}>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <If condition={spinner && loading}>
          <Spinner />
        </If>
        {alert && error && <Error alert={error} />}
        <Button disabled={loading} handler={() => onClose()}>
          {buttonCancel}
        </Button>
        <Button button="danger" disabled={loading} handler={onConfirm}>
          {buttonConfirm}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// Specify default values for props
Confirm.defaultProps = defaultProps;

// Module exports
export default Confirm;

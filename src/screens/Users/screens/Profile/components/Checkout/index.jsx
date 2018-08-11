// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import Payments from 'components/features/Payments';
import { ButtonSet } from 'components/common/Buttons';
import { CardText } from 'components/common/Card';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

// Constants
import STATE_MODELS from 'constants/models/state';

// Types
import type { Asynchronous } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Static types
type Props = {
  callback: Callback,
  state: {
    ui: {
      asynchronous: {
        post: {
          checkout: Asynchronous
        }
      }
    }
  }
};

type Return = React.Node;

// Default props
const defaultProps = STATE_MODELS.wrapper.asynchronous({
  post: {
    checkout: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
const Checkout = ({ callback, state: { ui: { asynchronous } } }: Props): Return => {
  // Variables
  const { error, loading } = asynchronous.post.checkout;

  // View
  return (
    <React.Fragment>
      <CardText>Pay $5.00 get 5 survey credits.</CardText>
      {!!error && <Error alert={error} />}
      <ButtonSet>
        <Payments callback={callback} />
        <If condition={loading}>
          <Spinner />
        </If>
      </ButtonSet>
    </React.Fragment>
  );
};

// Specify default values for props
Checkout.defaultProps = defaultProps;

// Module exports
export default Checkout;

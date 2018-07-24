// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React, { Fragment } from 'react';

// Components and HOCs
import Payments from 'components/features/Payments';
import { ButtonSet } from 'components/common/Buttons';
import { CardText } from 'components/common/Card';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

// Constants
import PROP_TYPES from 'constants/models/propTypes';
import STATE_MODELS from 'constants/models/state';

// Declare prop types and default props
const propTypes = exact({
  ...PROP_TYPES.wrapper.asynchronous({
    post: PropTypes.shape({
      checkout: PROP_TYPES.model.asynchronous
    })
  }),
  callback: PropTypes.func.isRequired
});

const defaultProps = STATE_MODELS.wrapper.asynchronous({
  post: {
    checkout: { ...STATE_MODELS.model.asynchronous }
  }
});

// Component
const Checkout = ({ callback, state: { ui: { asynchronous } } }) => {
  // Variables
  const { error, loading } = asynchronous.post.checkout;

  // View
  return (
    <Fragment>
      <CardText>Pay $5.00 get 5 survey credits.</CardText>
      <If condition={error}>
        <Error alert={error} />
      </If>
      <ButtonSet>
        <Payments callback={callback} />
        <If condition={loading}>
          <Spinner />
        </If>
      </ButtonSet>
    </Fragment>
  );
};

// Specify prop types and default values for props
Checkout.propTypes = propTypes;
Checkout.defaultProps = defaultProps;

// Module exports
export default Checkout;

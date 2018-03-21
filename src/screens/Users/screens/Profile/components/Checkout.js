// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Payments from '../../../../../components/features/Payments';
import { ButtonSet } from '../../../../../components/shared/base/Buttons';
import { CardText } from '../../../../../components/shared/base/Card';
import Spinner from '../../../../../components/shared/base/Spinner';
import Error from '../../../../../components/shared/extended/Error';
import JSXwrapper from '../../../../../components/shared/helpers/JSXwrapper';
import Render from '../../../../../components/shared/helpers/Render';

// Constants
import PROP_TYPES from '../../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../../constants/models/state';

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
    <JSXwrapper>
      <CardText>Pay $5.00 get 5 survey credits.</CardText>
      <Render condition={error}>
        <Error alert={error} />
      </Render>
      <ButtonSet>
        <Payments callback={callback} />
        <Render condition={loading}>
          <Spinner />
        </Render>
      </ButtonSet>
    </JSXwrapper>
  );
};

// Specify prop types and default values for props
Checkout.propTypes = propTypes;
Checkout.defaultProps = defaultProps;

// Module exports
export default Checkout;

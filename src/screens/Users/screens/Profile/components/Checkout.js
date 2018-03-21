// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Payments from '../../../../../components/features/Payments';
import { ButtonSet } from '../../../../../components/shared/base/Buttons';
import { CardText } from '../../../../../components/shared/base/Card';
import JSXwrapper from '../../../../../components/shared/helpers/JSXwrapper';

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
const Checkout = ({ callback }) => (
  <JSXwrapper>
    <CardText>Pay $5.00 get 5 survey credits.</CardText>
    <ButtonSet>
      <Payments callback={callback} />
    </ButtonSet>
  </JSXwrapper>
);

// Specify prop types and default values for props
Checkout.propTypes = propTypes;
Checkout.defaultProps = defaultProps;

// Module exports
export default Checkout;

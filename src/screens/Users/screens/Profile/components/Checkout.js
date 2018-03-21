// Module dependencies
import React from 'react';

import Payments from '../../../../../components/features/Payments';
import { ButtonSet } from '../../../../../components/shared/base/Buttons';
import { CardText } from '../../../../../components/shared/base/Card';
import JSXwrapper from '../../../../../components/shared/helpers/JSXwrapper';

// Component
const Checkout = ({ callback }) => (
  <JSXwrapper>
    <CardText>Pay $5.00 get 5 survey credits.</CardText>
    <ButtonSet>
      <Payments callback={callback} />
    </ButtonSet>
  </JSXwrapper>
);

// Module exports
export default Checkout;

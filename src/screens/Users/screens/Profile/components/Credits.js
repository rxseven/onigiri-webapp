// Module dependencies
import React from 'react';

import { Card, CardBody, CardFooter, CardTitle } from '../../../../../components/shared/base/Card';
import Text from '../../../../../components/shared/base/Text';
import Render from '../../../../../components/shared/helpers/Render';
import timestampHelper from '../../../../../helpers/timestamp';

// Peer dependencies
import Checkout from './Checkout';

// Component
const Credits = ({ callback, state }) => {
  // Variables
  const { balance, lastCheckout } = state.data.credits;

  // View
  return (
    <Card>
      <CardBody>
        <CardTitle>You have {balance && <span>{balance}</span>} survey credits</CardTitle>
        <hr />
        <Checkout
          callback={() => console.log('TODO: Specify a callback function')}
          state={{ ...state }}
        />
      </CardBody>
      <Render condition={lastCheckout}>
        <CardFooter>
          <Text mute small>
            Last checkout on {timestampHelper.date(lastCheckout)},{' '}
            {timestampHelper.time(lastCheckout)}
          </Text>
        </CardFooter>
      </Render>
    </Card>
  );
};

// Module exports
export default Credits;

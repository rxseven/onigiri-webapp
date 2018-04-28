// Module dependencies
import React from 'react';

import { Card, CardBody, CardFooter, CardTitle } from '../../../../../components/shared/base/Card';
import Icon from '../../../../../components/shared/base/Icon';
import Text from '../../../../../components/shared/base/Text';
import { Tip, TipHeader } from '../../../../../components/shared/base/Tip';
import JSXwrapper from '../../../../../components/shared/helpers/JSXwrapper';
import timestampHelper from '../../../../../helpers/timestamp';

// Peer dependencies
import Checkout from './Checkout';

// Component
const Credits = ({ callback, state }) => {
  // Variables
  const { balance, lastCheckout } = state.data.credits;

  // View
  return (
    <JSXwrapper>
      <Card end>
        <CardBody>
          <CardTitle>You have {balance && <span>{balance}</span>} survey credits</CardTitle>
          <hr />
          <Checkout callback={callback} state={{ ...state }} />
        </CardBody>
        <If condition={lastCheckout}>
          <CardFooter>
            <Text mute small>
              Last checkout on {timestampHelper.date(lastCheckout)},{' '}
              {timestampHelper.time(lastCheckout)}
            </Text>
          </CardFooter>
        </If>
      </Card>
      <Tip end>
        <TipHeader>
          <Icon name="star" title="Tips" /> Demo tips
        </TipHeader>
        <p>
          There is no need to use real credit card info to pay for survey credits, any fake one is
          fine, or you can try with this card:
        </p>
        <ul className="list-flat">
          <li>
            Email: <code>skywalker@rxseven.com</code>
          </li>
          <li>
            Number: <code>4242424242424242</code>
          </li>
          <li>
            MM/YY: <code>01/22</code>
          </li>
          <li>
            CVC: <code>123</code>
          </li>
        </ul>
        <hr />
        <TipHeader>
          <Icon name="beaker" title="Notes" /> Notes
        </TipHeader>
        <p>
          The payment functionality is on <strong>TEST MODE</strong>, Onigiri WILL NOT charge your
          money (in case you use a real one).
        </p>
      </Tip>
    </JSXwrapper>
  );
};

// Module exports
export default Credits;

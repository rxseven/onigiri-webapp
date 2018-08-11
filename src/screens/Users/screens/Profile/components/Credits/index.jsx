// @flow
// Module dependencies
import * as React from 'react';

// Helper functions
import timestampHelper from 'helpers/timestamp';

// Components and HOCs
import { Card, CardBody, CardFooter, CardTitle } from 'components/common/Card';
import Icon from 'components/common/Icon';
import Text from 'components/common/Text';
import { Tip, TipHeader } from 'components/common/Tip';

// Types
import type { Credits as CreditsType } from 'data/credits/types';
import type { Callback } from 'types/common/utilities';

// Companion files
import Checkout from '../Checkout';

// Static types
type Props = {
  callback: Callback,
  state: {
    data: {
      credits: CreditsType
    }
  }
};

type Return = React.Node;

// Component
const Credits = ({ callback, state }: Props): Return => {
  // Variables
  const { balance, lastCheckout } = state.data.credits;

  // View
  return (
    <React.Fragment>
      <Card end>
        <CardBody>
          <CardTitle>You have {balance && <span>{balance}</span>} survey credits</CardTitle>
          <hr />
          <Checkout callback={callback} state={{ ...state }} />
        </CardBody>
        <If condition={!!lastCheckout}>
          <CardFooter>
            <Text mute small>
              {/* flow-disable-next-line */}
              Last checkout on {timestampHelper.date(lastCheckout)}, {/* flow-disable-next-line */}
              <span>{timestampHelper.time(lastCheckout)}</span>
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
    </React.Fragment>
  );
};

// Module exports
export default Credits;

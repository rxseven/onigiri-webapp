// @flow
// Module dependencies
import { map, size } from 'lodash';
import * as React from 'react';

// Components and HOCs
import { Button, ButtonSet } from 'components/common/Buttons';
import { CardSubtitle } from 'components/common/Card';
import { List, ListItem, ListContent, ListLabel } from 'components/common/List';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

// Constants
import STATE_MODELS from 'constants/models/state';
import CSS from 'constants/string/css';

// Types
import type { Asynchronous } from 'types/common/state';
import type { Recipient } from '../../data/survey/types';

// Companion files
import './styles.scss';

// Static types
type Props = {
  actions: {
    getRecipients: Function
  },
  state: {
    data: ?Recipient,
    ui: {
      asynchronous: Asynchronous
    }
  }
};

type Return = React.Node;

// Default props
const defaultProps = STATE_MODELS.pattern.asynchronous;

// Component
const Recipients = ({ actions, state: { data, ui: { asynchronous } } }: Props): Return => {
  // Variables
  const { error, loading } = asynchronous;

  // View
  return (
    <React.Fragment>
      <hr />
      <CardSubtitle options={CSS.margin.MB04}>Recipients</CardSubtitle>
      <If condition={!data}>
        <ButtonSet options={error && CSS.margin.MB04}>
          <Button
            button="outline-primary"
            disabled={loading}
            handler={actions.getRecipients}
            size="small"
          >
            View recipient list
          </Button>
          <If condition={loading}>
            <Spinner />
          </If>
        </ButtonSet>
      </If>
      {!!error && <Error alert={error} />}
      <If condition={!!data}>
        <List>
          <ListItem>
            <ListLabel>Total</ListLabel>
            <ListContent>{data && size(data)}</ListContent>
          </ListItem>
          <ListItem end>
            <ListLabel>Recipient list</ListLabel>
            <ListContent>
              <ul styleName="list">
                {map(data, (item) => {
                  const { _id: id } = item;
                  return (
                    <li key={`recipient-${id}`}>
                      <code>{item.email}</code>
                    </li>
                  );
                })}
              </ul>
            </ListContent>
          </ListItem>
        </List>
      </If>
    </React.Fragment>
  );
};

// Specify default values for props
Recipients.defaultProps = defaultProps;

// Module exports
export default Recipients;

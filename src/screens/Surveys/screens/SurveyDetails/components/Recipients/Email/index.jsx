// @flow
// Module dependencies
import { map, size } from 'lodash';
import * as React from 'react';

// Components and HOCs
import { List, ListItem, ListContent, ListLabel } from 'components/common/List';
import withFetch from 'HOCs/composite/withFetch';

// Types
import type { Recipient } from '../../../data/survey/types';

// Companion files
import './styles.scss';

// Static types
type Props = {
  data: Recipient
};

type Return = React.Node;

// Component
export const Email = ({ data }: Props): Return => (
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
);

// Enhance a component with fetch functionality
const Enhanced = withFetch(Email);

// Module exports
export default Enhanced;

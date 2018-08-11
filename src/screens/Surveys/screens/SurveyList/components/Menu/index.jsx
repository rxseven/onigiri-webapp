// @flow
// Module dependencies
import { map } from 'lodash';
import * as React from 'react';

// Components and HOCs
import { ButtonHandler } from 'components/common/Buttons';
import { ListGroup } from 'components/common/ListGroup';

// Types
import type { Mode } from '../../types';

// Companion files
import './styles.scss';

// Constants
const ITEMS = [
  {
    icon: 'list',
    selection: 'active',
    title: 'Active',
    value: { mode: 'active', query: null }
  },
  {
    icon: 'check',
    selection: 'completed',
    title: 'Completed',
    value: { mode: 'completed', query: { completed: true } }
  },
  {
    icon: 'box',
    selection: 'archived',
    title: 'Archived',
    value: { mode: 'archived', query: { archived: true } }
  }
];

// Static types
type Props = {
  actions: {
    mode: Function
  },
  state: {
    mode: Mode
  }
};

type Return = React.Element<'div'>;

// Render button
const renderButton = (
  {
    icon, selection, title, value
  },
  index,
  actions,
  state
): React.Element<typeof ButtonHandler> => (
  <ButtonHandler
    active={state.mode === selection}
    handler={{ onClick: actions.mode }}
    icon={icon}
    key={`button-0${index}`}
    title={title}
    type="button-list"
    value={value}
  >
    {title}
  </ButtonHandler>
);

// Component
const Menu = ({ actions, state }: Props): Return => (
  <div styleName="wrapper">
    <ListGroup>
      {map(ITEMS, (item, index: number) => renderButton(item, index, actions, state))}
    </ListGroup>
  </div>
);

// Module exports
export default Menu;

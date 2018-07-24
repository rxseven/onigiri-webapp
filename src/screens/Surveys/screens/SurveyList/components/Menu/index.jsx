// Module dependencies
import { map } from 'lodash';
import React from 'react';

// Components and HOCs
import { ButtonHandler } from 'components/common/Buttons';
import { ListGroup } from 'components/common/ListGroup';

// Companion files
import ITEMS from './items';
import styles from './styles.scss';

// Component
const Menu = ({ actions, state }) => (
  <div className={styles.wrapper}>
    <ListGroup>
      {map(ITEMS, ({
 icon, selection, title, value
}, index) => (
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
      ))}
    </ListGroup>
  </div>
);

// Module exports
export default Menu;

// Module dependencies
import { isEmpty as checkEmpty, map } from 'lodash';
import React from 'react';

import { ListGroup } from '../../../../../../components/shared/base/ListGroup';
import {
  Scroller,
  ScrollerContent
} from '../../../../../../components/shared/base/Scroller';

// Constants
import CSS from '../../../../../../constants/string/css';

// Peer dependencies
import Item from '../Item';
import styles from './styles.scss';

// Component
const List = ({ actions, state }) => {
  // Variables
  const {
    asynchronous, data, meta, mode, pagination, query
  } = state;
  const isEmpty = checkEmpty(data);
  const isError = asynchronous.get.error;

  // View
  return (
    <div className={styles.wrapper}>
      <Scroller
        actions={actions}
        state={{
          isEmpty,
          isError,
          meta,
          mode,
          pagination,
          query
        }}
      >
        <ScrollerContent>
          <ListGroup margin={isEmpty ? null : CSS.margin.MB04}>
            {map(data, (item) => {
              const { _id: id } = item;
              return <Item key={`item-${id}`} state={{ data: item, mode }} />;
            })}
          </ListGroup>
        </ScrollerContent>
      </Scroller>
    </div>
  );
};

// Module exports
export default List;

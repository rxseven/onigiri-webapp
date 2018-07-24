// Module dependencies
import { isEmpty as checkEmpty, map } from 'lodash';
import React from 'react';

import { Button } from 'components/common/Buttons';
import { Hero, HeroHeader, HeroBody } from 'components/common/Hero';
import { ListGroup } from 'components/common/ListGroup';
import { Scroller, ScrollerContent, ScrollerEmpty } from 'components/common/Scroller';
import Text from 'components/common/Text';

// Constants
import PATHS from 'constants/router/paths';
import CSS from 'constants/string/css';

// Peer dependencies
import TYPES from '../../constants/types';
import Item from '../Item';
import styles from './styles.scss';

// Render message
const renderMessage = () => (
  <Hero>
    <HeroHeader>Get started!</HeroHeader>
    <HeroBody>
      <Text lead>Create custom surveys and questionnaires at no extra cost.</Text>
      <Button button="primary" link={PATHS.surveys.new} type="link">
        Start now
      </Button>
    </HeroBody>
  </Hero>
);

// Render empty list
const renderEmpty = mode => (
  <Hero>
    <HeroBody>No {mode} items</HeroBody>
  </Hero>
);

// Component
const List = ({ actions, state }) => {
  // Variables
  const {
    asynchronous, data, meta, mode, pagination, query
  } = state;
  const isActive = TYPES.mode.active;
  const isEmpty = checkEmpty(data);
  const isError = asynchronous.get.error;
  const isLoaded = asynchronous.get.loaded;

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
        <ScrollerEmpty>
          {isLoaded && isEmpty && mode === isActive && renderMessage()}
          {isLoaded && isEmpty && mode !== isActive && renderEmpty(mode)}
        </ScrollerEmpty>
      </Scroller>
    </div>
  );
};

// Module exports
export default List;

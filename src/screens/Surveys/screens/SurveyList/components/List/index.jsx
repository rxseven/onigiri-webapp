// @flow
// Module dependencies
import { isEmpty as checkEmpty, map } from 'lodash';
import * as React from 'react';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import { Hero, HeroHeader, HeroBody } from 'components/common/Hero';
import { ListGroup } from 'components/common/ListGroup';
import { Scroller, ScrollerContent, ScrollerEmpty } from 'components/common/Scroller';
import Text from 'components/common/Text';

// Constants
import PATHS from 'constants/router/paths';
import CSS from 'constants/string/css';

// Types
import type { Empty, List as Data, Meta } from '../../data/surveys/types';
import type { Async as Asynchronous, Mode, Pagination, QueryList as Query } from '../../types';

// Companion files
import TYPES from '../../constants/types';
import Item from '../Item';
import './styles.scss';

// Static types
type Props = {
  actions: Object,
  state: {
    data: Data | Empty,
    asynchronous: Asynchronous,
    meta: Meta,
    mode: Mode,
    pagination: Pagination,
    query: Query
  }
};

type Return = React.Element<'div'>;

// Render message
const renderMessage = (): React.Element<typeof Hero> => (
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
const renderEmpty = (mode: string): React.Element<typeof Hero> => (
  <Hero>
    <HeroBody>No {mode} items</HeroBody>
  </Hero>
);

// Component
const List = ({ actions, state }: Props): Return => {
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
    <div styleName="wrapper">
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

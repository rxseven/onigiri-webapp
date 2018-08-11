// @flow
// Module dependencies
import { isEmpty } from 'lodash';
import * as React from 'react';

// Helper functions
import timestampHelper from 'helpers/timestamp';

// Components and HOCs
import { ListGroupItem, ListGroupHL, ListGroupText } from 'components/common/ListGroup';
import Icon from 'components/common/Icon';
import Text from 'components/common/Text';

// Constants
import PATHS from 'constants/router/paths';

// Companion files
import './styles.scss';

// Types
import type { Item as Data } from '../../data/surveys/types';
import type { Mode } from '../../types';

// Static types
type Props = {
  state: {
    data: Data,
    mode: Mode
  }
};

type Return = React.Element<typeof ListGroupItem>;

// Component
const Item = (props: Props): Return => {
  // Variables
  const {
    state: {
      data: {
        _id: id, dateSent, locked, no, subject, title, yes
      }, mode
    }
  } = props;
  const isResponse = !!no || !!yes;

  // View
  return (
    <ListGroupItem
      link={{
        pathname: `${PATHS.surveys.base}/${id}`,
        state: { fromList: true, mode }
      }}
    >
      <div styleName="content">
        <ListGroupHL>{title}</ListGroupHL>
        <ListGroupText>{subject}</ListGroupText>
      </div>
      <div styleName="status">
        <If condition={isResponse}>
          <Icon name="bar-chart" title="Statistics" />
          <span styleName="text">
            <span styleName="yes">Y{yes}</span> <span styleName="no">N{no}</span>
          </span>
        </If>
        <If condition={!isEmpty(locked)}>
          <Icon disabled name="lock-locked" title="Locked" />
        </If>
      </div>
      <div styleName="footer">
        <Text small>Sent on {timestampHelper.date(dateSent)}</Text>
      </div>
    </ListGroupItem>
  );
};

// Module exports
export default Item;

// Module dependencies
import React from 'react';

import {
  ListGroupItem,
  ListGroupHL,
  ListGroupText
} from '../../../../../../components/shared/base/ListGroup';
import Icon from '../../../../../../components/shared/base/Icon';
import Text from '../../../../../../components/shared/base/Text';
import Render from '../../../../../../components/shared/helpers/Render';

import timestampHelper from '../../../../../../helpers/timestamp';

// Constants
import PATHS from '../../../../../../constants/router/paths';

// Peer dependencies
import styles from './styles.scss';

// Component
const Item = ({
  state: {
    data: {
      dateSent, _id: id, locked, no, subject, title, yes
    }, mode
  }
}) => {
  // Variables
  const isResponse = no || yes;

  // View
  return (
    <ListGroupItem
      link={{
        pathname: `${PATHS.surveys.base}/${id}`,
        state: { fromList: true, mode }
      }}
    >
      <div className={styles.content}>
        <ListGroupHL>{title}</ListGroupHL>
        <ListGroupText>{subject}</ListGroupText>
      </div>
      <div className={styles.status}>
        <Render condition={isResponse}>
          <Icon name="bar-chart" title="Statistics" />
          <span className={styles.text}>
            <span className={styles.yes}>Y{yes}</span> <span className={styles.no}>N{no}</span>
          </span>
        </Render>
        <Render condition={locked}>
          <Icon disabled name="lock-locked" title="Locked" />
        </Render>
      </div>
      <div className={styles.footer}>
        <Text small>Sent on {timestampHelper.date(dateSent)}</Text>
      </div>
    </ListGroupItem>
  );
};

// Module exports
export default Item;

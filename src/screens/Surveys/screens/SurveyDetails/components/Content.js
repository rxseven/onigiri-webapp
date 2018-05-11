// Module dependencies
import cx from 'classnames';
import React, { Fragment } from 'react';

import Alert from '../../../../../components/shared/base/Alert';
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle
} from '../../../../../components/shared/base/Card';
import ExLink from '../../../../../components/shared/base/ExLink';
import Icon from '../../../../../components/shared/base/Icon';
import { List, ListItem, ListContent, ListLabel } from '../../../../../components/shared/base/List';
import Text from '../../../../../components/shared/base/Text';

import timestampHelper from '../../../../../helpers/timestamp';

// Constants
import CSS from '../../../../../constants/string/css';

// Peer dependencies
import Chart from './Chart';
import Recipients from './Recipients';

// Component
const Content = ({ actions, state: { data, ui: { asynchronous } } }) => {
  // Variables
  const { archived, completed } = data;
  const isActive = !archived && !completed;
  const isClosed = archived && completed;

  // View
  return (
    <Fragment>
      <Card background={data.completed ? 'light' : 'default'} end>
        <CardHeader>{data.title}</CardHeader>
        <CardBody>
          <Chart data={data} />
          <CardSubtitle options={CSS.margin.MB04}>Statistics</CardSubtitle>
          <List>
            <ListItem inline>
              <ListLabel>Yes</ListLabel>
              <ListContent>{data.yes}</ListContent>
            </ListItem>
            <ListItem inline>
              <ListLabel>No</ListLabel>
              <ListContent>{data.no}</ListContent>
            </ListItem>
          </List>

          <If condition={data.lastResponded}>
            <hr />
            <CardSubtitle options={CSS.margin.MB04}>Response</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Total</ListLabel>
                <ListContent>{data.yes + data.no}</ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Recent responded</ListLabel>
                <ListContent>
                  {timestampHelper.date(data.lastResponded)},{' '}
                  {timestampHelper.time(data.lastResponded)}
                </ListContent>
              </ListItem>
            </List>
          </If>

          <hr />

          <CardSubtitle options={CSS.margin.MB04}>Email</CardSubtitle>
          <List>
            <ListItem>
              <ListLabel>Sender</ListLabel>
              <ListContent>{data.sender}</ListContent>
            </ListItem>
            {data.from && (
              <ListItem>
                <ListLabel>From</ListLabel>
                <ListContent>
                  <Text>{data.from}</Text>
                </ListContent>
              </ListItem>
            )}
            <ListItem>
              <ListLabel>Subject line</ListLabel>
              <ListContent>{data.subject}</ListContent>
            </ListItem>
            <ListItem>
              <ListLabel>Body</ListLabel>
              <ListContent>{data.body}</ListContent>
            </ListItem>
            {data.landing && (
              <ListItem>
                <ListLabel>Landing page</ListLabel>
                <ListContent>
                  <ExLink icon to={data.landing}>
                    {data.landing}
                  </ExLink>
                </ListContent>
              </ListItem>
            )}
          </List>

          <hr />

          <CardSubtitle options={CSS.margin.MB04}>Meta</CardSubtitle>
          <List>
            <ListItem>
              <ListLabel>Status</ListLabel>
              <ListContent>
                <Text>
                  {isActive && 'active'}
                  {archived && 'archived'}
                  {isClosed && ', '}
                  {completed && 'completed'}
                </Text>
              </ListContent>
            </ListItem>
            <ListItem>
              <ListLabel>Creation date</ListLabel>
              <ListContent>
                {timestampHelper.date(data.dateSent)}, {timestampHelper.time(data.dateSent)}
              </ListContent>
            </ListItem>
          </List>

          <Recipients
            actions={actions}
            state={{
              data: data.recipients,
              ui: { asynchronous: asynchronous.get.recipients }
            }}
          />
        </CardBody>
      </Card>

      <If condition={data.locked}>
        <Alert options={cx(CSS.margin.MT03, CSS.margin.MB00, 'text-small')} type="warning">
          <Icon name="lock-locked" title="Locked" /> This sample survey is locked from being
          deleted.
        </Alert>
      </If>
    </Fragment>
  );
};

// Module exports
export default Content;

// @flow
// Module dependencies
import cx from 'classnames';
import { isEmpty } from 'lodash';
import * as React from 'react';

// Helper functions
import timestampHelper from 'helpers/timestamp';

// Components and HOCs
import Alert from 'components/common/Alert';
import { Card, CardBody, CardHeader, CardSubtitle } from 'components/common/Card';
import ExLink from 'components/common/ExLink';
import Icon from 'components/common/Icon';
import { List, ListItem, ListContent, ListLabel } from 'components/common/List';
import Text from 'components/common/Text';
import withFetch from 'HOCs/composite/withFetch';

// Constants
import CSS from 'constants/string/css';

// Types
import type { Survey } from '../../data/survey/types';
import type { Async as Asynchronous } from '../../types';

// Companion files
import Chart from '../Chart';
import Recipients from '../Recipients';

// Static types
type Props = {
  actions: Object,
  state: {
    data: Survey,
    ui: {
      asynchronous: Asynchronous
    }
  }
};

type Return = React.Node;

// Component
export const Content = ({ actions, state: { data, ui: { asynchronous } } }: Props): Return => {
  // Variables
  const {
    archived, completed, no, yes
  } = data;
  const isActive = !archived && !completed;
  const isClosed = archived && completed;

  // View
  return (
    <React.Fragment>
      <Card background={data.completed ? 'light' : 'default'} end>
        <CardHeader>{data.title}</CardHeader>
        <CardBody>
          <Chart data={{ no, yes }} />
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

          <If condition={!isEmpty(data.lastResponded)}>
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
                  {/* flow-disable-next-line */}
                  {timestampHelper.date(data.lastResponded)}, {/* flow-disable-next-line */}
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
            <ListItem>
              <ListLabel>From</ListLabel>
              <ListContent>
                <Text>{data.from}</Text>
              </ListContent>
            </ListItem>
            <ListItem>
              <ListLabel>Subject line</ListLabel>
              <ListContent>{data.subject}</ListContent>
            </ListItem>
            <ListItem>
              <ListLabel>Body</ListLabel>
              <ListContent>{data.body}</ListContent>
            </ListItem>
            <If condition={!isEmpty(data.landing)}>
              <ListItem>
                <ListLabel>Landing page</ListLabel>
                <ListContent>
                  {/* flow-disable-next-line */}
                  <ExLink icon to={data.landing}>
                    {data.landing}
                  </ExLink>
                </ListContent>
              </ListItem>
            </If>
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

      <If condition={!isEmpty(data.locked)}>
        <Alert options={cx(CSS.margin.MT03, CSS.margin.MB00, 'text-small')} type="warning">
          <Icon name="lock-locked" title="Locked" /> This sample survey is locked from being
          deleted.
        </Alert>
      </If>
    </React.Fragment>
  );
};

// Enhance a component with fetch functionality
const Enhanced = withFetch(Content);

// Module exports
export default Enhanced;

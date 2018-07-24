// Module dependencies
import cx from 'classnames';
import React from 'react';

import { Button } from '../Buttons';
import { Card, CardBody, CardHeader, CardText } from '../Card';
import Spinner from '../Spinner';
import Layout from '../Layout';
import windowHelper from '../../../helpers/window';

// Constants
import CSS from '../../../constants/string/css';

// Peer dependencies
import styles from './styles.scss';

// Wrapper
const Wrapper = ({ children }) => (
  <Layout size={cx(CSS.grid.col.MD08, CSS.grid.col.LG06)}>{children}</Layout>
);

// Component
const Loader = (props) => {
  // When the loader has errored
  if (props.error) {
    return (
      <Wrapper>
        <Card>
          <CardHeader>Sorry</CardHeader>
          <CardBody>
            <CardText>Something went wrong, please reload a webpage.</CardText>
            <Button button="primary" handler={() => windowHelper.reload()}>
              Reload
            </Button>
          </CardBody>
        </Card>
      </Wrapper>
    );
  }

  // When the loader has taken longer than the timeout
  if (props.timedOut) {
    return (
      <Wrapper>
        <Spinner loading />
        <div className={styles.timeout}>
          <p>Please take a moment</p>
        </div>
      </Wrapper>
    );
  }

  // When the loader has taken longer than the delay
  if (props.pastDelay) {
    return <Spinner loading />;
  }

  // When the loader has just started
  return null;
};

// Module exports
export default Loader;

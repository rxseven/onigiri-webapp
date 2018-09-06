// Module dependencies
import React from 'react';
import { compose } from 'recompose';

import { ButtonSet } from 'components/common/Buttons';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

import withMaybe from 'HOCs/common/withMaybe';
import withTogether from 'HOCs/common/withTogether';

// Configuration
const alert = true;
const wrapper = ButtonSet;

// Conditional functions
const isError = props => props.status.error;
const isLoading = props => props.status.loading;
const isFetched = props => props.status.fetched;

// With action
const withCTA = compose(
  withTogether(isError, ({ status }) => <Error alert={status.error} />, wrapper, alert),
  withTogether(isLoading, () => <Spinner />, wrapper),
  withMaybe(isFetched)
);

// Module exports
export default withCTA;

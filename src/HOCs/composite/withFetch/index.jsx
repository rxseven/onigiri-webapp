// Module dependencies
import React from 'react';
import { compose } from 'recompose';

import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';

import withEither from 'HOCs/common/withEither';
import withMaybe from 'HOCs/common/withMaybe';

// Conditional functions
const isError = props => props.status.error;
const isLoading = props => props.status.loading;
const isNull = props => !props.status.data && !props.status.error;

// With fetch
const withFetch = compose(
  withEither(isError, ({ status: { error } }) => <Error alert={error} />),
  withEither(isLoading, () => <Spinner loading />),
  withMaybe(isNull)
);

// Module exports
export default withFetch;

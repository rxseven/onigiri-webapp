// Module dependencies
import { map } from 'ramda';
import { all, fork } from 'redux-saga/effects';

// Sagas
import data from 'data/sagas';
import screens from 'screens/sagas';

// Combine Sagas
const sagas = {
  ...data,
  ...screens
};

// Root Saga
function* root() {
  yield all(map(fork, sagas));
}

// Module exports
export default root;

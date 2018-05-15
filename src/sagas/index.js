// Module dependencies
import { map } from 'ramda';
import { all, fork } from 'redux-saga/effects';

// Combine Sagas
const sagas = {};

// Root Saga
function* root() {
  yield all(map(fork, sagas));
}

// Module exports
export default root;

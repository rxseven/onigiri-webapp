// Module dependencies
import { map } from 'ramda';
import { all, fork } from 'redux-saga/effects';

// Sagas
import data from '../data/sagas';

// Combine Sagas
const sagas = {
  ...data
};

// Root Saga
function* root() {
  yield all(map(fork, sagas));
}

// Module exports
export default root;

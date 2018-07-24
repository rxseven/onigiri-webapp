// Module dependencies
import { fromJS } from 'immutable';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Helper functions and services
import { getError } from 'helpers/state';
import paymentsService from 'services/payments';
import * as usersService from 'services/users';

// Action types and action creators
import * as actions from './actions';

// Checkout
function* checkout({ callback, payload }) {
  try {
    // Forward Stripe Checkout token to the API
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(paymentsService.checkout, payload.token);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data);

    // Inform reducers that the request finished successfully
    yield put(actions.checkoutSuccess(immutableData));

    // Execute a callback
    callback();
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.checkoutFailure(immutableData));
  }
}

// Get credits
function* getCredits() {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getCredits);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data);

    // Inform reducers that the request finished successfully
    yield put(actions.getCreditsSuccess(immutableData));
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.getCreditsFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  yield all([takeLatest(actions.CHECKOUT, checkout), takeLatest(actions.CREDITS_GET, getCredits)]);
}

// Module exports
export default watcher;

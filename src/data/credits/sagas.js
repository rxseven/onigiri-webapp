// Module dependencies
import { fromJS } from 'immutable';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { getError } from 'helpers/state';
import { callFunction } from 'helpers/utilities';

// Services
import paymentsService from 'data/features/payments/services';
import * as usersService from 'services/users';

// Action creators and action types
import * as actions from './actions';
import * as types from './types';

// Checkout
function* checkout({ callback, payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.checkoutRequest());

    // Forward Stripe Checkout token to the API
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(paymentsService.checkout, payload.token);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, data);

    // Inform reducers that the request finished successfully
    yield put(actions.checkoutSuccess(immutableData));

    // Execute a callback
    yield call(callFunction, callback);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.checkoutFailure(immutableData));
  }
}

// Get user credits
function* getCredits() {
  try {
    // Inform reducers that the request started
    yield put(actions.getCreditsRequest());

    // Get user credits
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getCredits);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, data);

    // Inform reducers that the request finished successfully
    yield put(actions.getCreditsSuccess(immutableData));
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.getCreditsFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  yield all([takeLatest(types.CHECKOUT, checkout), takeLatest(types.CREDITS_GET, getCredits)]);
}

// Module exports
export default watcher;

// Module dependencies
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Action types and action creators
import * as actions from './actions';

// Services
import paymentsService from '../../services/payments';
import * as usersService from '../../services/users';

// Actions watcher
function* watcher() {
  yield all([takeLatest(actions.CHECKOUT, checkout), takeLatest(actions.CREDITS_GET, getCredits)]);
}

// Checkout
function* checkout({ callback, payload }) {
  try {
    // Forward Stripe Checkout token to the API
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(paymentsService.checkout, payload.token);

    // Inform reducers that the request finished successfully
    yield put(actions.checkoutSuccess(data));

    // Execute a callback
    callback();
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.checkoutFailure(error));
  }
}

// Get credits
function* getCredits() {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getCredits);

    // Inform reducers that the request finished successfully
    yield put(actions.getCreditsSuccess(data));
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.getCreditsFailure(error));
  }
}

// Module exports
export default watcher;

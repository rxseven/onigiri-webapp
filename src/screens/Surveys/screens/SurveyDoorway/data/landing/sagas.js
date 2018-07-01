// Module dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// Action types and action creators
import * as actions from './actions';

// Services
import * as surveysService from '../../../../../../services/surveys';

// Get landing page URI
function* getLanding({ payload }) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getLanding, payload.id);

    // Inform reducers that the request finished successfully
    yield put(actions.getLandingSuccess(data));
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.getLandingFailure(error));
  }
}

// Actions watcher
function* watcher() {
  yield takeLatest(actions.LANDING_GET, getLanding);
}

// Module exports
export default watcher;

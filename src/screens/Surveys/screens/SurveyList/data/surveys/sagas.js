// Module dependencies
import { fromJS } from 'immutable';
import { mapKeys } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { fromJSOrdered, getError } from 'helpers/state';
import { callFunction } from 'helpers/utilities';

// Services
import * as surveysService from '../../../../services';

// Action creators and action types
import * as actions from './actions';
import * as types from './types';

// Cancel getting surveys
function* cancelSurveys() {
  try {
    // Inform reducers that the request started
    yield put(actions.cancelSurveysRequest());

    // Cancel a network request
    yield call(surveysService.cancelSurveys);

    // Inform reducers that the request finished successfully
    yield put(actions.cancelSurveysSuccess());
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.cancelSurveysFailure());
  }
}

// Get surveys
function* getSurveys({ callback, payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.getSurveysRequest());

    // Get surveys
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getSurveys, payload.query);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, {
      data: fromJSOrdered(mapKeys(data.data, '_id')),
      meta: fromJS(data.meta)
    });

    // Inform reducers that the request finished successfully
    yield put(actions.getSurveysSuccess(immutableData));

    // Execute a callback
    yield call(callFunction, callback);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.getSurveysFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  yield all([
    takeLatest(types.SURVEYS_CANCEL, cancelSurveys),
    takeLatest(types.SURVEYS_GET, getSurveys)
  ]);
}

// Module exports
export default watcher;

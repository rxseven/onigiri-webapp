// Module dependencies
import { fromJS } from 'immutable';
import { mapKeys } from 'lodash';
import { testSaga } from 'redux-saga-test-plan';

// Helper functions
import { fromJSOrdered, getError } from 'helpers/state';
import { callFunction } from 'helpers/utilities';
import { genData, genError } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Services
import * as surveysService from '../../../../../services';

// Sagas
import { cancelSurveys, getSurveys } from '../sagas';

// Action creators
import * as actions from '../actions';

// Source data
const source = {
  request: mock.data.payload.surveys.list.query.list.request,
  response: mock.data.payload.surveys.list.query.list.response
};

// Unit tests
describe('screens/surveys/screens/list/data/surveys/sagas', () => {
  describe('Cancel getting surveys', () => {
    describe('cancelSurveys', () => {
      it('should cancel a task of getting surveys and update the application state correctly', () => {
        // Assertions
        testSaga(cancelSurveys)
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.cancelSurveysRequest())
          .next()

          // Cancel a network request
          .call(surveysService.cancelSurveys)
          .next()

          // Inform reducers that the request finished successfully
          .put(actions.cancelSurveysSuccess())
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Assertions
        testSaga(cancelSurveys)
          // Start an assertion
          .next()

          // Create a fake error
          .throw()

          // Inform reducers that the request failed
          .put(actions.cancelSurveysFailure());
      });
    });
  });

  describe('Get surveys', () => {
    describe('getSurveys', () => {
      it('should get surveys and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = { values: source.request };

        const response = {
          data: source.response
        };

        const data = genData(response.data);

        // Assertions
        testSaga(getSurveys, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.getSurveysRequest())
          .next()

          // Get surveys and send emails asynchronously
          .call(surveysService.getSurveys, payload.query)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, {
            data: fromJSOrdered(mapKeys(data.plain.data, '_id')),
            meta: fromJS(data.plain.meta)
          })
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.getSurveysSuccess(data.immutable))
          .next()

          // Execute a callback
          .call(callFunction, callback)
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = undefined;

        const response = {
          response: {
            data: 'Unauthorized',
            status: 401
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(getSurveys, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.getSurveysFailure(data.immutable));
      });
    });
  });
});

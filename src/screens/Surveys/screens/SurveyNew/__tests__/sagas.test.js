// Module dependencies
import { fromJS } from 'immutable';
import { testSaga } from 'redux-saga-test-plan';

// Helper functions
import { getError } from 'helpers/state';
import { callFunction } from 'helpers/utilities';
import { genError } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Dependencies
import { updateCredits } from 'data/credits/actions';

// Services
import * as surveysService from '../../../services';

// Sagas
import { createSurvey } from '../sagas';

// Action creators
import * as actions from '../actions';

// Source data
const source = {
  request: mock.data.payload.surveys.new.request,
  response: mock.data.payload.surveys.new.response
};

// Unit tests
describe('screens/surveys/screens/new/sagas', () => {
  describe('Create survey', () => {
    describe('createSurvey', () => {
      it('should create survey and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = { values: source.request };

        const response = {
          data: source.response
        };

        const data = {
          immutable: fromJS(response.data.credits),
          plain: response.data
        };

        // Assertions
        testSaga(createSurvey, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.createSurveyRequest())
          .next()

          // Create survey and send emails asynchronously
          .call(surveysService.createSurvey, payload.values)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain.credits)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.createSurveySuccess())
          .next()
          .put(updateCredits(data.immutable))
          .next()

          // Execute a callback
          .call(callFunction, callback, data.plain.id)
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
        testSaga(createSurvey, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.createSurveyFailure(data.immutable));
      });
    });
  });
});

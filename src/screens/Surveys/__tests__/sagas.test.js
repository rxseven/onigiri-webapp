// Module dependencies
import { fromJS } from 'immutable';
import { testSaga } from 'redux-saga-test-plan';

// Helper functions
import { getError } from 'helpers/state';
import { genData, genError } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Services
import * as surveysService from '../services';

// Sagas
import { deleteSurvey } from '../sagas';

// Action creators
import * as actions from '../actions';

// Source data
const source = {
  request: {
    survey: {
      delete: mock.data.payload.surveys.item.details.delete.request
    }
  },
  response: {
    survey: {
      delete: mock.data.payload.surveys.item.details.delete.response
    }
  }
};

// Unit tests
describe('screens/surveys/sagas', () => {
  describe('Delete survey', () => {
    describe('deleteSurvey', () => {
      it('should delete a survey and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = source.request.survey.delete;
        const response = {
          data: source.response.survey.delete
        };
        const data = genData(response.data);

        // Assertions
        testSaga(deleteSurvey, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.deleteSurveyRequest())
          .next()

          // Delete survey
          .call(surveysService.deleteSurvey, payload.id)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain.id)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.deleteSurveySuccess(data.immutable))
          .next()

          // Execute a callback
          .call(callback, data.plain.id)
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
        testSaga(deleteSurvey, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.deleteSurveyFailure(data.immutable));
      });
    });
  });
});

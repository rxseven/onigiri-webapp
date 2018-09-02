// Module dependencies
import { fromJS } from 'immutable';
import { testSaga } from 'redux-saga-test-plan';

// Helper functions
import { fromJSOrdered, getError, normalizeList } from 'helpers/state';
import { callFunction } from 'helpers/utilities';
import { genData, genError } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Services
import * as surveysService from '../../../../../services';

// Sagas
import { getRecipients, getSurvey, updateSurvey } from '../sagas';

// Action creators
import * as actions from '../actions';

// Source data
const source = {
  request: {
    recipients: mock.data.payload.surveys.item.recipients.request.id,
    survey: {
      details: mock.data.payload.surveys.item.details.data.request.id,
      update: mock.data.payload.surveys.item.details.update.request
    }
  },
  response: {
    recipients: mock.data.payload.surveys.item.recipients.response.raw,
    survey: {
      details: mock.data.payload.surveys.item.details.data.response
    }
  }
};

// Unit tests
describe('screens/surveys/screens/details/data/survey/sagas', () => {
  describe('Get recipients', () => {
    describe('getRecipients', () => {
      it('should get recipients and update the application state correctly', () => {
        // Mock data
        const payload = source.request.recipients;

        const response = {
          data: {
            recipients: source.response.recipients,
            _id: '5ae46e3c40ea63072f8a1c41'
          }
        };

        const data = genData(response.data.recipients);

        // Assertions
        testSaga(getRecipients, { payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.getRecipientsRequest())
          .next()

          // Get recipients
          .call(surveysService.getRecipients, payload.id)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJSOrdered, normalizeList({ recipients: data.plain }, 'recipients'))
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.getRecipientsSuccess(data.immutable))
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
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
        testSaga(getRecipients, { payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.getRecipientsFailure(data.immutable));
      });
    });
  });

  describe('Get survey', () => {
    describe('getSurvey', () => {
      it('should get a survey and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = source.request.survey.details;

        const response = {
          data: source.response.survey.details
        };

        const data = genData(response.data);

        // Assertions
        testSaga(getSurvey, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.getSurveyRequest())
          .next()

          // Get survey
          .call(surveysService.getSurvey, payload.id)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.getSurveySuccess(data.immutable))
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
        testSaga(getSurvey, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.getSurveyFailure(data.immutable));
      });
    });
  });

  describe('Update survey', () => {
    describe('updateSurvey', () => {
      it('should update survey and update the application state correctly', () => {
        // Mock data
        const payload = source.request.survey.update;

        const response = {
          data: source.response.survey.update
        };

        const data = genData(response.data);

        // Assertions
        testSaga(updateSurvey, { payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.updateSurveyRequest())
          .next()

          // Update survey
          .call(surveysService.updateSurvey, payload.id, payload.values)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.updateSurveySuccess(data.immutable))
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock data
        const payload = {
          id: undefined,
          values: undefined
        };

        const response = {
          response: {
            data: 'Unauthorized',
            status: 401
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(updateSurvey, { payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.updateSurveyFailure(data.immutable));
      });
    });
  });
});

// Module dependencies
import { fromJS } from 'immutable';
import { testSaga } from 'redux-saga-test-plan';

// Helper functions
import { getError } from 'helpers/state';
import { genData, genError } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Services
import * as surveysService from '../../../../../services';

// Sagas
import { getLanding } from '../sagas';

// Action creators
import * as actions from '../actions';

// Source data
const source = {
  request: mock.data.payload.surveys.item.landing.request,
  response: mock.data.payload.surveys.item.landing.response
};

// Unit tests
describe('screens/surveys/screens/doorway/data/landing/sagas', () => {
  describe('Get a landing page URI', () => {
    describe('getLanding', () => {
      it('should get a landing page URI and update the application state correctly', () => {
        // Mock data
        const payload = source.request;

        const response = {
          data: source.response
        };

        const data = genData(response.data);

        // Assertions
        testSaga(getLanding, { payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.getLandingRequest())
          .next()

          // Get a landing page URI
          .call(surveysService.getLanding, payload.id)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.getLandingSuccess(data.immutable))
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
        testSaga(getLanding, { payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.getLandingFailure(data.immutable));
      });
    });
  });
});

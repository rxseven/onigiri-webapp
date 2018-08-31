// Module dependencies
import { fromJS } from 'immutable';
import { testSaga } from 'redux-saga-test-plan';

// Helper functions
import { getError } from 'helpers/state';
import { genData, genError } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Services
import * as usersService from 'services/users';

// Sagas
import { getProfile } from '../sagas';

// Action creators
import * as actions from '../actions';

// Source data
const source = {
  response: mock.data.payload.users.profile.response
};

// Unit tests
describe('screens/users/profile/data/profile/sagas', () => {
  describe('Get user profile', () => {
    describe('getProfile', () => {
      it('should get user profile and update the application state correctly', () => {
        // Mock data
        const response = { data: source.response };
        const data = genData(response.data);

        // Assertions
        testSaga(getProfile)
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.getProfileRequest())
          .next()

          // Get user profile
          .call(usersService.getProfile)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.getProfileSuccess(data.immutable))
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock data
        const response = {
          response: {
            data: 'Unauthorized',
            status: 401
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(getProfile)
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.getProfileFailure(data.immutable));
      });
    });
  });
});

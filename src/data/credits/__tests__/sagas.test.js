// Module dependencies
import { fromJS } from 'immutable';
import { testSaga } from 'redux-saga-test-plan';

// Helper functions
import { getError } from 'helpers/state';
import { callFunction } from 'helpers/utilities';
import { genData, genError } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Services
import paymentsService from 'data/features/payments/services';
import * as usersService from 'services/users';

// Sagas
import { checkout, getCredits } from '../sagas';

// Action creators
import * as actions from '../actions';

// Source data
const source = {
  payload: {
    credits: {
      request: {
        token: mock.data.payload.users.credits.get.request
      },
      response: mock.data.payload.users.credits.get.response
    }
  }
};

// Unit tests
describe('data/credits/sagas', () => {
  describe('Checkout', () => {
    describe('checkout()', () => {
      it('should perform a checkout and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = source.payload.credits.request;

        const response = {
          data: source.payload.credits.response
        };

        const data = genData(response.data);

        // Assertions
        testSaga(checkout, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.checkoutRequest())
          .next()

          // Forward Stripe Checkout token to the API
          .call(paymentsService.checkout, payload.token)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.checkoutSuccess(data.immutable))
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
            data: {
              error: { message: 'Something went wrong!' }
            },
            status: 422
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(checkout, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.checkoutFailure(data.immutable))
          .next();
      });
    });
  });

  describe('Get Credits', () => {
    describe('getCredits()', () => {
      it('should get user credits and update the application state correctly', () => {
        // Mock data
        const response = {
          data: source.payload.credits.response
        };

        const data = genData(response.data);

        // Assertions
        testSaga(getCredits)
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.getCreditsRequest())
          .next()

          // Get user credits
          .call(usersService.getCredits)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.getCreditsSuccess(data.immutable))
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock data
        const response = {
          response: {
            data: {
              error: { message: 'Something went wrong!' }
            },
            status: 422
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(getCredits)
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.getCreditsFailure(data.immutable))
          .next();
      });
    });
  });
});

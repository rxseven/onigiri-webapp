// Mock data
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('data/credits/actions', () => {
  describe('Checkout', () => {
    describe('checkout', () => {
      it('should dispatch CHECKOUT action, payload, and callback function', () => {
        // Mock data
        const { token } = mock.data.payload.users.payments.checkout.request;
        const { callback } = mock.functions;
        const result = {
          callback,
          payload: { token },
          type: types.CHECKOUT
        };

        // Assertions
        expect(actions.checkout(token, callback)).toEqual(result);
      });
    });

    describe('checkoutFailure', () => {
      it('should dispatch CHECKOUT_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.CHECKOUT_FAILURE
        };

        // Assertions
        expect(actions.checkoutFailure(error)).toEqual(result);
      });
    });

    describe('checkoutRequest', () => {
      it('should dispatch CHECKOUT_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.CHECKOUT_REQUEST
        };

        // Assertions
        expect(actions.checkoutRequest()).toEqual(result);
      });
    });

    describe('checkoutSuccess', () => {
      it('should dispatch CHECKOUT_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.users.payments.checkout.response;
        const result = {
          payload: data,
          type: types.CHECKOUT_SUCCESS
        };

        // Assertions
        expect(actions.checkoutSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Get credits', () => {
    describe('getCredits', () => {
      it('should dispatch CREDITS_GET action', () => {
        // Mock data
        const result = {
          type: types.CREDITS_GET
        };

        // Assertions
        expect(actions.getCredits()).toEqual(result);
      });
    });

    describe('getCreditsFailure', () => {
      it('should dispatch CREDITS_GET_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.CREDITS_GET_FAILURE
        };

        // Assertions
        expect(actions.getCreditsFailure(error)).toEqual(result);
      });
    });

    describe('getCreditsRequest', () => {
      it('should dispatch CREDITS_GET_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.CREDITS_GET_REQUEST
        };

        // Assertions
        expect(actions.getCreditsRequest()).toEqual(result);
      });
    });

    describe('getCreditsSuccess', () => {
      it('should dispatch CREDITS_GET_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.users.credits.get.response;
        const result = {
          payload: data,
          type: types.CREDITS_GET_SUCCESS
        };

        // Assertions
        expect(actions.getCreditsSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Update credits', () => {
    describe('updateCredits', () => {
      it('should dispatch CREDITS_UPDATE action and payload', () => {
        // Mock data
        const { credits } = mock.data.payload.users.credits.update.response;
        const data = credits;
        const result = {
          payload: data,
          type: types.CREDITS_UPDATE
        };

        // Assertions
        expect(actions.updateCredits(data)).toEqual(result);
      });
    });
  });
});

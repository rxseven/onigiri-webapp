// Mock data
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('screens/surveys/doorway/data/landing/actions', () => {
  describe('Get landing page URI', () => {
    describe('getLanding', () => {
      it('should dispatch LANDING_GET action and payload', () => {
        // Mock data
        const { id } = mock.data.payload.surveys.item.landing.request;
        const result = {
          payload: { id },
          type: types.LANDING_GET
        };

        // Assertions
        expect(actions.getLanding(id)).toEqual(result);
      });
    });

    describe('getLandingFailure', () => {
      it('should dispatch LANDING_GET_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.LANDING_GET_FAILURE
        };

        // Assertions
        expect(actions.getLandingFailure(error)).toEqual(result);
      });
    });

    describe('getLandingRequest', () => {
      it('should dispatch LANDING_GET_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.LANDING_GET_REQUEST
        };

        // Assertions
        expect(actions.getLandingRequest()).toEqual(result);
      });
    });

    describe('getLandingSuccess', () => {
      it('should dispatch LANDING_GET_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.surveys.item.landing.response;
        const result = {
          payload: data,
          type: types.LANDING_GET_SUCCESS
        };

        // Assertions
        expect(actions.getLandingSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Reset state', () => {
    describe('resetData', () => {
      it('should dispatch LANDING_RESET_DATA action', () => {
        // Mock data
        const result = {
          type: types.LANDING_RESET_DATA
        };

        // Assertions
        expect(actions.resetData()).toEqual(result);
      });
    });
  });
});

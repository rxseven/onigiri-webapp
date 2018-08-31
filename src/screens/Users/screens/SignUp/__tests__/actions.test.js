// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('screens/users/signup/actions', () => {
  describe('resetUI', () => {
    it('should dispatch SIGNUP_RESET_UI action', () => {
      // Mock data
      const result = {
        type: types.SIGNUP_RESET_UI
      };

      // Assertions
      expect(actions.resetUI()).toEqual(result);
    });
  });
});

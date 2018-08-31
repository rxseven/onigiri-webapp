// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('data/interfaces/modal/actions', () => {
  describe('openModal', () => {
    it('should dispatch MODAL_OPEN action', () => {
      // Mock data
      const result = {
        type: types.MODAL_OPEN
      };

      // Assertions
      expect(actions.openModal()).toEqual(result);
    });
  });

  describe('closeModal', () => {
    it('should dispatch MODAL_CLOSE action', () => {
      // Mock data
      const result = {
        type: types.MODAL_CLOSE
      };

      // Assertions
      expect(actions.closeModal()).toEqual(result);
    });
  });
});

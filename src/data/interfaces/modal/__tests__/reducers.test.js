// Module dependencies
import { fromJS } from 'immutable';

// Reducers and state
import reducer, { initialState } from '../reducers';

// Action types
import { MODAL_CLOSE, MODAL_OPEN } from '../types';

// Constants
const UNKNOWN = 'UNKNOWN';

// Expected results
const expected = {
  state: {
    modal: {
      active: fromJS({ isOpen: true }),
      inactive: fromJS({ isOpen: false })
    }
  }
};

// Unit tests
describe('data/interfaces/modal/reducers', () => {
  describe('Initial state', () => {
    it('should return the initial state', () => {
      // Mock data
      const result = initialState;

      // Assertions
      expect(reducer()).toEqual(result);
    });

    it('should not affect the current state', () => {
      // Mock data
      const state = undefined;
      const action = { type: UNKNOWN };
      const result = initialState;

      // Assertions
      expect(reducer(state, action)).toEqual(result);
    });
  });

  describe('Update state', () => {
    describe('Visibility', () => {
      it('should handle MODAL_CLOSE action', () => {
        // Mock data
        const state = initialState;
        const action = { type: MODAL_CLOSE };
        const result = expected.state.modal.inactive;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle MODAL_OPEN action', () => {
        // Mock data
        const state = initialState;
        const action = { type: MODAL_OPEN };
        const result = expected.state.modal.active;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });
  });
});

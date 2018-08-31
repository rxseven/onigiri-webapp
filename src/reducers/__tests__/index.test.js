// Module dependencies
import { createStore } from 'redux';

// Helper functions
import { getMock } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Reducer
import reducer from '../index';

// Create store
const store = createStore(reducer);

// Source data
const source = {
  store: store.getState()
};

// Expected results
const expected = {
  state: {
    domain: mock.data.initial
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('reducers', () => {
  describe('combineReducers', () => {
    it('should have "burgerMenu" domain', () => {
      // Mock data
      const { state, result } = genMock(['burgerMenu']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "data" domain', () => {
      // Mock data
      const { state, result } = genMock(['data']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "form" domain', () => {
      // Mock data
      const { state, result } = genMock(['form']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "screens" domain', () => {
      // Mock data
      const { state, result } = genMock(['screens']);

      // Assertions
      expect(state).toEqual(result);
    });
  });
});

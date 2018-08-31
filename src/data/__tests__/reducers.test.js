// Module dependencies
import { createStore } from 'redux';

// Helper functions
import { getMock } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Reducer
import reducer from '../reducers';

// Create store
const store = createStore(reducer);

// Source data
const source = {
  store: store.getState()
};

// Expected results
const expected = {
  state: {
    domain: mock.data.initial.get('data')
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('data/reducers', () => {
  describe('combineReducers', () => {
    it('should have "credits" domain', () => {
      // Mock data
      const { state, result } = genMock(['credits']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "features" domain', () => {
      // Mock data
      const { state, result } = genMock(['features']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "interfaces" domain', () => {
      // Mock data
      const { state, result } = genMock(['interfaces']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "session" domain', () => {
      // Mock data
      const { state, result } = genMock(['session']);

      // Assertions
      expect(state).toEqual(result);
    });
  });
});

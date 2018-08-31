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
    domain: mock.data.initial.getIn(['screens', 'users'])
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/users/reducers', () => {
  describe('combineReducers', () => {
    it('should have "profile" domain', () => {
      // Mock data
      const { state, result } = genMock(['profile']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "signin" domain', () => {
      // Mock data
      const { state, result } = genMock(['signin']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "signup" domain', () => {
      // Mock data
      const { state, result } = genMock(['signup']);

      // Assertions
      expect(state).toEqual(result);
    });
  });
});

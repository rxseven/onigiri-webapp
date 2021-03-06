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
    domain: mock.data.initial.getIn(['screens', 'surveys', 'details', 'data'])
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/surveys/details/data', () => {
  describe('combineReducers', () => {
    it('should have "survey" domain', () => {
      // Mock data
      const { state, result } = genMock(['survey']);

      // Assertions
      expect(state).toEqual(result);
    });
  });
});

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
    domain: mock.data.initial.getIn(['data', 'interfaces'])
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('data/interfaces/reducers', () => {
  describe('combineReducers', () => {
    it('should have "modal" domain', () => {
      // Mock data
      const { state, result } = genMock(['modal']);

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

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
    domain: mock.data.initial.getIn(['screens', 'surveys'])
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/surveys/reducers', () => {
  describe('combineReducers', () => {
    it('should have "details" domain', () => {
      // Mock data
      const { state, result } = genMock(['details']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "doorway" domain', () => {
      // Mock data
      const { state, result } = genMock(['doorway']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "list" domain', () => {
      // Mock data
      const { state, result } = genMock(['list']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "new" domain', () => {
      // Mock data
      const { state, result } = genMock(['new']);

      // Assertions
      expect(state).toEqual(result);
    });
  });
});

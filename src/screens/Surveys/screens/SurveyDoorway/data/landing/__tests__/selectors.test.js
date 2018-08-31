// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getLanding } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.domain.screens.surveys.doorway.data.landing
  },
  store: mock.data.store
};

// Expected results
const expected = {
  state: {
    domain: fromJS(source.state.domain)
  }
};

// Unit tests
describe('screens/surveys/doorway/data/landing/selectors', () => {
  describe('Get landing page URI state', () => {
    describe('getLanding', () => {
      it('should return the correct landing page URI state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain;

        // Assertions
        expect(getLanding(state)).toEqual(result);
      });
    });
  });
});

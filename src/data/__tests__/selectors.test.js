// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getNode } from '../selectors';

// Source data
const source = {
  state: {
    domain: mock.data.domain.data
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
describe('data/selectors', () => {
  describe('Get "data" domain', () => {
    describe('getNode', () => {
      it('should return the correct domain', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain;

        // Assertions
        expect(getNode(state)).toEqual(result);
      });
    });
  });
});

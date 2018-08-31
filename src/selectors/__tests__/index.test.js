// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getDomain } from '../index';

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
describe('selectors', () => {
  describe('Get state domain', () => {
    describe('getDomain', () => {
      it('should return the correct value within the provided collection associated with the provided key', () => {
        // Mock data
        const state = source.store;
        const node = ['data'];
        const result = expected.state.domain;

        // Assertions
        expect(getDomain(state, node)).toEqual(result);
      });
    });
  });
});

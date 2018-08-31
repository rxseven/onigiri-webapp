// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getModal } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.domain.data.interfaces.modal
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
describe('data/interfaces/modal/selectors', () => {
  describe('Get modal state', () => {
    describe('getModal', () => {
      it('should return the correct modal state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain;

        // Assertions
        expect(getModal(state)).toEqual(result);
      });
    });
  });
});

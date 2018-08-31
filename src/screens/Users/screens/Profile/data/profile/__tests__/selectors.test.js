// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getProfile } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.source.users.profile.data
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
describe('screens/users/profile/data/profile/selectors', () => {
  describe('Get user profile state', () => {
    describe('getProfile', () => {
      it('should return the correct session state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain;

        // Assertions
        expect(getProfile(state)).toEqual(result);
      });
    });
  });
});

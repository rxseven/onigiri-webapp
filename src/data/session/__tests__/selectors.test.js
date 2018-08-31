// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getAuth, getSession } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.domain.data.session
  },
  store: mock.data.store
};

// Expected results
const expected = {
  state: {
    domain: {
      authorization: fromJS(source.state.domain.authorization),
      session: fromJS(source.state.domain)
    }
  }
};

// Unit tests
describe('data/session/selectors', () => {
  describe('Get session state', () => {
    describe('getSession', () => {
      it('should return the correct session state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain.session;

        // Assertions
        expect(getSession(state)).toEqual(result);
      });
    });
  });

  describe('Get authorization state', () => {
    describe('getAuth', () => {
      it('should return the correct authorization state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain.authorization;

        // Assertions
        expect(getAuth(state)).toEqual(result);
      });
    });
  });
});

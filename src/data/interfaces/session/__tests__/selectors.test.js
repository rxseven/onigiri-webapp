// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getAsync, getSession } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.domain.data.interfaces.session
  },
  store: mock.data.store
};

// Expected results
const expected = {
  state: {
    domain: {
      asynchronous: fromJS(source.state.domain.asynchronous),
      session: fromJS(source.state.domain)
    }
  }
};

// Unit tests
describe('data/interfaces/session/selectors', () => {
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

  describe('Get asynchronous state', () => {
    describe('getAsync', () => {
      it('should return the correct asynchronous state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain.asynchronous;

        // Assertions
        expect(getAsync(state)).toEqual(result);
      });
    });
  });
});

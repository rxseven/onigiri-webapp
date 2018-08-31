// Functions
import authHelper from '../authentication';

// Source data
const source = {
  token: {
    name: 'token',
    value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
  }
};

// Unit tests
describe('helpers/authentication', () => {
  describe('authorize()', () => {
    it('should create a user session', () => {
      // Mock data
      const result = source.token.value;

      // Run a function
      authHelper.authorize(source.token.value);

      // Assertions
      expect(localStorage.getItem(source.token.name)).toEqual(result);
    });
  });

  describe('reset()', () => {
    it('should reset the current user session', () => {
      // Add fake access token to a localStorage
      localStorage.setItem(source.token.name, source.token.value);

      // Run a function
      authHelper.reset();

      // Assertions
      expect(localStorage.getItem(source.token.name)).toBeNull();
    });
  });

  describe('verify()', () => {
    // Setup and teardown
    beforeEach(() => {
      // Remove token from a localStorage
      localStorage.removeItem('token');
    });

    describe('Authorized', () => {
      it('should NOT reset the current user session', () => {
        // Mock data
        const result = source.token.value;

        // Add fake access token to a localStorage
        localStorage.setItem(source.token.name, source.token.value);

        // Run a function
        authHelper.verify(403);

        // Assertions
        expect(localStorage.getItem(source.token.name)).toEqual(result);
      });
    });

    describe('Unauthorized', () => {
      it('should reset the current user session', () => {
        // Add fake access token to a localStorage
        localStorage.setItem(source.token.name, source.token.value);

        // At this point in time, the token should not have been removed yet
        expect(localStorage.getItem(source.token.name)).toEqual(source.token.value);

        // Run a function
        authHelper.verify(401);

        // Assertions
        expect(localStorage.getItem(source.token.name)).toBeNull();
      });
    });
  });
});

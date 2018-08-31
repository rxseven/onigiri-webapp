// Functions
import tokenHelper from '../token';

// Unit tests
describe('helpers/token', () => {
  // Setup and teardown
  beforeEach(() => {
    // Remove token from a localStorage
    localStorage.removeItem('token');
  });

  describe('get()', () => {
    it('should get "token" from a localStorage', () => {
      // Mock data
      const source = {
        name: 'token',
        value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      };

      const result = source.value;

      // Save token to a localStorage
      localStorage.setItem(source.name, source.value);

      // Assertions
      expect(tokenHelper.get()).toEqual(result);
    });
  });

  describe('remove()', () => {
    it('should remove "token" from a localStorage', () => {
      // Mock data
      const source = {
        name: 'token',
        value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      };

      const result = source.value;

      // Save token to a localStorage
      localStorage.setItem(source.name, source.value);
      expect(localStorage.getItem(source.name)).toEqual(result);

      // Assertions
      expect(tokenHelper.remove()).toBeUndefined();
    });
  });

  describe('save()', () => {
    it('should save "token" to a localStorage', () => {
      // Mock data
      const source = {
        name: 'token',
        value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      };

      const result = source.value;

      // Save token to a localStorage
      tokenHelper.save(source.value);

      // Assertions
      expect(localStorage.getItem(source.name)).toEqual(result);
    });
  });
});

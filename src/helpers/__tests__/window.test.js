// Functions
import windowHelper from '../window';

// Unit tests
describe('helpers/window', () => {
  describe('reload()', () => {
    it('should reload the current document', () => {
      // Mock function
      window.location.reload = jest.fn();

      // Invoke a function
      windowHelper.reload();

      // Assertions
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});

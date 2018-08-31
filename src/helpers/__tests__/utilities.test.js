// Functions
import { callFunction } from '../utilities';

// Unit tests
describe('helpers/utilities', () => {
  describe('callFunction()', () => {
    it('should call "callback" argument as a function if provided', () => {
      // Mock functions
      const callback = jest.fn();

      // Run a function
      callFunction(callback);

      // Assertions
      expect(callback).toBeCalled();
    });

    it('should NOT call "callback" argument as a function if NOT provided', () => {
      // Mock functions
      const callback = jest.fn();

      // Run a function
      callFunction();

      // Assertions
      expect(callback).not.toBeCalled();
    });
  });
});

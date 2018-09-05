// Functions
import { callFunction, isAlert } from '../utilities';

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

  describe('isAlert()', () => {
    it('should return an empty object if enabled', () => {
      // Mock data
      const result = {};

      // Assertions
      expect(isAlert(true)).toEqual(result);
    });

    it('should return an error object if disabled', () => {
      // Mock data
      const result = { error: false };

      // Assertions
      expect(isAlert(false)).toEqual(result);
    });
  });
});

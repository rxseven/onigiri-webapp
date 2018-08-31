// Functions
import asynclHelper from '../asynchronous';

// Unit tests
describe('helpers/asynchronous', () => {
  describe('timeout()', () => {
    it('should wait 200 miliseconds before resolving a Promise', () => {
      // Mock functions
      jest.useFakeTimers();

      // Mock data
      const input = {
        data: 'Response data',
        delay: 200
      };

      const result = {
        called: 1,
        data: input.data,
        delay: input.delay
      };

      // Run a function
      const helper = asynclHelper.timeout(input.data, input.delay);

      // Fast-forward until all timers have been executed
      jest.runAllTimers();

      // Assertions
      expect.assertions(3);
      expect(setTimeout).toHaveBeenCalledTimes(result.called);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), result.delay);
      return expect(helper).resolves.toBe(result.data);
    });
  });
});

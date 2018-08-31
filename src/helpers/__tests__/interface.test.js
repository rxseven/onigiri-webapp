// Functions
import interfaceHelper from '../interface';

// Unit tests
describe('helpers/interface', () => {
  describe('FOUC()', () => {
    it('should wait 200 milliseconds before executing a callback', () => {
      // Mock functions
      jest.useFakeTimers();
      const callback = jest.fn();

      // Mock data
      const result = {
        called: 1,
        delay: 200
      };

      // Run a function
      interfaceHelper.FOUC(callback);

      // At this point in time, the callback should not have been called yet
      expect(callback).not.toBeCalled();

      // Fast-forward until all timers have been executed
      jest.runAllTimers();

      // Assertions
      expect(setTimeout).toHaveBeenCalledTimes(result.called);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), result.delay);
      expect(callback).toBeCalled();
      expect(callback).toHaveBeenCalledTimes(result.called);
    });
  });
});

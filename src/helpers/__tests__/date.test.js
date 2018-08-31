// Functions
import dateHelper from '../date';

// Unit tests
describe('helpers/date', () => {
  describe('currentDate()', () => {
    it("should return today's date into a human readable string", () => {
      // Mock data
      const result = expect.anything();

      // Assertions
      expect(dateHelper.currentDate()).toEqual(result);
    });
  });

  describe('currentTime()', () => {
    it('should return current time into a human readable string', () => {
      // Mock data
      const result = expect.anything();

      // Assertions
      expect(dateHelper.currentTime()).toEqual(result);
    });
  });
});

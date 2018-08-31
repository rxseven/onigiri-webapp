// Functions
import timestampHelper from '../timestamp';

// Unit tests
describe('helpers/timestamp', () => {
  describe('date()', () => {
    it('should convert the date into a human readable string', () => {
      // Assertions
      expect(timestampHelper.date('2018-04-28T06:19:36.170Z')).toEqual('Sat Apr 28 2018');
    });
  });

  describe('time()', () => {
    it('should convert the time into a human readable string using locale conventions', () => {
      // Mock data
      const timestamp = '2018-04-28T06:19:36.170Z';

      // Simulate a function
      const result = new Date(timestamp).toLocaleTimeString();

      // Assertions
      expect(timestampHelper.time(timestamp)).toEqual(result);
    });
  });
});

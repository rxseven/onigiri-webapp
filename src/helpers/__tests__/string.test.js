// Functions
import stringHelper from '../string';

// Unit tests
describe('helpers/string', () => {
  describe('capitalizeFirstLetter()', () => {
    it('should convert the first string of the first word to uppercase letter', () => {
      // Mock data
      const source = 'onigiri webapp';
      const result = 'Onigiri webapp';

      // Assertions
      expect(stringHelper.capitalizeFirstLetter(source)).toEqual(result);
    });
  });
});

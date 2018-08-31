// Functions
import emailHelper from '../email';

// Unit tests
describe('helpers/email', () => {
  describe('length()', () => {
    it('should return the number of characters in a list of email addresses', () => {
      // Mock data
      const source = 'mail-001@mail.io, mail-002@mail.io, mail-003@mail.io';
      const result = 3;

      // Assertions
      expect(emailHelper.length(source)).toEqual(result);
    });
  });
});

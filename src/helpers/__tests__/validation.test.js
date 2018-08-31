// Functions
import validationHelper from '../validation';

// Unit tests
describe('helpers/validation', () => {
  describe('email()', () => {
    describe('Pass', () => {
      it('should return "false"', () => {
        // Mock data
        const source = 'mail-001@mail.io';
        const result = false;

        // Assertions
        expect(validationHelper.email(source)).toEqual(result);
      });
    });

    describe('Fail', () => {
      it('should return "Invalid email address"', () => {
        // Mock data
        const source = 'mail-001@mail';
        const result = 'Invalid email address';

        // Assertions
        expect(validationHelper.email(source)).toEqual(result);
      });
    });
  });

  describe('emails()', () => {
    describe('Pass', () => {
      it('should return "false"', () => {
        // Mock data
        const source = '';
        const result = false;

        // Assertions
        expect(validationHelper.emails(source)).toEqual(result);
      });
    });

    describe('Fail', () => {
      it('should return "These emails are invalid: user@mail"', () => {
        // Mock data
        const source = 'mail-001@mail.io, user@mail';
        const result = 'These emails are invalid: user@mail';

        // Assertions
        expect(validationHelper.emails(source)).toEqual(result);
      });

      it('should return "Please remove comma at the beginning / end of the list"', () => {
        // Mock data
        const source = 'mail-001@mail.io, mail-002@mail.io,';
        const result = 'Please remove comma at the beginning / end of the list';

        // Assertions
        expect(validationHelper.emails(source)).toEqual(result);
      });
    });
  });

  describe('http()', () => {
    describe('Pass', () => {
      it('should return "false"', () => {
        // Mock data
        const source = 'http://www.rxseven.com';
        const result = false;

        // Assertions
        expect(validationHelper.http(source)).toEqual(result);
      });
    });

    describe('Fail', () => {
      it('should return "Must begin with http:// or https://"', () => {
        // Mock data
        const source = 'www.rxseven.com';
        const result = 'Must begin with http:// or https://';

        // Assertions
        expect(validationHelper.http(source)).toEqual(result);
      });
    });
  });

  describe('name()', () => {
    describe('Pass', () => {
      it('should return "false"', () => {
        // Mock data
        const source = 'Luke Skywalker';
        const result = false;

        // Assertions
        expect(validationHelper.name(source)).toEqual(result);
      });
    });

    describe('Fail', () => {
      it('should return "Must be at least 2 characters"', () => {
        // Mock data
        const source = 'A';
        const result = 'Must be at least 2 characters';

        // Assertions
        expect(validationHelper.name(source)).toEqual(result);
      });

      it('should return "Invalid characters"', () => {
        // Mock data
        const source = '@skywalker';
        const result = 'Invalid characters';

        // Assertions
        expect(validationHelper.name(source)).toEqual(result);
      });
    });
  });

  describe('password()', () => {
    describe('Pass', () => {
      it('should return "false"', () => {
        // Mock data
        const source = 'R2D2s';
        const result = false;

        // Assertions
        expect(validationHelper.password(source)).toEqual(result);
      });
    });

    describe('Fail', () => {
      it('should return "Must be at least 5 characters"', () => {
        // Mock data
        const source = 'Rx7';
        const result = 'Must be at least 5 characters';

        // Assertions
        expect(validationHelper.password(source)).toEqual(result);
      });

      it('should return "Must contain a number"', () => {
        // Mock data
        const source = 'skywalker';
        const result = 'Must contain a number';

        // Assertions
        expect(validationHelper.password(source)).toEqual(result);
      });

      it('should return "Must contain a character"', () => {
        // Mock data
        const source = '01001110';
        const result = 'Must contain a character';

        // Assertions
        expect(validationHelper.password(source)).toEqual(result);
      });

      it('should return "Invalid characters"', () => {
        // Mock data
        const source = 'A$010011@10';
        const result = 'Invalid characters';

        // Assertions
        expect(validationHelper.password(source)).toEqual(result);
      });
    });
  });

  describe('url()', () => {
    describe('Pass', () => {
      it('should return "false"', () => {
        // Mock data
        const source = 'http://www.rxseven.com';
        const result = false;

        // Assertions
        expect(validationHelper.url(source)).toEqual(result);
      });
    });

    describe('Fail', () => {
      it('should return "Invalid web address"', () => {
        // Mock data
        const source = 'rxseven.com';
        const result = 'Invalid web address';

        // Assertions
        expect(validationHelper.url(source)).toEqual(result);
      });
    });
  });
});

// @flow

// Regex
const REGEX = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  invalid: /^.*?(?=[\^!@#%&$~^_+=\*:<>/\{\|\}]).*$/,
  url: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
};

// Static types
type Emails = string;
type Input = string;
type Return = string | boolean;

// Pattern validation
export default {
  email: (value: ?Input): Return => {
    if (value && !REGEX.email.test(value)) {
      return 'Invalid email address';
    }

    return false;
  },
  emails: (value: ?Emails = null): Return => {
    if (value) {
      const invalidEmails = value
        // Split a list of emails into an array of emails
        .split(',')

        // Remove whitespace from both ends of a string
        .map(email => email.trim())

        // Create a new array with all invalid emails that don't pass the test
        .filter(email => REGEX.email.test(email) === false);

      // If there are invalid emails found, return a list of invalid items
      if (invalidEmails.length) {
        if (invalidEmails.length === 1 && invalidEmails[0] === '') {
          return 'Please remove comma at the beginning / end of the list';
        }
        return `These emails are invalid: ${invalidEmails.toString()}`;
      }
    }

    return false;
  },
  http: (value: ?Input): Return => {
    if (value && !/^(http|https):\/\//i.test(value)) {
      return 'Must begin with http:// or https://';
    }

    return false;
  },
  name: (value: Input): Return => {
    if (value.length < 2) {
      return 'Must be at least 2 characters';
    } else if (value.search(/\d/) === 0) {
      return 'Must contain only character';
    } else if (value.search(REGEX.invalid) !== -1) {
      return 'Invalid characters';
    }

    return false;
  },
  password: (value: Input): Return => {
    if (value.length < 5) {
      return 'Must be at least 5 characters';
    } else if (value.search(/\d/) === -1) {
      return 'Must contain a number';
    } else if (value.search(/[a-zA-Z]/) === -1) {
      return 'Must contain a character';
    } else if (value.search(REGEX.invalid) !== -1) {
      return 'Invalid characters';
    }

    return false;
  },
  url: (value: Input): Return => {
    if (value && !REGEX.url.test(value)) {
      return 'Invalid web address';
    }

    return false;
  }
};

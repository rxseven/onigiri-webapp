// Module dependencies
import urlRegex from 'url-regex';

// Regex
const REGEX = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  invalid: /^.*?(?=[\^!@#%&$~^_+=\*:<>\?/\{\|\}]).*$/
};

// Pattern validation
export default {
  email: (string) => {
    if (!REGEX.email.test(string)) {
      return 'Invalid email address';
    }

    return false;
  },
  emails: (emails = null) => {
    if (emails) {
      const invalidEmails = emails
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
        return `These emails are invalid: ${invalidEmails}`;
      }
    }

    return false;
  },
  http: (string) => {
    if (string && !/^(http|https):\/\//i.test(string)) {
      return 'Must begin with http:// or https://';
    }

    return false;
  },
  password: (string) => {
    if (string.length < 5) {
      return 'Must be at least 5 characters';
    } else if (string.search(/\d/) === -1) {
      return 'Must contain a number';
    } else if (string.search(/[a-zA-Z]/) === -1) {
      return 'Must contain a character';
    } else if (string.search(REGEX.invalid) !== -1) {
      return 'Invalid characters';
    }

    return false;
  },
  url: (string) => {
    if (string && !urlRegex({ exact: true }).test(string)) {
      return 'Invalid web address';
    }

    return false;
  }
};

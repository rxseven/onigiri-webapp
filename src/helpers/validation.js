// Module dependencies
import urlRegex from 'url-regex';

// Regex
const REGEX = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
  url: (string) => {
    if (string && !urlRegex({ exact: true }).test(string)) {
      return 'Invalid web address';
    }

    return false;
  }
};

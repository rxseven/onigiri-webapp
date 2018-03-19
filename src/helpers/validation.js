// Module dependencies
import urlRegex from 'url-regex';

// Pattern validation
export default {
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

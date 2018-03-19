// Module dependencies
import urlRegex from 'url-regex';

// Pattern validation
export default {
  url: (string) => {
    if (string && !urlRegex({ exact: true }).test(string)) {
      return 'Invalid web address';
    }

    return false;
  }
};

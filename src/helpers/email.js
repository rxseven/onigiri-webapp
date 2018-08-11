// @flow

// Email helpers
export default {
  length: (value: string): number => value.split(',').map(email => email.trim()).length
};

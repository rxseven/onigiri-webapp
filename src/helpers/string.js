// @flow

// String helpers
module.exports = {
  // Capitalize first letter
  capitalizeFirstLetter: <T: string>(value: T): T => value.charAt(0).toUpperCase() + value.slice(1)
};

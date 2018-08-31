// @flow
/* eslint-disable import/prefer-default-export */

// Call a function
export const callFunction = (callback: any = undefined, data: any = undefined): void => {
  if (callback) callback(data);
};

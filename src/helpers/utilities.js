// @flow
/* eslint-disable import/prefer-default-export */

// Call a function
export const callFunction = (callback: any = undefined, data: any = undefined): void => {
  if (callback) callback(data);
};

// Validate alert property and generate an error object
// flow-disable-next-line
export const isAlert = condition => ({ ...(!condition && { error: false }) });

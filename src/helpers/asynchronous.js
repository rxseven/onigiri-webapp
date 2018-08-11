// @flow

// Asynchronous helpers
export default {
  timeout: (data?: mixed = null, delay?: number = 0): Promise<any> =>
    new Promise((resolve, reject): void => {
      setTimeout((): void => {
        resolve(data);
      }, delay);
    })
};

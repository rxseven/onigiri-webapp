// Asynchronous helpers
export default {
  timeout: (data = null, delay = 0) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    })
};

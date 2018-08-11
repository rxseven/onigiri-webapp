// @flow
// Date and time helpers
export default {
  currentDate: (): string => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  },
  currentTime: (): string => {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  }
};

// @flow

// Timestamp helpers
export default {
  date: <T: string>(timestamp: T): T => new Date(timestamp).toDateString(),
  time: <T: string>(timestamp: T): T => new Date(timestamp).toLocaleTimeString()
};

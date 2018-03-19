// Timestamp helpers
export default {
  date: timestamp => new Date(timestamp).toDateString(),
  time: timestamp => new Date(timestamp).toLocaleTimeString()
};

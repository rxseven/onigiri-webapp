// Interface helpers
export default {
  FOUC: callback =>
    setTimeout(() => {
      callback();
    }, 200)
};

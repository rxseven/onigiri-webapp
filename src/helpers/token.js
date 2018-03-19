// Token helper
export default {
  get: () => localStorage.getItem('token'),
  remove: () => localStorage.removeItem('token'),
  save: token => localStorage.setItem('token', token)
};

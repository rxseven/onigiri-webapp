// @flow

// Token helper
export default {
  get: (): ?string => localStorage.getItem('token'),
  remove: (): void => localStorage.removeItem('token'),
  save: (value: string): void => localStorage.setItem('token', value)
};

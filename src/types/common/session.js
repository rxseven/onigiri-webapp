// @flow

// Sign in credentials
export type SignIn = {
  email: string,
  password: string
};

// Sign up credentials
export type SignUp = {
  email: string,
  firstName: string,
  lastName: string,
  password: string
};

// OAuth access token
export type OAuthToken = string;

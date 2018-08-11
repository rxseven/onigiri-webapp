// @flow

// Asynchronous status
export type Asynchronous = {
  error: ?{
    message: string
  },
  loading: boolean
};

// Immutable data
export type Data = any;

// Error message
export type Error = any;

// MongoDB ID
export type ID = string;

// Query
export type Query = {};

// Selector
export type Selector = any;

// @flow

// From
export type From = string | { pathname: string, state?: Object };

// History
export type History = Object;

// Location
export type Location = Object;

// Match ID parameter
export type MatchID = {
  params: {
    id: string
  }
};

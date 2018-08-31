// Module dependencies
import { fromJS } from 'immutable';
import React from 'react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

// Helper functions
import { getError } from 'helpers/state';

// Mock data
import mock from '../mock';

// Get mock
export const getMock = (source: any, expected: any, domain: Array<string>): any => ({
  state: source.getIn(domain),
  result: expected.getIn(domain)
});

// Router
export const mockRouter = element => <Router>{element}</Router>;

// Redux store
export const mockStore = (initialState) => {
  // Configuration
  const middlewares = [];
  const createStore = configureStore(middlewares);
  const state = initialState || mock.data.store;

  // Create store
  return createStore(state);
};

// Generate response data
export const genData = (response, failure = false) => {
  let error = response;

  if (failure) {
    error = getError(response);
  }

  return {
    immutable: fromJS(error),
    plain: response
  };
};

// Generate error
export const genError = response => genData(response, true);

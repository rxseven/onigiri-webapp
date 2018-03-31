// Module dependencies
import React from 'react';
import { Provider } from 'react-redux';

import App from './App';

// Component
const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Module exports
export default Root;

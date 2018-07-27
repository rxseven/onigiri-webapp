// Module dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Components and HOCs
import App from 'components/core/App';

// Component
const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Module exports
export default Root;

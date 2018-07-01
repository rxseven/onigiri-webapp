// Module dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './dependencies';

// Starting point component
import Root from './components/Root';

// Redux store
import configureStore from './store/configureStore';

// Constants
import HTML from './constants/elements/html';

// Styles
import './styles/index.scss';

// Initialize Redux store
const store = configureStore();

// Initialize root HTML element
const root = document.getElementById(HTML.root);

// Validate root element
if (root == null) {
  throw new Error('No root element found');
}

// Render React element into the DOM
ReactDOM.render(<Root store={store} />, root);

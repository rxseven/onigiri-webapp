// Module dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './dependencies';

// Root component
import Root from './components/Root';

// Redux store
import configureStore from './store/configureStore';

// Constants
import HTML from './constants/elements/html';

// Create Redux store
const store = configureStore();

// Render React element into the DOM
ReactDOM.render(<Root store={store} />, document.getElementById(HTML.root));

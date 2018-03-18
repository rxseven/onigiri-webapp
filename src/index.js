// Module dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Constants
import HTML from './constants/elements/html';

// Render React element into the DOM
ReactDOM.render(<App />, document.getElementById(HTML.root));

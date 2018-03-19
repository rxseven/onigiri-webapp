// Module dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Constants
import PATHS from '../../constants/router/paths';

// Component
const NotFound = () => (
  <div>
    <h2>404</h2>
    <p>This is not webpage you are looking for.</p>
    <Link to={PATHS.root}>Go back to Home page</Link>
  </div>
);

// Module exports
export default NotFound;

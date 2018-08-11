// @flow
// Module dependencies
import * as React from 'react';

// Components and HOCs
import Navbar from 'components/core/Navbar';

// Static types
type Return = React.Element<typeof Navbar>;

// Component
const Header = (): Return => <Navbar />;

// Module exports
export default Header;

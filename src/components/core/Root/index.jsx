// @flow
// Module dependencies
import * as React from 'react';
import { Provider } from 'react-redux';

// Components and HOCs
import App from 'components/core/App';

// Static types
type Props = { store: any };
type Return = React.Element<typeof Provider>;

// Component
const Root = ({ store }: Props): Return => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Module exports
export default Root;

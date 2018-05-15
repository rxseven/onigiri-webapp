// Module dependencies
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { getUser } from '../data/session/actions';
import tokenHelper from '../helpers/token';
import reducer from '../reducers';
import saga from '../sagas';

// Initialize middleware
const sagaMiddleware = createSagaMiddleware();

// Store configuration
const configureStore = (initialState) => {
  // Create store
  const store = createStore(
    reducer,
    initialState,
    compose(
      // Middleware,
      applyMiddleware(sagaMiddleware, thunk),

      // Enable Redux DevTools Extension
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // Run middleware
  sagaMiddleware.run(saga);

  // Check if Webpack Hot Module Replacement is enabled
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Enable HMR by accepting update of dependency
      module.hot.accept('../reducers', () => {
        // Replaces the reducer currently used by the store to calculate the state
        store.replaceReducer(reducer);
      });
    }
  }

  // Verify an access token once the app starts
  if (tokenHelper.get()) {
    // Authorize the current user and get its user info
    store.dispatch(getUser());
  }

  // Return a configuration
  return store;
};

// Module exports
export default configureStore;

// Module dependencies
import { Map } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Actions and selectors
import { getUser } from 'data/session/actions';

// Root reducer
import reducer from 'reducers';

// Root saga
import saga from 'sagas';

// Helper functions
import tokenHelper from 'helpers/token';

// Initialize middleware
const sagaMiddleware = createSagaMiddleware();

// Initialize state
const initialState = Map();

// Store configuration
const configureStore = () => {
  // Create store
  const store = createStore(
    reducer,
    initialState,
    compose(
      // Middleware,
      applyMiddleware(sagaMiddleware),

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
      module.hot.accept('reducers', () => {
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

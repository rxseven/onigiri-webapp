// @flow
// Module dependencies
import { fromJS, Seq } from 'immutable';
import { normalize, schema } from 'normalizr';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Types
import type { Asynchronous } from 'types/common/state';

// Set an asynchronous status
export const setAsync = (selector: any, state: any, type?: string, payload?: {}): any => {
  switch (type) {
    case LOADING:
      return state.setIn([...selector, LOADING], true).setIn([...selector, 'error'], null);
    case ERROR:
      return state.setIn([...selector, LOADING], false).setIn([...selector, 'error'], payload);
    default:
      return state.setIn(selector, fromJS(STATE_MODELS.model.asynchronous));
  }
};

// Convert plain JavaScript objects into Immutable.OrderedMap
// https://github.com/facebook/immutable-js/wiki/Converting-from-JS-objects
export const fromJSOrdered = (js: any): any => {
  if (typeof js !== 'object' || js === null) {
    return js;
  } else if (Array.isArray(js)) {
    return Seq(js)
      .map(fromJSOrdered)
      .toList();
  }

  return Seq(js)
    .map(fromJSOrdered)
    .toOrderedMap();
};

// Generate fetching status
export const generateStatus = (
  data: any,
  asynchronous: Asynchronous,
  options?: Object
): Object => ({
  status: {
    data: !!data,
    error: asynchronous.error,
    loading: asynchronous.loading,
    ...options
  }
});

// Generate state for a container component
export const generateState = <T: any>(handler: T): { state: T } => ({
  state: handler
});

// Extract an error message from a network response
export const getError = <T: { message: string }>(error: { response: { data: { error: T } } }): T =>
  error.response.data.error;

// Normalize a list of entities with their IDs
export const normalizeList = (data: Object, key: string, id: string = '_id'): Object => {
  // Create an entity
  const entity = new schema.Entity(key, {}, { idAttribute: id });

  // Define data schema
  const list = { [key]: [entity] };

  // Normalize input data per the schema definition provided
  const normalizedData = normalize(data, list);

  // Return normalized entity
  return normalizedData.entities[key];
};

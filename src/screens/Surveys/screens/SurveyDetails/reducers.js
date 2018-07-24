// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';
import { setAsync } from 'helpers/state';

// Actions
import { SURVEY_DELETE, SURVEY_DELETE_FAILURE, SURVEY_DELETE_SUCCESS } from '../../actions';
import {
  RECIPIENTS_GET,
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET,
  SURVEY_GET_FAILURE,
  SURVEY_GET_SUCCESS,
  SURVEY_UPDATE,
  SURVEY_UPDATE_FAILURE,
  SURVEY_UPDATE_SUCCESS
} from './data/survey/actions';

// Reducers
import data from './data/reducers';

// Constants
const asyncModel = { ...STATE_MODELS.model.asynchronous };

// Initial state
const initialState = fromJS({
  delete: {
    survey: asyncModel
  },
  get: {
    recipients: asyncModel,
    survey: asyncModel
  },
  patch: {
    survey: asyncModel
  }
});

// Immutable map
const map = {
  delete: {
    survey: ['delete', 'survey']
  },
  get: {
    recipients: ['get', 'recipients'],
    survey: ['get', 'survey']
  },
  patch: {
    survey: ['patch', 'survey']
  }
};

// Asynchronous reducer
const asynchronous = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Get recipients
    case RECIPIENTS_GET:
      return setAsync(map.get.recipients, state, LOADING);
    case RECIPIENTS_GET_FAILURE:
      return setAsync(map.get.recipients, state, ERROR, payload);
    case RECIPIENTS_GET_SUCCESS:
      return setAsync(map.get.recipients, state);

    // Delete survey
    case SURVEY_DELETE:
      return setAsync(map.delete.survey, state, LOADING);
    case SURVEY_DELETE_FAILURE:
      return setAsync(map.delete.survey, state, ERROR, payload);
    case SURVEY_DELETE_SUCCESS:
      return setAsync(map.delete.survey, state);

    // Get survey
    case SURVEY_GET:
      return setAsync(map.get.survey, state, LOADING);
    case SURVEY_GET_FAILURE:
      return setAsync(map.get.survey, state, ERROR, payload);
    case SURVEY_GET_SUCCESS:
      return setAsync(map.get.survey, state);

    // Update survey
    case SURVEY_UPDATE:
      return setAsync(map.patch.survey, state, LOADING);
    case SURVEY_UPDATE_FAILURE:
      return setAsync(map.patch.survey, state, ERROR, payload);
    case SURVEY_UPDATE_SUCCESS:
      return setAsync(map.patch.survey, state);

    // Default
    default:
      return state;
  }
};

// UI reducer
const ui = combineReducers({ asynchronous });

// Combine reducers
export default combineReducers({
  data,
  ui
});

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'surveys', 'details']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));

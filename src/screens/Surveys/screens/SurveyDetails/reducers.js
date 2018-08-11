// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

// Helper functions
import { setAsync } from 'helpers/state';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Action and static types
import {
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS,
  type Action as ActionSurveys
} from '../../types';
import {
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_REQUEST,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET_FAILURE,
  SURVEY_GET_REQUEST,
  SURVEY_GET_SUCCESS,
  SURVEY_UPDATE_FAILURE,
  SURVEY_UPDATE_REQUEST,
  SURVEY_UPDATE_SUCCESS,
  type Action as ActionData
} from './data/survey/types';
import type { Async as Asynchronous } from './types';

// Reducers
import data from './data/reducers';

// Constants
const asyncModel = { ...STATE_MODELS.model.asynchronous };

// Static types
type Action = ActionSurveys | ActionData;
type Key = Object;
type Model = Asynchronous;
type State = any;

// State shape
const stateShape: Model = {
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
};

// Immutable key path
const statePath: Key = {
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

// Initial state
const initialState: State = fromJS(stateShape);

// Asynchronous reducer
const asynchronous = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Get recipients
    case RECIPIENTS_GET_REQUEST:
      return setAsync(statePath.get.recipients, state, LOADING);
    case RECIPIENTS_GET_FAILURE:
      return setAsync(statePath.get.recipients, state, ERROR, action.payload);
    case RECIPIENTS_GET_SUCCESS:
      return setAsync(statePath.get.recipients, state);

    // Delete survey
    case SURVEY_DELETE_REQUEST:
      return setAsync(statePath.delete.survey, state, LOADING);
    case SURVEY_DELETE_FAILURE:
      return setAsync(statePath.delete.survey, state, ERROR, action.payload);
    case SURVEY_DELETE_SUCCESS:
      return setAsync(statePath.delete.survey, state);

    // Get survey
    case SURVEY_GET_REQUEST:
      return setAsync(statePath.get.survey, state, LOADING);
    case SURVEY_GET_FAILURE:
      return setAsync(statePath.get.survey, state, ERROR, action.payload);
    case SURVEY_GET_SUCCESS:
      return setAsync(statePath.get.survey, state);

    // Update survey
    case SURVEY_UPDATE_REQUEST:
      return setAsync(statePath.patch.survey, state, LOADING);
    case SURVEY_UPDATE_FAILURE:
      return setAsync(statePath.patch.survey, state, ERROR, action.payload);
    case SURVEY_UPDATE_SUCCESS:
      return setAsync(statePath.patch.survey, state);

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

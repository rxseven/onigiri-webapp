// @flow
// Module dependencies
import axios from 'axios';

// Helper functions
import ajax from 'helpers/ajax';

// Constants
import API from 'config/api';

// Types
import type { Data, ID } from 'types/common/state';

// Static types
type Return = Promise<any>;

// Create survey and send out emails
export const createSurvey = (data: Data): Return =>
  ajax({
    data,
    method: 'post',
    url: API.endpoints.surveys.base
  });

// Delete survey by ID
export const deleteSurvey = (id: ID): Return =>
  ajax({
    method: 'delete',
    url: `${API.endpoints.surveys.base}/${id}`
  });

// Get landing page URI by survey ID
export const getLanding = (id: ID): Return =>
  ajax({ auth: false, url: `${API.endpoints.surveys.base}/${id}/landing` });

// Get recipients by survey ID
export const getRecipients = (id: ID): Return =>
  ajax({ url: `${API.endpoints.surveys.base}/${id}/recipients` });

// Get survey by ID
export const getSurvey = (id: ID): Return => ajax({ url: `${API.endpoints.surveys.base}/${id}` });

// Get a list of surveys
let cancelRequest: string => mixed;
export const getSurveys = (query: {}): Return =>
  // Sequently get a part of data (pagination, infinite scrolling)
  ajax({
    cancelToken: new axios.CancelToken((abort) => {
      cancelRequest = abort;
    }),
    params: { ...query, limit: API.query.surveys.list.limit },
    url: API.endpoints.surveys.base
  });

// Cancel getting a list of surveys
export const cancelSurveys = (): void => {
  cancelRequest('Operation canceled by the user');
};

// Update survey by ID
export const updateSurvey = (id: ID, data: Data): Return =>
  ajax({
    data,
    method: 'patch',
    url: `${API.endpoints.surveys.base}/${id}/update`
  });

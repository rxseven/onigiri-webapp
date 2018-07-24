// Module dependencies
import axios from 'axios';

import ajax from 'helpers/ajax';

// Constants
import API from 'config/api';

// Create survey and send out emails
export const createSurvey = data =>
  ajax({
    data,
    method: 'post',
    url: API.endpoints.surveys.base
  });

// Delete survey by ID
export const deleteSurvey = id =>
  ajax({
    method: 'delete',
    url: `${API.endpoints.surveys.base}/${id}`
  });

// Get landing page URI by survey ID
export const getLanding = id =>
  ajax({ auth: false, url: `${API.endpoints.surveys.base}/${id}/landing` });

// Get recipients by survey ID
export const getRecipients = id => ajax({ url: `${API.endpoints.surveys.base}/${id}/recipients` });

// Get survey by ID
export const getSurvey = id => ajax({ url: `${API.endpoints.surveys.base}/${id}` });

// Get a list of surveys
let cancelRequest;
export const getSurveys = query =>
  // Sequently get a part of data (pagination, infinite scrolling)
  ajax({
    cancelToken: new axios.CancelToken((abort) => {
      cancelRequest = abort;
    }),
    params: { ...query, limit: API.query.surveys.list.limit },
    url: API.endpoints.surveys.base
  });

// Cancel getting a list of surveys
export const cancelSurveys = () => {
  cancelRequest('Operation canceled by the user');
};

// Update survey by ID
export const updateSurvey = (id, values) =>
  ajax({
    data: values,
    method: 'patch',
    url: `${API.endpoints.surveys.base}/${id}/update`
  });

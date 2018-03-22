// Module dependencies
import ajax from '../helpers/ajax';

// Constants
import API from '../config/api';

// Create survey and send out emails
export const createSurvey = data =>
  ajax({
    data,
    method: 'post',
    url: API.endpoints.surveys.base
  });

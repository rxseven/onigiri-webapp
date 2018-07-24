// Module dependencies
import axios from 'axios';

import tokenHelper from 'helpers/token';

// Constants
import API from 'config/api';

// Ajax helpers
export default ({
  auth = true,
  cancelToken = null,
  data = null,
  headers = null,
  method = 'get',
  params = null,
  url
}) => {
  // Initial config
  const config = {
    baseURL: API.host,
    cancelToken,
    data,
    headers,
    method,
    params,
    url
  };

  // Request config
  let request = { ...config };

  // Authorization header
  if (auth) {
    request = {
      ...config,
      headers: {
        ...config.header,
        authorization: tokenHelper.get()
      }
    };
  }

  // Perform a network request
  return axios(request).catch((error) => {
    // Operation canceled by the user
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    // The request was made and the server responded with a status code
    return Promise.reject(error);
  });
};

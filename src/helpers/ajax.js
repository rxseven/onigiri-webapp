// @flow
// Module dependencies
import axios from 'axios';

// Helper functions
import tokenHelper from 'helpers/token';

// Constants
import API from 'config/api';

// Static types
type Parameters = {
  auth?: boolean,
  cancelToken?:
    | {
        promise: Promise<any>
      }
    | any,
  data?: mixed,
  headers?: {},
  method?: string,
  params?: {},
  url: string
};

type Return = Promise<any>;

// Ajax helpers
export default ({
  auth = true,
  cancelToken = undefined,
  data = undefined,
  headers = {},
  method = 'get',
  params = {},
  url
}: Parameters): Return => {
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
        ...config.headers,
        authorization: tokenHelper.get()
      }
    };
  }

  // Perform a network request
  return axios(request).catch((error): Return => {
    // Operation canceled by the user
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    // The request was made and the server responded with a status code
    return Promise.reject(error);
  });
};

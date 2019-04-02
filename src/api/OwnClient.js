import axios from 'axios';
import M from 'materialize-css';

import { getAuthToken, isUserLoggedIn } from '../lib/auth';

class OwnClient extends axios {}

const beforeRequestHandler = (config) => {
  if (isUserLoggedIn()) config.headers = { ...config.headers, 'Authorization': `Bearer ${getAuthToken()}` };

  return config;
};

const successResponseHandler = (response) => {
  const { status, data } = response.data;

  return { status, data, response };
};

const failResponseHandler = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { status, data } = error.response.data;
    const response = error.response;

    if (status === 'fail') return Promise.reject({ status, data, response });

    if (status === 'error') return M.toast({ html: `Server Error.` });
  } else if (error.request) {
    // The request was made but no response was received
    return M.toast({ html: `Connection Error.` });
  } else {
    // Something happened in setting up the request that triggered an Error
    return M.toast({ html: `Client Error.` });
  }
};

OwnClient.interceptors.request.use(beforeRequestHandler, error => Promise.reject(error));
OwnClient.interceptors.response.use(successResponseHandler, failResponseHandler);

export default OwnClient;

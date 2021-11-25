import React from 'react';
import {
  CLIENT_ERROR,
  create,
  NETWORK_ERROR,
  SERVER_ERROR,
  TIMEOUT_ERROR,
} from 'apisauce';

const NewsApi = create({
  baseURL: 'https://newsapi.org/v2',
  headers: {'Content-type': 'application/json'},
  timeout: 10000,
});

const NewsEndpoints = {
  headlines: '/top-headlines',
};

const apiKey = '1722765a6674428094451a85c446f830';

const throwNetworkException = constant => {
  switch (constant) {
    case CLIENT_ERROR:
      return 'Oops, something wrong happened.';
    case SERVER_ERROR:
      return 'Oops, something wrong happened. Please try again in a moment.';
    case TIMEOUT_ERROR:
      return 'Connection timed out.';
    case NETWORK_ERROR:
      return 'You seemed to be offline.';
    default:
      return;
  }
};

export {NewsApi, NewsEndpoints, throwNetworkException, apiKey};

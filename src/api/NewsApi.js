import React from 'react';
import {create} from 'apisauce';

const NewsApi = create({
  baseURL: 'https://newsapi.org/v2',
  headers: {'Content-type': 'application/json'},
  timeout: 10000,
});

const NewsEndpoints = {
  headlines: '/top-headlines',
};

const apiKey = '1722765a6674428094451a85c446f830';

export {NewsApi, NewsEndpoints, apiKey};

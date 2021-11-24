import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {create} from 'apisauce';

const NewsApi = create({
  baseURL: 'https://newsapi.org/v2',
  headers: {'Content-type': 'application/json'},
  timeout: 10000,
});

const NewsEndpoints = {
  headlines: '/top-headlines',
};

export {NewsApi, NewsEndpoints};

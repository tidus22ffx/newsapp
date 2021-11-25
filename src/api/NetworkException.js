import {
  CLIENT_ERROR,
  NETWORK_ERROR,
  SERVER_ERROR,
  TIMEOUT_ERROR,
} from 'apisauce';

const throwNetworkException = constant => {
  switch (constant) {
    case CLIENT_ERROR:
      return 'Oops, something wrong happened.';
    case SERVER_ERROR:
      return 'Oops, something wrong happened. Please try again in a moment.';
    case TIMEOUT_ERROR:
      return 'Connection timed out.';
    case NETWORK_ERROR:
      return 'Please check your internet connection. \n You need to be online to read articles.';
    default:
      return;
  }
};

export {throwNetworkException};

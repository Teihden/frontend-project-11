import axios from 'axios';

const createProxyUrl = (url) =>
  `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`;

const request = (url) => axios.get(createProxyUrl(url))
  .then((response) => response.data.contents)
  .catch((error) => {
    const networkErrors = {};

    if (error.response) {
      networkErrors.url = 'errors.network.invalidStatus';
    } else if (error.request) {
      networkErrors.url = 'errors.network.noResponse';
    } else {
      networkErrors.url = 'errors.network.noRequest';
    }

    const newError = new Error();
    newError.errors = networkErrors;

    throw newError;
  });

export { request };

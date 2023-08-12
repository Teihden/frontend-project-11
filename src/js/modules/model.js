const elements = {
  form: document.querySelector('#form'),
  urlInput: document.querySelector('#url-input'),
  feedback: document.querySelector('#feedback'),
};

const initialState = {
  urls: [],
  form: {
    status: null,
    valid: null,
    fields: {},
    errors: {},
  },
};

export { elements, initialState };

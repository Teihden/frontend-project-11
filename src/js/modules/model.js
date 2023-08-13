const elements = {
  form: document.querySelector('#form'),
  submit: document.querySelector('#submit'),
  urlInput: document.querySelector('#url-input'),
  feedback: document.querySelector('#feedback'),
  postContainer: document.querySelector('#posts'),
  feedContainer: document.querySelector('#feeds'),
  modal: document.querySelector('#modal'),
};

const initialState = {
  content: {
    feeds: [],
    posts: [],
  },
  urls: [],
  form: {
    status: null,
    fields: {},
    errors: {},
  },
  timeoutId: null,
};

export { elements, initialState };

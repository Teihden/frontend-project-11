import { request } from './http-client.js';
import { parse } from './parse.js';
import { validate } from './validate.js';

const initiateController = (elements, state) => {
  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    state.form.status = 'filling';
    state.form.errors = {};

    const { target } = event;
    const formData = new FormData(target);

    [...formData.entries()].forEach(([key, value]) => {
      state.form.fields[key] = value.trim();
    });

    validate(state)
      .then(() => {
        state.form.status = 'fetching';
        return request(state);
      })
      .then(parse)
      .then(([feeds, posts]) => {
        state.form.status = 'success';
        state.content.feeds.unshift(...feeds);
        state.content.posts.unshift(...posts);
        state.urls.push(state.form.fields.url);
      })
      .catch((error) => {
        // console.log(error.errors);

        state.form.errors = error.errors;
        state.form.status = 'error';
      });
  });
};

export { initiateController };

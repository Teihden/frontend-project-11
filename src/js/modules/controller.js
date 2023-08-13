import { request } from './http-client.js';
import { parse } from './parse.js';
import { validate } from './validate.js';
import { setUpdate } from './update.js';

const initiateController = (elements, state) => {
  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    state.form.errors = {};

    const formData = new FormData(event.target);

    [...formData.entries()].forEach(([key, value]) => {
      state.form.fields[key] = value.trim();
    });

    validate(state)
      .then(() => {
        state.form.status = 'fetching';
        return request(state.form.fields.url);
      })
      .then(parse)
      .then(([feed, posts]) => {
        state.form.status = 'success';
        state.content.feeds.unshift(feed);
        state.content.posts.unshift(...posts);
        state.urls.push({
          url: state.form.fields.url,
          id: feed.feedId,
        });
      })
      .then(() => setUpdate(request, parse, state))
      .catch((error) => {
        state.form.errors = error.errors;
        state.form.status = 'error';
      });
  });
};

export { initiateController };

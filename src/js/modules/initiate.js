import onChange from 'on-change';
import { validate } from './validation.js';
import { elements, initialState } from './model.js';
import { watch } from './view.js';
import { initiateController } from './controller.js';
import i18next from 'i18next';
import { resources } from '../locales/index.js';

const initiateApplication = () => {
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    debug: false,
    resources,
  })
    .then(() => {
      const state = onChange(initialState, (path) =>
        watch(path, elements, state, i18nextInstance));

      initiateController(elements, state, validate);
    });
};

export { initiateApplication };

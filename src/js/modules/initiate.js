import onChange from 'on-change';
import i18next from 'i18next';
import { elements, initialState } from './model.js';
import { watch } from './view.js';
import { initiateController } from './controller.js';
import { resources } from '../locales/index.js';

const initiateApplication = () => {
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    debug: false,
    resources,
  })
    .then(() => {
      const state = onChange(initialState, (path, value, _, applyData) =>
        watch(path, value, applyData, elements, state, i18nextInstance));

      initiateController(elements, state);
    });
};

export { initiateApplication };

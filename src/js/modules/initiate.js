import onChange from 'on-change';
import { validate } from './validation.js';
import { elements, initialState } from './model.js';
import { watch } from './view.js';
import { initiateController } from './controller.js';

const initiateApplication = () => {
  const state = onChange(initialState, (path) => watch(path, elements, state));

  initiateController(elements, state, validate);
};

export { initiateApplication };

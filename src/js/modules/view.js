const handleErrors = (elements, state, i18next) => {
  elements.feedback.textContent = state.form.errors?.url ? i18next.t(state.form.errors.url) : '';
};

const handleFormValidity = (elements, state) => {
  if (state.form.valid) {
    elements.urlInput.classList.remove('is-invalid');
    elements.form.reset();
    elements.urlInput.focus();
  } else {
    elements.urlInput.classList.add('is-invalid');
  }
};

const watch = (path, elements, state, i18next) => {
  switch (path) {
    case 'form.errors':
      handleErrors(elements, state, i18next);
      break;
    case 'form.valid':
      handleFormValidity(elements, state);
      break;
    default:
      break;
  }
};

export { watch };

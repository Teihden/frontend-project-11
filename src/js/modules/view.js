const handleErrors = (elements, state) => {
  elements.feedback.textContent = state.form.errors?.url || '';
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

const watch = (path, elements, state) => {
  switch (path) {
    case 'form.errors':
      handleErrors(elements, state);
      break;
    case 'form.valid':
      handleFormValidity(elements, state);
      break;
    default:
      break;
  }
};

export { watch };

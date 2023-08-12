const initiateController = (elements, state, validate) => {
  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { target } = event;
    const formData = new FormData(target);

    [...formData.entries()].forEach(([key, value]) => {
      state.form.fields[key] = value.trim();
    });

    validate(state)
      .then(() => {
        if (state.form.valid) {
          state.urls.push(state.form.fields.url);
          state.form.fields.url = '';
        }
      });
  });
};

export { initiateController };

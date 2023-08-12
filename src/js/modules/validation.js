import { object, string, setLocale } from 'yup';

class DuplicateError extends Error {
  constructor(...parameters) {
    super(...parameters);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DuplicateError);
    }

    this.name = 'DuplicateError';
    this.inner = [
      {
        path: 'url',
        message: { key: 'errors.validation.duplicateUrl' },
      },
    ];
  }
}

setLocale({
  string: {
    url: () => ({ key: 'errors.validation.validUrl' }),
  },
});

const schema = object().shape({
  url: string().url().required(),
});

const validateUniqueness = (state) => {
  if (state.urls.includes(state.form.fields.url)) {
    throw new DuplicateError();
  }
};

const validate = (state) => schema.validate(state.form.fields, { abortEarly: false })
  .then(() => validateUniqueness(state))
  .then(() => {
    state.form.errors = {};
    state.form.valid = true;
  })
  .catch((error) => {
    const validationErrors = error.inner.reduce((accumulator, { path, message }) =>
      ({ ...accumulator, [path]: message.key }), {});

    state.form.errors = validationErrors;
    state.form.valid = false;
  });

export { validate };

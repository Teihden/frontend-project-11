import { object, string } from 'yup';

class DuplicateError extends Error {
  constructor(message, ...parameters) {
    super(...parameters);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DuplicateError);
    }

    this.name = 'DuplicateError';
    this.inner = [
      {
        path: 'url',
        message,
      },
    ];
  }
}

const schema = object().shape({
  url: string()
    .url('Ссылка должна быть валидным URL')
    .required('Это обязательное поле для заполнения'),
});

const validateUniqueness = (state) => {
  if (state.urls.includes(state.form.fields.url)) {
    throw new DuplicateError('RSS уже существует');
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
      ({ ...accumulator, [path]: message }), {});

    state.form.errors = validationErrors;
    state.form.valid = false;
  });

export { validate };

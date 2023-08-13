const ru = {
  translation: {
    errors: {
      validation: {
        validUrl: 'Ссылка должна быть валидным URL',
        duplicateUrl: 'RSS уже добавлен',
      },
      network: {
        invalidStatus: 'Сервер ответил кодом состояния, который не входит в диапазон 2xx',
        noResponse: 'Запрос был сделан, но ответ от сервера не поступил',
        noRequest: 'Произошла ошибка при отправке запроса, запрос не отправлен',
      },
      parsing: {
        invalidRss: 'Ресурс не содержит валидный RSS',
      },
    },
    success: 'RSS успешно загружен',
    posts: 'Посты',
    view: 'Просмотр',
    feeds: 'Фиды',
  },
};

export { ru };

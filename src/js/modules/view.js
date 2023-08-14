const createWrapper = (heading, items, i18next) =>
  `<div class="card border-0">
  <div class="card-body"><h2 class="card-title h4">${i18next.t(heading)}</h2></div>
  <ul class="list-group border-0 rounded-0">${items.join('')}</ul></div>`;

const renderContent = (elements, state, i18next) => {
  elements.postContainer.innerHTML = '';
  elements.feedContainer.innerHTML = '';

  const posts = state.content.posts.map(({ postTitle, postLink, postId }) => {
    const linkClass = state.ui.posts.has(postId) ? 'fw-normal' : 'fw-bold';

    return `<li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0">
    <a href="${postLink}" class="${linkClass}" target="_blank" rel="noopener noreferrer" data-id="${postId}" data-link>${postTitle}</a>
    <button type="button" class="btn btn-outline-primary btn-sm" data-id="${postId}"
    data-bs-toggle="modal" data-bs-target="#modal">${i18next.t('view')}</button></li>`;
  });

  elements.postContainer.insertAdjacentHTML(
    'afterbegin',
    createWrapper('posts', posts, i18next),
  );

  const feeds = state.content.feeds.map(({ feedTitle, feedDescription }) =>
    `<li class="list-group-item border-0 border-end-0">
    <h3 class="h6 m-0">${feedTitle}</h3>
    <p class="m-0 small text-black-50">${feedDescription}</p></li>`);

  elements.feedContainer.insertAdjacentHTML(
    'afterbegin',
    createWrapper('feeds', feeds, i18next),
  );
};

const handleErrors = (elements, state, i18next) => {
  if (elements.feedback.classList.contains('text-success')) {
    elements.feedback.classList.add('text-danger');
    elements.feedback.classList.remove('text-success');
  }

  if (Object.keys(state.form.errors).length !== 0) {
    elements.feedback.textContent = i18next.t(state.form.errors.url);
    elements.urlInput.classList.add('is-invalid');
  } else {
    elements.feedback.textContent = '';
    elements.urlInput.classList.remove('is-invalid');
  }
};

const handleSuccess = (elements, i18next) => {
  if (elements.feedback.classList.contains('text-danger')) {
    elements.feedback.classList.remove('text-danger');
    elements.feedback.classList.add('text-success');
    elements.feedback.textContent = i18next.t('success');
  }
};

const changeUiAnchors = (elements, applyData) => {
  const id = applyData.args[0];
  const anchor = elements.postContainer.querySelector(`[data-link][data-id="${id}"]`);

  anchor.classList.remove('fw-bold');
  anchor.classList.add('fw-normal');
};

const handleStatus = (elements, value, i18next) => {
  switch (value) {
    case 'fetching':
      elements.urlInput.disabled = true;
      elements.submit.disabled = true;
      break;

    case 'error':
      elements.urlInput.disabled = false;
      elements.submit.disabled = false;
      break;

    case 'success':
      handleSuccess(elements, i18next);
      elements.urlInput.disabled = false;
      elements.submit.disabled = false;
      elements.form.reset();
      elements.urlInput.focus();
      break;

    default:
      throw new Error(`Unknown process ${value}`);
  }
};

const watch = (path, value, applyData, elements, state, i18next) => {
  switch (path) {
    case 'form.errors':
      handleErrors(elements, state, i18next);
      break;

    case 'form.status':
      handleStatus(elements, value, i18next);
      break;

    case 'content.posts':
      renderContent(elements, state, i18next);
      break;

    case 'ui.posts':
      changeUiAnchors(elements, applyData);
      break;

    default:
      break;
  }
};

export { watch };

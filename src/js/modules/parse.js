const parse = (data) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(data, 'text/xml');
  const parserError = document.querySelector('parsererror');

  if (parserError) {
    const parsingErrors = {};
    parsingErrors.url = 'errors.parsing.invalidRss';

    const newError = new Error();
    newError.errors = parsingErrors;

    throw newError;
  }

  const feeds = [];
  const feedTitle = document.querySelector('channel > title');
  const feedDescription = document.querySelector('channel > description');
  const feedId = crypto.randomUUID();
  const items = document.querySelectorAll('item');

  feeds.push({
    feedTitle: feedTitle.textContent,
    feedDescription: feedDescription.textContent,
    feedId,
  });

  const posts = [];
  [...items].forEach((item) => {
    const postTitle = item.querySelector('title');
    const postLink = item.querySelector('link');
    const postDescription = item.querySelector('description');
    const parentPostId = feedId;
    const postId = crypto.randomUUID();

    posts.push({
      postTitle: postTitle.textContent,
      postLink: postLink.textContent,
      postDescription: postDescription.textContent,
      parentPostId,
      postId,
    });
  });

  // console.log('document', document);
  // console.log('parserError', parserError);
  // console.log('posts', posts);
  // console.log('feeds', feeds);

  return [feeds, posts];
};

export { parse };

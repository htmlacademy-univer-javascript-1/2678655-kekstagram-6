const container = document.querySelector('.pictures');

function createPhotosFragment(data) {
  const photoTemplate = document
    .querySelector('#picture')
    .content
    .querySelector('.picture');

  const fragment = document.createDocumentFragment();

  data.forEach((photo) => {
    const photoElement = createPhotoElement(photoTemplate, photo);
    fragment.appendChild(photoElement);
  });

  return fragment;
}

function renderErrorFragment() {
  const errorTemplate = document
    .querySelector('#photo-error')
    .content
    .querySelector('.photo-error');

  container.appendChild(errorTemplate.cloneNode(true));
}

function createPhotoElement(photoTemplate, { url, description, likes, comments }) {
  const photoElement = photoTemplate.cloneNode(true);
  const img = photoElement.querySelector('.picture__img');
  const likesEl = photoElement.querySelector('.picture__likes');
  const commentsEl = photoElement.querySelector('.picture__comments');

  img.src = url;
  img.alt = description;
  likesEl.textContent = likes;
  commentsEl.textContent = comments.length;

  return photoElement;
}


export function renderPhotos(data) {
  if (Array.isArray(data) && data.length) {
    const fragment = createPhotosFragment(data);
    container.appendChild(fragment);
  } else {
    renderErrorFragment();
  }
}

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

export function deletePhotosFragment(){
  const pictureList = document.querySelectorAll('.picture');
  pictureList.forEach((el) => {
    el.remove();
  });
}

export function renderPhotos(data) {
  const container = document.querySelector('.pictures');
  const photosData = Array.isArray(data) ? data : [];
  const fragment = createPhotosFragment(photosData);
  container.appendChild(fragment);
}


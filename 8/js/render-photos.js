
import { dataPhotos } from './photos.js';

export function renderPhotos() {
  const container = document.querySelector('.pictures');
  const photoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const photoListFragment = document.createDocumentFragment();

  dataPhotos.forEach(({ url, description, likes, comments }) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoListFragment.appendChild(photoElement);
  });

  container.appendChild(photoListFragment);
}

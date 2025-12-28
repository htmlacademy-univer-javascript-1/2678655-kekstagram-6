import { isEscapeKey, getPhotoIdFromSrc, createCommentsSlice, findPhotoById } from '../utils/utils-modal.js';
import { COMMENTS_STEP } from '../data/data.js';

const container = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigImg = bigPicture.querySelector('.big-picture__img img');
const bigCountLikes = bigPicture.querySelector('.likes-count');
const bigCountComments = bigPicture.querySelector('.comments-count');
const bigComments = bigPicture.querySelector('.social__comments');
const bigDesc = bigPicture.querySelector('.social__caption');
const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const body = document.body;
let photos;
let currentComments = [];
let shownCommentsCount = 0;


function updateCommentCounter(visibleCount, totalCount) {
  const shownSpan = commentCountBlock.querySelector('.social__comment-shown-count');
  const totalSpan = commentCountBlock.querySelector('.social__comment-total-count');
  shownSpan.textContent = visibleCount;
  totalSpan.textContent = totalCount;
}

function appendCommentsSlice() {
  const start = shownCommentsCount;
  const end = start + COMMENTS_STEP;
  const slice = currentComments.slice(start, end);
  const lengthComments = currentComments.length;

  if (slice.length === 0) {
    return;
  }

  const commentsHtml = createCommentsSlice(slice);
  bigComments.insertAdjacentHTML('beforeend', commentsHtml);

  shownCommentsCount += slice.length;
  updateCommentCounter(shownCommentsCount,lengthComments);

  if (shownCommentsCount === currentComments.length) {
    commentsLoaderButton.classList.add('hidden');
  }
}

function resetComments() {
  currentComments = [];
  shownCommentsCount = 0;
  bigComments.innerHTML = '';
  commentCountBlock.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
}

function closePicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsLoaderButton.removeEventListener('click', appendCommentsSlice);
  document.removeEventListener('keydown', onDocumentKeydown);
  resetComments();
}

function fillPictureData(picture) {
  const smallImg = picture.querySelector('.picture__img');
  const likes = picture.querySelector('.picture__likes').textContent;
  const commentsCount = picture.querySelector('.picture__comments').textContent;
  const photoId = getPhotoIdFromSrc(smallImg.src);
  const photo = findPhotoById(photos,photoId);

  if (!photo) {
    resetComments();
    return;
  }

  bigImg.src = photo.url;
  bigDesc.textContent = photo.description;
  bigCountLikes.textContent = likes;
  bigCountComments.textContent = commentsCount;

  currentComments = photo.comments || [];
  shownCommentsCount = 0;
  bigComments.innerHTML = '';

  const commentCountBlock = bigPicture.querySelector('.social__comment-count');
  commentCountBlock.innerHTML = `
    <span class="social__comment-shown-count">${shownCommentsCount}</span> из
    <span class="social__comment-total-count">${currentComments.length}</span> комментариев
  `;

  if (currentComments.length === 0) {
    resetComments();
  } else {
    commentCountBlock.classList.remove('hidden');
    commentsLoaderButton.classList.remove('hidden');
    appendCommentsSlice();
    commentsLoaderButton.addEventListener('click', appendCommentsSlice);
  }
}

function showPictureModal() {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closePicture,{once:true});
}

function openPicture(picture) {
  fillPictureData(picture);
  showPictureModal();
}

function onContainerClick(evt) {
  const picture = evt.target.closest('.picture');
  if (!picture) {
    return;
  }
  evt.preventDefault();
  openPicture(picture);
}
export function initPreviewModal(data) {
  photos = Array.isArray(data) ? data : [];
  container.addEventListener('click', onContainerClick);
  // uploadInput.addEventListener('change', onUploadChange)
}

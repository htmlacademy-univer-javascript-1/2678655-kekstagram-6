import { renderPhotos } from './render-photos.js';
import { getData } from './api.js';
import { DELAY, URL } from '../data/data.js';
import { initPreviewModal } from './render-preview-modal.js';
import { initFilters } from './filters.js';

let hideTimeoutId;


function showError() {
  const container = document.querySelector('.pictures');
  const el = createErrorFragment();
  container.appendChild(el);

  const startTimeout = () => {
    hideTimeoutId = setTimeout(() => {
      el.remove();
    }, DELAY);
  };

  el.addEventListener('mouseenter', () => clearTimeout(hideTimeoutId));
  el.addEventListener('mouseleave', startTimeout);

  startTimeout();
}


function createErrorFragment() {
  const errorTemplate = document.querySelector('#photo-error')
    .content
    .querySelector('.data-error');
  const errorEl = errorTemplate.cloneNode(true);

  Object.assign(errorEl.style, {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)'
  });

  return errorEl;
}


export async function initPhotos() {
  let photos = [];

  try {
    photos = await getData(URL);
    console.log('send')
  } catch (error) {
    showError();
  }

  renderPhotos(photos);
  initPreviewModal(photos);
  initFilters(photos);
}

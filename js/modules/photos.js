import { renderPhotos } from './render-photos.js';
import { getData } from './api.js';
import { URL_PHOTOS } from '../data/data.js';
import { initPreviewModal } from './render-preview-modal.js';

export async function initPhotos() {
  try {
    const photos = await getData(URL_PHOTOS);
    renderPhotos(photos);
    initPreviewModal(photos);
  } catch (error) {
    renderPhotos(null);
  }
}

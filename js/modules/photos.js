import { PHOTO_COUNT, DESCRIPTION, LIKES_COUNT_MIN, LIKES_COUNT_MAX } from '../data/data.js';
import { createSequentialIdPhoto, getRandomInteger, getRandomArrayElement } from '../utils/utils.js';
import { createComments } from '../modules/comments.js';

function createPhoto () {
  const id = createSequentialIdPhoto();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments: createComments()
  };
}

export const photosData = Array.from({ length: PHOTO_COUNT }, createPhoto);

export function findPhotoById(id) {
  return photosData.find((photo) => photo.id === id);
}

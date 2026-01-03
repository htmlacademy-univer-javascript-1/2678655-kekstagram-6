import { COUNT_PHOTO_RANDOM } from '../data/data.js';

function filterDiscussed(photos){
  const data = photos;
  return data.slice().sort((a, b) => b.comments.length - a.comments.length);
}

function filterRandom(photos) {
  const newArray = [];
  const ids = [];

  while (newArray.length < COUNT_PHOTO_RANDOM) {
    const randomIndex = Math.floor(Math.random() * photos.length);
    if (!ids.includes(randomIndex)) {
      ids.push(randomIndex);
      newArray.push(photos[randomIndex]);
    }
  }
  return newArray;
}

function filterDefault(photos){
  return photos;
}

export function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export const filterHandlers = {
  'filter-discussed': filterDiscussed,
  'filter-default': filterDefault,
  'filter-random': filterRandom,
};

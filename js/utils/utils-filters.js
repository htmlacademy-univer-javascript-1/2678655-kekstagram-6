import { COUNT_PHOTO_RANDOM } from '../data/data.js';

function filterDiscussed(photos){
  return [...photos].sort((a, b) => b.comments.length - a.comments.length);
}
function filterRandom(photos) {
  const data = [...photos];
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data.slice(0,COUNT_PHOTO_RANDOM);
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

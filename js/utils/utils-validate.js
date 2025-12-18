import { MAX_HASHTAGS, MAX_HASHTAG_LENGTH, MAX_DESC_LENGTH } from '../data/data.js';

const HASHTAG_REGEX = /^#[a-zа-яё0-9]+$/i;

function getHashtags(value) {
  return value.trim().split(/\s+/).filter((tag) => tag.length > 0);
}

export function addFieldValidator(pristineInstance, field, validatorFn, errorMessage, priority = 1, halt = true) {
  pristineInstance.addValidator(field, validatorFn, errorMessage, priority, halt);
}

export function isTextFieldFocused(fieldFirst, fieldSecond) {
  const activeElement = document.activeElement;
  return activeElement === fieldFirst || activeElement === fieldSecond;
}

export function isCountHash(value) {
  const tags = getHashtags(value);
  return tags.length <= MAX_HASHTAGS;
}

export function isUniqueTags(value) {
  const tags = getHashtags(value);
  const lowerTags = tags.map((tag) => tag.toLowerCase());
  return new Set(lowerTags).size === lowerTags.length;
}

export function isEachTagValid(value) {
  const tags = getHashtags(value);
  return tags.every((tag) =>
    tag.length <= MAX_HASHTAG_LENGTH && HASHTAG_REGEX.test(tag)
  );
}

export function isNotOnlyHash(value) {
  const tags = getHashtags(value);
  return tags.every((tag) => tag !== '#');
}

export function isDescLength(value) {
  return value.length <= MAX_DESC_LENGTH;
}

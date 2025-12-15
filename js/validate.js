import { MAX_HASHTAGS, MAX_HASHTAG_LENGTH, MAX_DESC_LENGTH } from './data.js';

const HASHTAG_REGEX = /^#[a-zа-яё0-9]+$/i;

function getHashtags(value) {
  return value
    .trim()
    .split(/\s+/)
    .filter((tag) => tag.length > 0);
}

export function isValidateHashtags(value) {
  const tags = getHashtags(value);

  if (tags.length === 0) {
    return true;
  }

  const isCountTags = tags.length <= MAX_HASHTAGS;
  const lowerTags = tags.map((tag) => tag.toLowerCase());
  const isUnique = new Set(lowerTags).size === lowerTags.length;

  const isEachTagValid = tags.every((tag) => {
    const isLengthValid = tag.length <= MAX_HASHTAG_LENGTH;
    const isRegexValid = HASHTAG_REGEX.test(tag);
    return isLengthValid && isRegexValid;
  });

  return isCountTags && isUnique && isEachTagValid;
}

export function isValidateDesc(value) {
  if (value.length === 0) {
    return true;
  }
  return value.length <= MAX_DESC_LENGTH;
}

const usedCommentIds = new Set();

export const getRandomUniqueInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  if (usedCommentIds.size >= (upper - lower + 1)) {
    usedCommentIds.clear();
  }

  let result;
  do {
    result = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  } while (usedCommentIds.has(result));

  usedCommentIds.add(result);
  return result;
};

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

export const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

export const getCount = () => {
  let countId = 0;
  return () => ++countId;
};


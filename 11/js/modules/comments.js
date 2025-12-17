import { getRandomArrayElement,getRandomInteger,createSequentialIdComment } from '../utils/utils.js';
import { NAME, MESSAGE, COMMENT_COUNT, AVATAR_COUNT } from '../data/data.js';

export function getRandomMessage(){
  const count = getRandomInteger(1, 2);
  const messages = Array.from({length: count}, () => getRandomArrayElement(MESSAGE));
  return messages.join(' ');
}
export function createComment() {
  return {
    id: createSequentialIdComment(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: getRandomMessage(),
    name: getRandomArrayElement(NAME)
  };
}

export function createComments() {
  return Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, createComment);
}

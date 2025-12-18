export const COMMENTS_STEP = 5;
export const MAX_HASHTAGS = 5;
export const MAX_HASHTAG_LENGTH = 20;
export const MAX_DESC_LENGTH = 140;
export const URL_PHOTOS = 'https://29.javascript.htmlacademy.pro/kekstagram/data';


export const pristineError = {
  INVALID_HASHTAG: `Хэш-тег должен начинаться с # и быть не длиннее ${MAX_HASHTAG_LENGTH} символов`,
  ONLY_HASH: 'Хэш-тег не может состоять только из символа #',
  MAX_HASHTAGS: `Не больше ${MAX_HASHTAGS} хэш-тегов`,
  DUPLICATE_HASHTAGS: 'Хэш-теги не должны повторяться',
  MAX_DESCRIPTION: `Поле не должно превышать ${MAX_DESC_LENGTH} символов`,
};

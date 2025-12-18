import { isEscapeKey } from '../utils/utils-modal.js';
import {
  isTextFieldFocused,
  addFieldValidator,
  isNotOnlyHash,
  isCountHash,
  isUniqueTags,
  isEachTagValid,
  isDescLength
} from '../utils/utils-validate.js';
import { pristineError } from '../data/data.js';

const overlay = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const closeButton = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const descField = form.querySelector('.text__description');
const body = document.body;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div'
});

addFieldValidator(pristine, hashtagField, isNotOnlyHash, pristineError.ONLY_HASH, 4, true);
addFieldValidator(pristine, hashtagField, isCountHash, pristineError.MAX_HASHTAGS, 3, true);
addFieldValidator(pristine, hashtagField, isUniqueTags, pristineError.DUPLICATE_HASHTAGS, 2, true);
addFieldValidator(pristine, hashtagField, isEachTagValid, pristineError.INVALID_HASHTAG, 1, true);
addFieldValidator(pristine, descField, isDescLength, pristineError.MAX_DESCRIPTION);

function resetUploadInput() {
  uploadInput.value = '';
}

function onDocumentKeydown(event) {
  if (isEscapeKey(event) && !isTextFieldFocused(hashtagField, descField)) {
    event.preventDefault();
    closeForm();
  }
}

function openModal() {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeForm, { once: true });
}

function closeForm() {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  resetUploadInput();
  document.removeEventListener('keydown', onDocumentKeydown);
}

export function initForm() {
  uploadInput.addEventListener('change', openModal);

  form.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
    }
  });
}
